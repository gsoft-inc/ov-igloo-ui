import * as React from 'react';

export default function useCharLength(
  value: string,
  maxLength: number,
): number {
  const [currentCharLength, setCurrentCharLength] = React.useState(
    value?.toString().length ?? 0,
  );

  React.useEffect(() => {
    const currentValue = value?.toString() ?? '';
    const currentValueLength = currentValue.length ?? 0;

    setCurrentCharLength(currentValueLength);
  }, [value, maxLength]);

  return currentCharLength;
}
