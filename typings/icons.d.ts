type iconsProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

declare module '@igloo-ui/icons/dist/Star' {
  export default function Star(props: iconsProps): JSX.Element;
}

declare module '@igloo-ui/icons/dist/Plus' {
  export default function Plus(props: iconsProps): JSX.Element;
}

declare module '@igloo-ui/icons/dist/SuccessSolid' {
  export default function SuccessSolid(props: iconsProps): JSX.Element;
}

declare module '@igloo-ui/icons/dist/RemoveSolid' {
  export default function RemoveSolid(props: iconsProps): JSX.Element;
}
declare module '@igloo-ui/icons/dist/Close' {
  export default function Close(props: iconsProps): JSX.Element;
}
