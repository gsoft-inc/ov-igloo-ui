import React from 'react';
import Graphemer from 'graphemer';

const useTruncateValue = (): ((
  inputValue: string,
  inputMaxLength?: number,
) => string) => {
  const truncateValue = React.useCallback(
    (inputValue: string, inputMaxLength?: number): string => {
      const splitter = new Graphemer();
      const graphemes = splitter.splitGraphemes(inputValue);

      let truncatedValue = '';
      let totalLength = 0;

      if (inputMaxLength && inputValue.length > inputMaxLength) {
        graphemes.some((grapheme) => {
          if (
            !inputMaxLength ||
            totalLength + grapheme.length <= inputMaxLength
          ) {
            truncatedValue += grapheme;
            totalLength += grapheme.length;
          } else {
            return true;
          }
          return false;
        });

        return truncatedValue;
      }
      return inputValue;
    },
    [],
  );

  return truncateValue;
};

export default useTruncateValue;
