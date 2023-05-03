import * as React from 'react';

import cx from 'classnames';

import { EditorState, LexicalEditor } from 'lexical';
import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// eslint-disable-next-line max-len
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
// eslint-disable-next-line max-len
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { OverflowNode } from '@lexical/overflow';
import { CodeNode, CodeHighlightNode } from '@lexical/code';

import { TRANSFORMERS } from '@lexical/markdown';

import Lock from '@igloo-ui/icons/dist/Lock';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { OnFocusPlugin } from './plugins/OnFocusPlugin';
import { DisablePlugin } from './plugins/DisablePlugin';
import { MaxLengthPlugin } from './plugins/MaxLengthPlugin';
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin';
import LinkPlugin from './plugins/LinkPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';

import EditorTheme from './themes/RichTextEditor.theme';

import './rich-text-editor.scss';

export interface MessageOptions {
  text?: string;
  tooltip?: string;
}

export interface Messages {
  bold?: MessageOptions;
  clear?: MessageOptions;
  italic?: MessageOptions;
  link?: MessageOptions;
  orderedList?: MessageOptions;
  strikethrough?: MessageOptions;
  underline?: MessageOptions;
  unorderedList?: MessageOptions;
  private?: MessageOptions;
  linkEditorEdit?: MessageOptions;
  linkEditorRemove?: MessageOptions;
  linkEditorCancel?: MessageOptions;
  linkEditorSave?: MessageOptions;
}

export interface RichTextEditorProps
  extends Omit<React.ComponentProps<'div'>, 'onChange' | 'onFocus' | 'onBlur'> {
  /** Whether or not the editor should be focused on load */
  autoFocus?: boolean;
  /** Add a class name to the rich text editor */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Whether or not the rich text editor is disabled */
  disabled?: boolean;
  /** Whether or not the right text editor has an error */
  error?: boolean;
  /** The initial editor state, which will preload the editor with content */
  initialState?: string;
  /** Whether or not the text can be cleared */
  isClearable?: boolean;
  /** Whether or not the rich text editor should have a private look */
  isPrivate?: boolean;
  /** The maximum amount or characters allowed
   * (Automatically adds a character limit indicator) */
  maxLength?: number;
  /** Messages for the buttons */
  messages?: Messages;
  /** The event that is called when the editor loses focus */
  onBlur?: (editor?: LexicalEditor) => void;
  /** The event that is called when the editor text changes */
  onChange?: (editorState: string) => void;
  /** The event that's called when the editor gains focus */
  onFocus?: (editor?: LexicalEditor) => void;
  /** The placeholder text to display int he editor */
  placeholder?: string;
  /** Usually the save button for the editor */
  primaryBtn?: React.ReactElement;
  /** Wether or not the editor should display the toolbar */
  showToolbar?: boolean;
  /** Wether or not the editor should display
   * the toolbar when editor is focused */
  showToolbarOnFocus?: boolean;
}

const RichTextEditor: React.FunctionComponent<RichTextEditorProps> = ({
  autoFocus = false,
  className,
  dataTest,
  disabled,
  error,
  initialState,
  isClearable = true,
  isPrivate,
  maxLength,
  messages = {
    bold: { tooltip: 'Bold' },
    clear: { text: 'Clear', tooltip: 'Clear all text' },
    italic: { tooltip: 'Italic' },
    link: { tooltip: 'Link' },
    orderedList: { tooltip: 'Ordered List' },
    strikethrough: { tooltip: 'Strikethrough' },
    underline: { tooltip: 'Underline' },
    unorderedList: { tooltip: 'Unordered List' },
    private: { text: 'Visible to you only' },
    linkEditorEdit: { tooltip: 'Edit link' },
    linkEditorCancel: { tooltip: 'Cancel' },
    linkEditorRemove: { tooltip: 'Remove link' },
    linkEditorSave: { tooltip: 'Save' },
  },
  onBlur,
  onChange,
  onFocus,
  placeholder,
  primaryBtn,
  showToolbar = true,
  showToolbarOnFocus = false,
}: RichTextEditorProps) => {
  const [hasFocus, setHasFocus] = React.useState(autoFocus);

  const [floatingAnchorElem, setFloatingAnchorElem] =
    React.useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement): void => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  function Placeholder(): JSX.Element {
    return (
      <div className="ids-rich-text-editor__placeholder">{placeholder}</div>
    );
  }

  const editorConfig: InitialConfigType = {
    namespace: 'ids-rich-text-editor',
    theme: EditorTheme,
    editorState: initialState,
    editable: !disabled,
    // Handling of errors during update
    onError(error) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      ListNode,
      ListItemNode,
      AutoLinkNode,
      LinkNode,
      HeadingNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      OverflowNode,
    ],
  };

  const classes = cx('ids-rich-text-editor', className, {
    'ids-rich-text-editor--error': error,
    'ids-rich-text-editor--private': isPrivate,
    'ids-rich-text-editor--focus': hasFocus,
    'ids-rich-text-editor--disabled': disabled,
  });

  const handleOnChange = (editorState: EditorState): void => {
    onChange?.(JSON.stringify(editorState));
  };

  const handleOnFocus = (editor: LexicalEditor): void => {
    setHasFocus(true);
    onFocus?.(editor);
  };

  const handleOnBlur = (editor: LexicalEditor): void => {
    setHasFocus(false);
    onBlur?.(editor);
  };

  const showFooter = !!maxLength || isPrivate || !!primaryBtn;

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={classes} data-test={dataTest}>
        {showToolbar && (
          <ToolbarPlugin
            disabled={disabled}
            isClearable={isClearable}
            messages={messages}
            showOnFocus={showToolbarOnFocus}
          />
        )}
        <div className="ids-rich-text-editor__inner">
          <RichTextPlugin
            contentEditable={
              <div className="ids-rich-text-editor__scroller">
                <div className="ids-rich-text-editor__editor" ref={onRef}>
                  <ContentEditable className="ids-rich-text-editor__input" />
                </div>
              </div>
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {autoFocus && <AutoFocusPlugin />}
          <DisablePlugin disabled={disabled} />
          <OnChangePlugin onChange={handleOnChange} ignoreSelectionChange />
          <OnFocusPlugin onFocus={handleOnFocus} onBlur={handleOnBlur} />
          <ListPlugin />
          <LinkPlugin />
          {floatingAnchorElem && (
            <FloatingLinkEditorPlugin
              anchorElem={floatingAnchorElem}
              messages={messages}
            />
          )}
          {isClearable && <ClearEditorPlugin />}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          <CodeHighlightPlugin />
        </div>
        {showFooter && (
          <div className="ids-rich-text-editor__footer">
            {isPrivate && (
              <span className="ids-rich-text-editor__private">
                <Lock
                  size="small"
                  className="ids-rich-text-editor__private-icon"
                />
                {messages.private?.text}
              </span>
            )}
            {maxLength && (
              <>
                <CharacterLimitPlugin charset="UTF-8" maxLength={maxLength} />
                <MaxLengthPlugin maxLength={maxLength} />
              </>
            )}
            {primaryBtn &&
              React.cloneElement(primaryBtn, {
                className: cx(
                  'ids-rich-text-editor__primary-btn',
                  primaryBtn.props?.className
                ),
              })}
          </div>
        )}
      </div>
    </LexicalComposer>
  );
};

export default RichTextEditor;
