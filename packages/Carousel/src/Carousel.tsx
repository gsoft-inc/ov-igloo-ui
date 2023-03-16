import * as React from 'react';
import cx from 'classnames';

import './carousel.scss';

export interface CarouselProps extends React.ComponentProps<'div'> {
  /** Contains the slides */
  children: React.ReactNode;
  /** Add a specific class to the carousel component */
  className?: string;
  /** The current slide number starting at 0 */
  currentSlide?: number;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Event called when the page is changed */
  onPageChange?: (index: number) => void;
  /** The button displayed on the right */
  primaryAction?: React.ReactElement;
  /** The secondary button displayed on the left */
  secondaryAction?: React.ReactElement;
}

const Carousel: React.FunctionComponent<CarouselProps> = ({
  children,
  className,
  currentSlide = 0,
  dataTest,
  onPageChange,
  primaryAction,
  secondaryAction,
}: CarouselProps) => {
  const classes = cx('ids-carousel', className, {
    'ids-carousel--has-actions': secondaryAction || secondaryAction,
  });

  const childArray = React.Children.toArray(children);

  const handleOnPageChange = (index: number): void => {
    if (onPageChange) {
      onPageChange(index);
    }
  };

  return (
    <div className={classes} data-test={dataTest}>
      <div className="ids-carousel__slides">
        <div className="ids-carousel__slide">{childArray[currentSlide]}</div>
      </div>
      <div className="ids-carousel__nav-bar">
        <div className="ids-carousel__action-wrapper">
          {secondaryAction &&
            React.cloneElement(secondaryAction, {
              className: 'ids-carousel__secondary-action',
            })}
        </div>
        <div className="ids-carousel__bullet-list">
          {React.Children.map(childArray, (_child, index) => {
            const bulletClasses = cx('ids-carousel__bullet', {
              'ids-carousel__bullet--active': index === currentSlide,
            });
            return (
              <button
                className={bulletClasses}
                onClick={() => handleOnPageChange(index)}
                title={`Page ${index}`}
                aria-label={`Page ${index}`}
              />
            );
          })}
        </div>

        <div className="ids-carousel__action-wrapper">
          {primaryAction &&
            React.cloneElement(primaryAction, {
              className: 'ids-carousel__primary-action',
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
