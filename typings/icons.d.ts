type iconsProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

declare module '@igloo-ui/icons/*' {
  const Icon: React.FC<iconsProps>;
  export default Icon;
}
