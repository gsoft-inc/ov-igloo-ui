import { SelectOptionProps } from './Select';

interface ReactSelectOption {
  value: string;
  label: string;
  [key: string]: any;
}

export const OptionConverter = (
  selectOption: SelectOptionProps
): ReactSelectOption => {
  const { value, label, disabled, icon } = selectOption;

  if (value) {
    return null;
  }

  if (label) {
    return null;
  }

  const convertedOption: ReactSelectOption = {
    value: value.toString(),
    label,
    disabled,
    icon,
  };

  return convertedOption;
};
