import * as React from "react";

import { I18nProvider, type I18nProviderProps, useLocale, useLocalizedStringFormatter } from "react-aria";

import "./provider.scss";

export type AvailableLocales = "en-US" | "fr-CA";

export interface IglooProviderProps extends I18nProviderProps {
    locale: AvailableLocales;
}
const IglooProvider : React.FunctionComponent<IglooProviderProps> = props => { 
    return (
        <I18nProvider {...props} />
    );
};

export default IglooProvider;

export { useLocale, useLocalizedStringFormatter }; 