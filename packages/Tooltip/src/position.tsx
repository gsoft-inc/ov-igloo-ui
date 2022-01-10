const { documentElement } = document;

export type Position = 'top' | 'right' | 'bottom' | 'left';

const hasPlaceAtTop = (
  tooltipDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    (position === 'top' && tooltipDomRect.top >= 0) ||
    tooltipDomRect.top >= tooltipDomRect.height
  );
};

const hasPlaceAtLeft = (
  tooltipDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    (position === 'left' && tooltipDomRect.left >= 0) ||
    tooltipDomRect.left >= tooltipDomRect.width
  );
};

const hasPlaceAtBottom = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect
): boolean => {
  const clientHeight = window.innerHeight || documentElement.clientHeight;

  return tooltipDomRect.height <= clientHeight - parentDomRect.bottom;
};

const hasPlaceAtRight = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect
): boolean => {
  const clientWidth = window.innerWidth || documentElement.clientWidth;

  return tooltipDomRect.width <= clientWidth - parentDomRect.right;
};

const isNotFittingOnTopButCanOnBottom = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    !hasPlaceAtTop(tooltipDomRect, position) &&
    hasPlaceAtBottom(tooltipDomRect, parentDomRect)
  );
};

const isNotFittingOnRightButCanOnLeft = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    !hasPlaceAtRight(tooltipDomRect, parentDomRect) &&
    hasPlaceAtLeft(tooltipDomRect, position)
  );
};

const isNotFittingOnBottomButCanOnTop = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    !hasPlaceAtBottom(tooltipDomRect, parentDomRect) &&
    hasPlaceAtTop(tooltipDomRect, position)
  );
};

const isNotFittingOnLeftButCanOnRight = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect,
  position: Position
): boolean => {
  return (
    !hasPlaceAtLeft(tooltipDomRect, position) &&
    hasPlaceAtRight(tooltipDomRect, parentDomRect)
  );
};

export const GetVisiblePosition = (
  tooltipDomRect: DOMRect,
  parentDomRect: DOMRect,
  position: Position
): Position => {
  switch (position) {
    case 'top':
      return isNotFittingOnTopButCanOnBottom(
        tooltipDomRect,
        parentDomRect,
        position
      )
        ? 'bottom'
        : 'top';
    case 'right':
      return isNotFittingOnRightButCanOnLeft(
        tooltipDomRect,
        parentDomRect,
        position
      )
        ? 'left'
        : 'right';
    case 'bottom':
      return isNotFittingOnBottomButCanOnTop(
        tooltipDomRect,
        parentDomRect,
        position
      )
        ? 'top'
        : 'bottom';
    case 'left':
      return isNotFittingOnLeftButCanOnRight(
        tooltipDomRect,
        parentDomRect,
        position
      )
        ? 'right'
        : 'left';
    default:
      return 'top';
  }
};
