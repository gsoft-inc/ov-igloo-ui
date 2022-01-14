import { CopyBlock, tomorrowNightEighties } from 'react-code-blocks';
import cx from 'classnames';

import ClipboardCopy from './ClipboardCopy';

export default function Code({
  children,
  language = 'javascript',
  inline = false,
  light = false,
  copy = false,
}) {
  return inline ? (
    <code
      className={cx('io-code--inline', {
        'io-code--light': light,
        'io-code--copy': copy,
      })}
    >
      {children}
      {copy && <ClipboardCopy textToCopy={children} />}
    </code>
  ) : (
    <span className="io-code">
      <CopyBlock
        text={children}
        language={language}
        theme={tomorrowNightEighties}
        showLineNumbers={false}
        wrapLines
        codeBlock
      />
    </span>
  );
}
