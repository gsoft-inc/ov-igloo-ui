import { useState } from 'react';
import cx from 'classnames';

import { Copy, Check } from './icons';

export default function ClipboardCopy({ dark, textToCopy, icon, className }) {
  const [isCopied, setIsCopied] = useState(false);

  icon = icon || <Copy />;

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  function handleCopyClick() {
    copyTextToClipboard(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const classes = cx('io-btn-copy', className, {
    'io-btn-copy--dark': dark,
  });

  return (
    <button className={classes} onClick={handleCopyClick}>
      {isCopied ? <Check /> : icon}
    </button>
  );
}
