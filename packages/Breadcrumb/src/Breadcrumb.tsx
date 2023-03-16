import * as React from 'react';

import cx from 'classnames';

import ChevronLeft from '@igloo-ui/icons/dist/ChevronLeft';
import ChevronRight from '@igloo-ui/icons/dist/ChevronRight';

import './breadcrumb.scss';

type Item = {
  /** Add text for the breadcrumb */
  label: React.ReactNode;
  link?: string;
};

export interface BreadcrumbProps extends React.ComponentProps<'ol'> {
  /** Add a specific class to the tabs component */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Add a list of items to the breadcrumb */
  items: Item[];
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  className,
  dataTest,
  items,
}: BreadcrumbProps) => {
  const classes = cx('ids-breadcrumb', className);

  const listItems = items.map((item, index) => {
    const { label, link } = item;
    const current = !link && typeof label === 'string';
    const isCustomLabel = typeof label !== 'string';
    const isBackLink = items.length === 1 && (link || isCustomLabel);
    const itemClasses = cx('ids-breadcrumb__item', {
      'ids-breadcrumb__item--current': current,
      'ids-breadcrumb__item--is-back-link': isBackLink,
    });

    let displayLabel = label;
    if (isCustomLabel) {
      displayLabel = React.cloneElement(label as React.ReactElement, {
        className: 'ids-breadcrumb__link',
      });
    }

    return (
      <li
        key={`breadcrumb${index.toString()}`}
        aria-current={current && 'page'}
        className={itemClasses}
      >
        {isBackLink && (
          <ChevronLeft size="small" className="ids-breadcrumb__chevron" />
        )}
        {item.link ? (
          <a href={link} className="ids-breadcrumb__link">
            {displayLabel}
          </a>
        ) : (
          displayLabel
        )}

        {!isBackLink && !current && (
          <ChevronRight size="small" className="ids-breadcrumb__chevron" />
        )}
      </li>
    );
  });

  return (
    <nav aria-label="Breadcrumb" className={classes} data-test={dataTest}>
      <ol className="ids-breadcrumb__list">{listItems}</ol>
    </nav>
  );
};

export default Breadcrumb;
