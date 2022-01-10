export type Position = 'top' | 'right' | 'bottom' | 'left';

const hasPlaceAtTop = (domRect: DOMRect, position: Position): boolean => {
  return (
    (position === 'top' && domRect.top >= 0) || domRect.top >= domRect.height
  );
};

const hasPlaceAtLeft = (domRect: DOMRect, position: Position): boolean => {
  return (
    (position === 'left' && domRect.left >= 0) || domRect.left >= domRect.width
  );
};

const hasPlaceAtBottom = (domRect: DOMRect): boolean => {
  return (
    domRect.bottom > domRect.height &&
    domRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

const hasPlaceAtRight = (domRect: DOMRect): boolean => {
  return (
    domRect.right > domRect.width &&
    domRect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const isNotFittingOnTop = (domRect: DOMRect, position: Position): boolean => {
  return !hasPlaceAtTop(domRect, position) && hasPlaceAtBottom(domRect);
};

const isNotFittingOnRight = (domRect: DOMRect, position: Position): boolean => {
  return !hasPlaceAtRight(domRect) && hasPlaceAtLeft(domRect, position);
};

const isNotFittingOnBottom = (
  domRect: DOMRect,
  position: Position
): boolean => {
  return !hasPlaceAtBottom(domRect) && hasPlaceAtTop(domRect, position);
};

const isNotFittingOnLeft = (domRect: DOMRect, position: Position): boolean => {
  return !hasPlaceAtLeft(domRect, position) && hasPlaceAtRight(domRect);
};

export const GetVisiblePosition = (
  domRect: DOMRect,
  position: Position
): Position => {
  switch (position) {
    case 'top':
      return isNotFittingOnTop(domRect, position) ? 'bottom' : 'top';
    case 'right':
      return isNotFittingOnRight(domRect, position) ? 'left' : 'right';
    case 'bottom':
      return isNotFittingOnBottom(domRect, position) ? 'top' : 'bottom';
    case 'left':
      return isNotFittingOnLeft(domRect, position) ? 'right' : 'left';
    default:
      return 'top';
  }
};
