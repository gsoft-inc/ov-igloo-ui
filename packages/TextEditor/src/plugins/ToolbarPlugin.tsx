/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';

import cx from 'classnames';

// eslint-disable-next-line max-len
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  CLEAR_EDITOR_COMMAND,
  $getSelection,
  $isRangeSelection,
  $getRoot,
  $isParagraphNode,
  COMMAND_PRIORITY_CRITICAL,
  LexicalEditor,
  $isRootOrShadowRoot,
} from 'lexical';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $findMatchingParent, $getNearestNodeOfType } from '@lexical/utils';

import Bold from '@igloo-ui/icons/dist/Bold';
import Italic from '@igloo-ui/icons/dist/Italic';
import Underline from '@igloo-ui/icons/dist/Underline';
import Strikethrough from '@igloo-ui/icons/dist/Strikethrough';
import LinkIcon from '@igloo-ui/icons/dist/Link';
import OrderedList from '@igloo-ui/icons/dist/OrderedList';
import UnorderedList from '@igloo-ui/icons/dist/UnorderedList';

import IconButton from '@igloo-ui/icon-button';
import Button from '@igloo-ui/button';

import type { Messages } from 'src/TextEditor';
import { sanitizeUrl } from '../utils/url';
import { getSelectedNode } from '../utils/getSelectedNode';

import './toolbar.scss';

export interface ToolbarProps extends React.ComponentProps<'div'> {
  /** Whether or not the editor toolbar is disabled */
  disabled?: boolean;
  /** Whether or not the text can be cleared */
  isClearable?: boolean;
  /** Messages for buttons, tooltips and text to localize the text editor */
  messages?: Messages;
  /** Whether or not the toolbar should show on focus and hide on blur */
  showOnFocus?: boolean;
}

function Divider(): JSX.Element {
  return <div className="ids-toolbar__divider" />;
}

export interface FloatingLinkEditorProps {
  editor: LexicalEditor;
}

const ToolbarPlugin: React.FunctionComponent<ToolbarProps> = ({
  disabled,
  isClearable,
  messages,
  showOnFocus,
}) => {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [blockType, setBlockType] = useState('');
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }
      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        }
      }

      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node?.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, updateToolbar]);

  useEffect(() => {
    return activeEditor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [updateToolbar, activeEditor]);

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        const root = $getRoot();
        const children = root.getChildren();

        if (children.length > 1) {
          setIsEditorEmpty(false);
        } else if ($isParagraphNode(children[0])) {
          const paragraphChildren = children[0].getChildren();
          setIsEditorEmpty(paragraphChildren.length === 0);
        } else {
          setIsEditorEmpty(false);
        }
      });
    });
  }, [editor]);

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  const formatBulletList = (): void => {
    if (blockType !== 'ul') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
      setBlockType('');
    }
  };

  const formatNumberedList = (): void => {
    if (blockType !== 'ol') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
      setBlockType('');
    }
  };

  const classes = cx('ids-toolbar', {
    'ids-toolbar--show-on-focus': showOnFocus,
  });

  return (
    <div className={classes}>
      <IconButton
        size="small"
        icon={<Bold size="medium" />}
        className="ids-toolbar__btn"
        active={isBold}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.bold?.tooltip}
      />

      <IconButton
        size="small"
        icon={<Italic size="medium" />}
        className="ids-toolbar__btn"
        active={isItalic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.italic?.tooltip}
      />

      <IconButton
        size="small"
        icon={<Underline size="medium" />}
        className="ids-toolbar__btn"
        active={isUnderline}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.underline?.tooltip}
      />

      <IconButton
        size="small"
        icon={<Strikethrough size="medium" />}
        className="ids-toolbar__btn"
        active={isStrikethrough}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.strikethrough?.tooltip}
      />

      <Divider />

      <IconButton
        size="small"
        icon={<LinkIcon size="medium" />}
        className="ids-toolbar__btn"
        active={isLink}
        onClick={insertLink}
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.link?.tooltip}
      />

      <Divider />

      <IconButton
        size="small"
        icon={<OrderedList size="medium" />}
        onClick={formatNumberedList}
        className="ids-toolbar__btn"
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.orderedList?.tooltip}
      />
      <IconButton
        size="small"
        icon={<UnorderedList size="medium" />}
        onClick={formatBulletList}
        className="ids-toolbar__btn"
        appearance={{ type: 'ghost', variant: 'secondary' }}
        disabled={disabled}
        // @ts-ignore
        title={messages?.unorderedList?.tooltip}
      />

      {isClearable && (
        <Button
          size="small"
          className="ids-toolbar__btn-clear"
          appearance={{ type: 'ghost', variant: 'secondary' }}
          disabled={isEditorEmpty || disabled}
          onClick={() => {
            editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
            editor.focus();
          }}
          title={messages?.clear?.tooltip}
        >
          {messages?.clear?.text}
        </Button>
      )}
    </div>
  );
};

export default ToolbarPlugin;
