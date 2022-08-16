import { DropdownPositions } from './Dropdown';

export const DeterminePosition = (position: DropdownPositions): string => {
  if (position === DropdownPositions.Right) {
    return 'translateX(-1rem)';
  }

  if (position === DropdownPositions.Top) {
    return 'translateY(1rem)';
  }

  return 'translateY(-1rem)';
};
