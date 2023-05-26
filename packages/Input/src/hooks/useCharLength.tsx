import * as React from 'react';

export default function useCharLength(
  value: string,
  maxLength: number
): number {
  const [currentCharLength, setCurrentCharLength] = React.useState(
    value?.toString().length ?? 0
  );

  React.useEffect(() => {
    const currentValue = value?.toString() ?? '';
    let currentValueLength = currentValue.length ?? 0;

    const emojiRegexExp =
      // eslint-disable-next-line max-len
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    const hasEmoji = emojiRegexExp.test(currentValue);

    if (currentValue.length === maxLength! - 1 && hasEmoji) {
      currentValueLength = currentValue.length + 1;
    }

    setCurrentCharLength(currentValueLength);
  }, [value, maxLength]);

  return currentCharLength;
}
