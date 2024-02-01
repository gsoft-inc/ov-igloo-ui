import isChromatic from "chromatic/isChromatic";
import React from 'react';

export const withBrandDecorator = (Story, context) => {
    if(isChromatic()) { // The brand selector is not available in Chromatic
        return <Story />;
    }

    return (
        <BrandProvider brand={context.globals.brand} >
            <Story />
        </BrandProvider>
    )
}

export const BrandProvider = ({brand, children}) => {
    const [internalBrand, setInternalBrand] = React.useState();

    React.useEffect(() => {
        //document.documentElement refers to html tag inside iframe#storybook-preview-iframe
        document.documentElement.setAttribute('data-brand', brand);
        setInternalBrand(brand)

    }, [brand]);

    return <React.Fragment key={internalBrand}>{children}</React.Fragment>;
}
