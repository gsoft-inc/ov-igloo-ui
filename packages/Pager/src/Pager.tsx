import * as React from "react";
import cx from "classnames";
import ChevronLeft from "@igloo-ui/icons/dist/ChevronLeft";
import ChevronRight from "@igloo-ui/icons/dist/ChevronRight";

import { usePagination, JUMPPREV, JUMPNEXT } from "./usePagination";
import { EllipsisIcon } from "./svgs";
import intlMessages from "./intl";
import { useLocalizedStringFormatter } from "@igloo-ui/provider";

import "./pager.scss";

export interface PagerProps extends React.ComponentProps<"div"> {
    /** Add a specific class to the pager component */
    className?: string;
    /** The number of the currently active page */
    currentPage: number;
    /** Add a data-test tag for automated tests */
    dataTest?: string;
    /** Called when the page is changed. */
    onPageChange: (pageNum: number) => void;
    /** Specify the number of elements each page should contain */
    pageSize: number;
    /** Represents how many pages should
   * be on each side of the current page.  */
    siblingCount?: number;
    /** The total amount of elements */
    totalCount: number;
}

const Pager: React.FunctionComponent<PagerProps> = ({
    className,
    currentPage,
    dataTest,
    onPageChange,
    pageSize,
    siblingCount = 1,
    totalCount,
    ...rest
}: PagerProps) => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);

    const paginationRange = usePagination({
        currentPage,
        pageSize,
        siblingCount,
        totalCount
    });

    const lastPage = paginationRange[paginationRange.length - 1];
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const onNext = (): void => {
        if (totalPageCount > currentPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = (): void => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const onJumpPrevious = (): void => {
        onPageChange(Math.max(currentPage - 5, 1));
    };

    const onJumpNext = (): void => {
        onPageChange(Math.min(currentPage + 5, totalPageCount));
    };

    const renderPrevNext = (type: string): React.ReactNode => {
        const isPrev = type === "prev";
        const isDisabled = isPrev ? currentPage === 1 : currentPage === lastPage;

        return (
            <li className="ids-pager__item">
                <button
                    className={cx("ids-pager__button", `ids-pager__${type}`)}
                    onClick={isPrev ? onPrevious : onNext}
                    disabled={isDisabled}
                    aria-label={isPrev ? 
                        stringFormatter.format("goToPreviousPage") : 
                        stringFormatter.format("goToNextPage")}
                >
                    {isPrev && <ChevronLeft size="small" />}
                    {!isPrev && <ChevronRight size="small" />}
                </button>
            </li>
        );
    };

    return (
        <div className={cx("ids-pager", className)} {...rest}>
            <nav
                aria-label="Pagination"
                className="ids-pager__nav"
                data-test={dataTest}
            >
                <ol className="ids-pager__list">
                    {renderPrevNext("prev")}

                    {paginationRange.map(pageNumber => {
                        let pagerBtn = <></>;

                        switch (pageNumber) {
                            case JUMPPREV:
                                pagerBtn = (
                                    <button
                                        className="ids-pager__button ids-pager__ellipsis"
                                        onClick={onJumpPrevious}
                                        aria-label={stringFormatter.format("jumpBack5Pages")}
                                    >
                                        <EllipsisIcon />
                                    </button>
                                );
                                break;
                            case JUMPNEXT:
                                pagerBtn = (
                                    <button
                                        className="ids-pager__button ids-pager__ellipsis"
                                        onClick={onJumpNext}
                                        aria-label={stringFormatter.format("jumpForward5Pages")}
                                    >
                                        <EllipsisIcon />
                                    </button>
                                );
                                break;
                            default:
                                pagerBtn = (
                                    <button
                                        className={cx("ids-pager__button ids-pager__button--number", {
                                            "ids-pager__button--selected": pageNumber === currentPage
                                        })}
                                        onClick={() => onPageChange(pageNumber as number)}
                                        aria-current={pageNumber === currentPage && "page"}
                                        aria-label={
                                            pageNumber === currentPage
                                                ? `${stringFormatter.format("page", { 
                                                    pageNumber: pageNumber 
                                                })}`
                                                : `${stringFormatter.format("goToPage", { 
                                                    pageNumber: pageNumber 
                                                })}`
                                        }
                                    >
                                        {pageNumber}
                                    </button>
                                );
                                break;
                        }

                        return (
                            <li key={pageNumber.toString()} className="ids-pager__item">
                                {pagerBtn}
                            </li>
                        );
                    })}

                    {renderPrevNext("next")}
                </ol>
            </nav>
            <div className="ids-pager__results">
                {stringFormatter.format("pageResults", {
                    minResult: pageSize * currentPage - pageSize + 1,
                    maxResult: Math.min(pageSize * currentPage, totalCount),
                    totalResults: totalCount
                })}
            </div>
        </div>
    );
};

export default Pager;
