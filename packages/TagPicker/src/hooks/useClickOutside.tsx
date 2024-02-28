import { useEffect, type RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
    refs:
    | Array<RefObject<T> | HTMLElement | undefined | null>
    | RefObject<T>
    | HTMLElement,
    callback?: (event: Event) => void
): void => {
    useEffect(() => {
        const handleClickOutside = (event: Event): unknown => {
            if (event instanceof MouseEvent && event.button !== 0) {
                return;
            }

            const refTargets = Array.isArray(refs) ? refs : [refs];

            const hasClickedOutsideAllRefs = refTargets.every(ref => {
                if (ref instanceof HTMLElement) {
                    return !ref || !ref.contains(event?.target as Node);
                }

                return !ref?.current || !ref?.current.contains(event?.target as Node);
            });

            if (hasClickedOutsideAllRefs && callback) {
                callback(event);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [callback, refs]);
};

export default useClickOutside;
