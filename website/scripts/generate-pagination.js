export const findCurrentComponentIndex = (componentsList, currentComponent) => {
  const findCurrentComponent = (component) => component === currentComponent;
  return componentsList.findIndex((item) => findCurrentComponent(item));
};

export const generatePagination = (componentsList, currentComponent) => {
  const currentIndex = findCurrentComponentIndex(
    componentsList,
    currentComponent
  );

  let prev = null;
  let next = null;

  if (currentIndex > 0) {
    prev = componentsList[currentIndex - 1];
  }

  if (currentIndex < componentsList.length - 1) {
    next = componentsList[currentIndex + 1];
  }

  return { prev, next };
};
