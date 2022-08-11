export const DeterminePosition = (
  onTheRight: boolean,
  above: boolean
): string => {
  if (onTheRight) {
    return 'translateX(-1rem)';
  }

  if (above) {
    return 'translateY(1rem)';
  }

  return 'translateY(-1rem)';
};
