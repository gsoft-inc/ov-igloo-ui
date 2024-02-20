/**
  * @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';

import Provider, { useLocale, useLocalizedStringFormatter } from './Provider';
import intlMessages from "./intl";

interface TestComponentProps {
    message: string;
}

const TestComponent = ({message}: TestComponentProps) => {
    const { locale } = useLocale();
    return <div lang={locale}>{message}</div>;
};

const TestMessageComponent = () => {
    const stringFormatter = useLocalizedStringFormatter(intlMessages);
    return <div>{stringFormatter.format("testMessage")}</div>;
};

describe('Provider', () => {
    test("It should render a div with a lang attribute value of 'fr-CA'", () => {
        render(
            <Provider locale="fr-CA">
                <TestComponent message="Test useLocale" />
            </Provider>
        );
        const wrapper = screen.getByText('Test useLocale');
        expect(wrapper).toHaveAttribute('lang', 'fr-CA');
    });

    test("It should render an English message from the intl folder", () => {
        render(
            <Provider locale="en-US">
                <TestMessageComponent />
            </Provider>
        );
        const wrapper = screen.getByText('test message');
        expect(wrapper).toBeInTheDocument();
    });
});
