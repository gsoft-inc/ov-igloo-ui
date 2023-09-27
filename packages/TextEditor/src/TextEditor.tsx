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

import { ToolbarPlugin } from './plugins/ToolbarPlugin';
import { OnFocusPlugin } from './plugins/OnFocusPlugin';
import { DisablePlugin } from './plugins/DisablePlugin';
import { MaxLengthPlugin } from './plugins/MaxLengthPlugin';
import { OnContentIsEmptyPlugin } from './plugins/OnContentIsEmptyPlugin';
import { FloatingLinkEditorPlugin } from './plugins/FloatingLinkEditorPlugin';
import { LinkPlugin } from './plugins/LinkPlugin';
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';

import EditorTheme from './themes/TextEditor.theme';

import './text-editor.scss';

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
    linkEditorTargetBlank?: MessageOptions;
    linkEditorCancel?: MessageOptions;
    linkEditorSave?: MessageOptions;
}

export interface TextEditorProps
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
    /** Messages for buttons, tooltips and text to localize the text editor */
    messages?: Messages;
    /** The event that is called when the editor loses focus */
    onBlur?: (editor?: LexicalEditor) => void;
    /** The event that is called when the editor text changes */
    onChange?: (editorState: string) => void;
    /** The event that's called when the editor gains focus */
    onFocus?: (editor?: LexicalEditor) => void;
    /** The event that's called for validate if the editor is empty */
    onContentIsEmpty?: (empty: boolean) => void;
    /** The placeholder text to display in the editor */
    placeholder?: string;
    /** Usually the save button for the editor */
    primaryBtn?: React.ReactElement;
    /** Whether or not the editor is read only */
    readOnly?: boolean;
    /** Whether or not the editor should display the toolbar */
    showToolbar?: boolean;
    /** Whether or not the editor should display
     * the toolbar when editor is focused */
    showToolbarOnFocus?: boolean;
    /** Wether the user can choose the opening mode of a link */
    canSelectLinkOpeningMode?: boolean;
}

const TextEditor: React.FunctionComponent<TextEditorProps> = ({
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
        linkEditorTargetBlank: { tooltip: 'Open in a new tab' },
        linkEditorRemove: { tooltip: 'Remove link' },
        linkEditorSave: { tooltip: 'Save' },
    },
    onBlur,
    onChange,
    onFocus,
    onContentIsEmpty,
    placeholder,
    primaryBtn,
    readOnly = false,
    showToolbar = true,
    showToolbarOnFocus = false,
    canSelectLinkOpeningMode = false,
    }: TextEditorProps) =>
{
    const [hasFocus, setHasFocus] = React.useState(autoFocus);

    const [floatingAnchorElem, setFloatingAnchorElem] =
        React.useState<HTMLDivElement | null>(null);

    const onRef = (_floatingAnchorElem: HTMLDivElement): void => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    function Placeholder(): JSX.Element {
        return <div className="ids-text-editor__placeholder">{placeholder}</div>;
    }

    const editorConfig: InitialConfigType = {
        namespace: 'ids-text-editor',
        theme: EditorTheme,
        editorState: initialState,
        editable: !disabled && !readOnly,
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

    const classes = cx('ids-text-editor', className, {
        'ids-text-editor--error': error,
        'ids-text-editor--private': isPrivate && !readOnly,
        'ids-text-editor--focus': hasFocus,
        'ids-text-editor--disabled': disabled,
        'ids-text-editor--read-only': readOnly,
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

    const showFooter = (!!maxLength || isPrivate || !!primaryBtn) && !readOnly;
    const hideToolbar = !showToolbar || readOnly;

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className={classes} data-test={dataTest}>
                {!hideToolbar && (
                    <ToolbarPlugin
                        disabled={disabled}
                        isClearable={isClearable}
                        messages={messages}
                        showOnFocus={showToolbarOnFocus}
                    />
                )}
                <div className="ids-text-editor__inner">
                    <RichTextPlugin
                        contentEditable={
                            <div className="ids-text-editor__scroller">
                                <div className="ids-text-editor__editor" ref={onRef}>
                                    <ContentEditable className="ids-text-editor__input" />
                                </div>
                            </div>
                        }
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <DisablePlugin disabled={disabled || readOnly} />
                    <ListPlugin />
                    <LinkPlugin />
                    <CodeHighlightPlugin />
                    {!readOnly && (
                        <>
                            <OnChangePlugin onChange={handleOnChange} ignoreSelectionChange />
                            <OnFocusPlugin onFocus={handleOnFocus} onBlur={handleOnBlur} />
                            {autoFocus && <AutoFocusPlugin />}
                            {floatingAnchorElem && (
                                <FloatingLinkEditorPlugin
                                    anchorElem={floatingAnchorElem}
                                    messages={messages}
                                    canSelectLinkOpeningMode={canSelectLinkOpeningMode}
                                />
                            )}
                            {isClearable && <ClearEditorPlugin />}
                            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                        </>
                    )}
                </div>
                {showFooter && (
                    <div className="ids-text-editor__footer">
                        {isPrivate && (
                            <span className="ids-text-editor__private">
                                <Lock size="small" className="ids-text-editor__private-icon" />
                                {messages.private?.text}
                            </span>
                        )}
                        {maxLength && (
                            <>
                                <CharacterLimitPlugin charset="UTF-16" maxLength={maxLength} />
                                <MaxLengthPlugin maxLength={maxLength} />
                            </>
                        )}
                        {primaryBtn &&
                            React.cloneElement(primaryBtn, {
                                className: cx(
                                    'ids-text-editor__primary-btn',
                                    primaryBtn.props?.className,
                                ),
                            })
                        }
                    </div>
                )}
            </div>
            <OnContentIsEmptyPlugin onContentIsEmpty={onContentIsEmpty} />
        </LexicalComposer>
    );
};

export default TextEditor;
