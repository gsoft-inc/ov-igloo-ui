import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ClipboardCopy from './ClipboardCopy';

export default function Highlighter({ language, children, action }) {
  return (
    <div className="io-highlighter">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        className="io-highlighter__syntax"
      >
        {children}
      </SyntaxHighlighter>
      {action && (
        <ClipboardCopy
          dark
          className="io-highlighter__action"
          textToCopy={children}
        />
      )}
    </div>
  );
}

Highlighter.defaultProps = {
  language: 'javascript',
  action: true,
};
