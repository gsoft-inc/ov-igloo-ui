import * as React from "react";

import { I18nProvider, type I18nProviderProps, useLocale, useLocalizedStringFormatter } from "react-aria";

export type AvailableLocales = "en-US" | "fr-CA";

export interface IglooProviderProps extends Omit<I18nProviderProps, "locale"> {
    locale: AvailableLocales;
}
const IglooProvider: React.FunctionComponent<IglooProviderProps> = props => {
    return (
        <I18nProvider {...props} />
    );
};

export { useLocale, useLocalizedStringFormatter };

export default IglooProvider;
