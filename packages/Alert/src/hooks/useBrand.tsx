import { useEffect, useState } from "react";

export const useBrand = (): boolean => {
    const [isWorkleap, setIsWorkleap] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "data-brand") {
                    const brand = document.documentElement.getAttribute("data-brand");
                    setIsWorkleap(brand === "workleap");
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return isWorkleap;
};