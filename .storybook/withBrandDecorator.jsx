import React from 'react';

export const withBrandDecorator = (StoryFn, context) => {
    return (
        <BrandProvider brand={context.globals.brand} >
            {StoryFn()}
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
