import { CopyBlock, tomorrowNightEighties } from 'react-code-blocks';
import cx from 'classnames';

export default function Code({
  children,
  language = 'javascript',
  inline = false,
  light = false,
}) {
  return inline ? (
    <code className={cx('io-code--inline', { 'io-code--light': light })}>
      {children}
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
