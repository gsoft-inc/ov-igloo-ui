declare module '*/axe-helper.js' {
  import { AxeResults } from 'axe-core';

  const axe: {
    (node: Element, options?: any): Promise<AxeResults>;
    configure(options: any): void;
    cleanup(): void;
  };

  export default axe;
}
