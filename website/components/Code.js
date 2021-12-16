import { CopyBlock, tomorrowNightEighties } from 'react-code-blocks';

export default function Code({
  children,
  language = 'javascript',
  inline = false,
}) {
  return inline ? (
    <code className="io-code--inline">{children}</code>
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
