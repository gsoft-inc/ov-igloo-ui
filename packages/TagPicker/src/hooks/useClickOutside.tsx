import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: Array<RefObject<T> | undefined> | RefObject<T>,
  callback?: (event: Event) => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: Event): unknown => {
      if (event instanceof MouseEvent && event.button !== 0) {
        return;
      }

      const refTargets = Array.isArray(refs) ? refs : [refs];

      const hasClickedOutsideAllRefs = refTargets.every(
        (ref) => !ref?.current || !ref?.current.contains(event?.target as Node)
      );

      if (hasClickedOutsideAllRefs && callback) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback, refs]);
};

export default useClickOutside;
