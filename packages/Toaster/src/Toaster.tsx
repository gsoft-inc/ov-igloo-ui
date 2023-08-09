import * as React from "react";
import ReactDOM from "react-dom";
import { useToastQueue, ToastQueue } from "@react-stately/toast";
import type { AriaToastRegionProps } from "@react-aria/toast";
import { useSyncExternalStore } from "use-sync-external-store/shim";

import ToastRegion from "./ToastRegion";

import "./toaster.scss";

export interface ToastArgs {
    isClosable?: boolean;
    status?: "success" | "error";
    message: string;
}

export interface ToastQueueOptionsProps {
    duration?: number | "infinite";
    isClosable?: boolean;
}

export interface ToastQueueProps {
    success: (message: string, options?: ToastQueueOptionsProps) => void;
    error: (message: string, options?: ToastQueueOptionsProps) => void;
}

const TOAST_DURATION = 4000 as const;

// There is a single global toast queue instance for the whole app,
// initialized lazily.
let globalToastQueue: ToastQueue<ToastArgs> | null = null;
const getGlobalToastQueue = (): ToastQueue<ToastArgs> => {
    if (!globalToastQueue) {
        globalToastQueue = new ToastQueue({
            maxVisibleToasts: 5,
            hasExitAnimation: true
        });
    }

    return globalToastQueue;
};

// For testing. Not exported from the package index.
export const clearToastQueue = (): void => {
    globalToastQueue = null;
};

const toastProviders = new Set();
const subscriptions = new Set<() => void>();
const subscribe = (fn: () => void): (() => void) => {
    subscriptions.add(fn);

    return () => subscriptions.delete(fn);
};

const getActiveToastContainer = (): unknown => {
    return toastProviders.values().next().value;
};

const useActiveToastContainer = (): unknown => {
    return useSyncExternalStore(
        subscribe,
        getActiveToastContainer,
        getActiveToastContainer
    );
};

const addToast = (
    message: string,
    status: "success" | "error",
    duration: number | "infinite",
    isClosable: boolean
): void => {
    const queue = getGlobalToastQueue();
    queue.add(
        { message, status, isClosable },
        { timeout: duration === "infinite" ? undefined : duration }
    );
};

const toastQueue: ToastQueueProps = {
    success: (message, options: ToastQueueOptionsProps = {}) => {
        const { duration = TOAST_DURATION, isClosable = false } = options;
        addToast(message, "success", duration, isClosable);
    },
    error: (message, options: ToastQueueOptionsProps = {}) => {
        const { duration = TOAST_DURATION, isClosable = false } = options;
        addToast(message, "error", duration, isClosable);
    }
};

const Toaster: React.FunctionComponent<AriaToastRegionProps> = (
    props: AriaToastRegionProps
) => {
    // Track all toast provider instances in a set.
    // Only the first one will actually render.
    // We use a ref to do this, since it will have a stable identity
    // over the lifetime of the component.
    const ref = React.useRef();

    React.useEffect(() => {
        toastProviders.add(ref);

        return () => {
            // When this toast provider unmounts, reset all animations so that
            // when the new toast provider renders, it is seamless.
            getGlobalToastQueue().visibleToasts.forEach(toast => {
                toast.animation = undefined;
            });

            // Remove this toast provider, and call subscriptions.
            // This will cause all other instances to re-render,
            // and the first one to become the new active toast provider.
            toastProviders.delete(ref);
            subscriptions.forEach(fn => {
                fn();
            });
        };
    }, []);

    // Only render if this is the active toast provider instance,
    // and there are visible toasts.
    const activeToastContainer = useActiveToastContainer();
    const toastState = useToastQueue(getGlobalToastQueue());
    if (ref === activeToastContainer && toastState.visibleToasts.length > 0) {
        const container = <ToastRegion state={toastState} {...props} />;

        return ReactDOM.createPortal(container, document.body);
    }

    return null;
};

export { toastQueue as toast };

export default Toaster;
