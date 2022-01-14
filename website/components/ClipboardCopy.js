import { useState } from 'react';

import { Copy, Check } from './icons';

export default function ClipboardCopy({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);

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

  return (
    <button className="io-btn-copy" onClick={handleCopyClick}>
      {isCopied ? <Check /> : <Copy />}
    </button>
  );
}
