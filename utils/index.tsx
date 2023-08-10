// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findByTestAttr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
