import { CopyBlock, a11yDark } from 'react-code-blocks';

export default function Code({ children, language = 'javascript' }) {
  return (
    <span className="io-code">
      <CopyBlock
        text={children}
        language={language}
        theme={a11yDark}
        showLineNumbers={false}
        wrapLines
        codeBlock
      />
    </span>
  );
}
