import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

import ClipboardCopy from './ClipboardCopy';

SyntaxHighlighter.registerLanguage('bash', bash);

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', jsx);

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('css', scss);

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
