import cx from 'classnames';

import Highlighter from './Highlighter';
import ClipboardCopy from './ClipboardCopy';

export default function Code({
  children,
  language = 'javascript',
  inline = false,
  light = false,
  copy = false,
}) {
  const formatedLanguage = language.replace('language-', '');

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
      <Highlighter language={formatedLanguage}>{children}</Highlighter>
    </span>
  );
}
