import * as React from 'react';

export const JUMPPREV = 'jumpPrev';
export const JUMPNEXT = 'jumpNext';

interface PaginationProps {
  /** The number of the currently active page */
  currentPage: number;
  /** The number of elements each page should contain */
  pageSize: number;
  /** Represents how many pages should
   * be on each side of the current page.  */
  siblingCount: number;
  /** The total amount of elements */
  totalCount: number;
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  currentPage,
  pageSize,
  siblingCount,
  totalCount,
}: PaginationProps): Array<number | string> => {
  const paginationRange: Array<number | string> = React.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount +
    // firstPage + lastPage + currentPage + 2*ELLIPSIS
    const totalPageNums = siblingCount + 5;

    if (totalPageNums >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // No need to show an ellipsis if it would only be hiding one page number.
    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!showLeftEllipsis && showRightEllipsis) {
      // 3 being first page plus 2 pages that are normally hidden.
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, JUMPNEXT, totalPageCount];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, JUMPPREV, ...rightRange];
    }

    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        JUMPPREV,
        ...middleRange,
        JUMPNEXT,
        lastPageIndex,
      ];
    }

    return [];
  }, [currentPage, pageSize, siblingCount, totalCount]);

  return paginationRange;
};
