import * as React from 'react';
import { Dispatch, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND,
} from '@lexical/link';
// eslint-disable-next-line max-len
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  GridSelection,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeSelection,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';

import IconButton from '@igloo-ui/icon-button';
import Input from '@igloo-ui/input';
import Checkmark from '@igloo-ui/icons/dist/Checkmark';
import Tooltip from '@igloo-ui/tooltip';
import Delete from '@igloo-ui/icons/dist/Delete';
import Close from '@igloo-ui/icons/dist/Close';
import Edit from '@igloo-ui/icons/dist/Edit';

import type { Messages } from 'src/RichTextEditor';
import { getSelectedNode } from '../utils/getSelectedNode';
// eslint-disable-next-line max-len
import { setFloatingElemPositionForLinkEditor } from '../utils/setFloatingElemPositionForLinkEditor';
import { sanitizeUrl } from '../utils/url';

import './floating-link-editor.scss';

function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
  messages,
}: {
  editor: LexicalEditor;
  isLink: boolean;
  setIsLink: Dispatch<boolean>;
  anchorElem: HTMLElement;
  messages?: Messages;
}): JSX.Element | null {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [editedLinkUrl, setEditedLinkUrl] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState<
    RangeSelection | GridSelection | NodeSelection | null
  >(null);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const { activeElement } = document;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();

    if (
      selection !== null &&
      nativeSelection !== null &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode) &&
      editor.isEditable() &&
      isLink
    ) {
      const domRect: DOMRect | undefined =
        nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
      setLastSelection(selection);
    } else if (
      !activeElement ||
      activeElement.className !== 'ids-link-editor__input'
    ) {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }
  }, [anchorElem, editor, isLink]);

  useEffect(() => {
    const update = (): void => {
      editor.getEditorState().read((): void => {
        updateLinkEditor();
      });
    };

    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, [anchorElem.parentElement, editor, updateLinkEditor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, updateLinkEditor, setIsLink, isLink]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const handleLinkSubmission = (): void => {
    if (lastSelection !== null) {
      if (linkUrl !== '') {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
      }
      setEditMode(false);
    }
  };

  const monitorInputInteraction = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLinkSubmission();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setEditMode(false);
    }
  };

  const linkEditorHTML = isEditMode ? (
    <>
      <Input
        ref={inputRef}
        className="ids-link-editor__input"
        value={editedLinkUrl}
        onChange={(event) => {
          setEditedLinkUrl(event.target.value);
        }}
        onKeyDown={(event) => {
          monitorInputInteraction(event);
        }}
      />
      <Tooltip
        content={messages?.linkEditorCancel?.tooltip}
        appearance="light"
        disabled={!messages?.linkEditorCancel?.tooltip}
        className="ids-link-editor__button-tooltip"
      >
        <IconButton
          size="small"
          icon={<Close size="medium" />}
          className="ids-link-editor__cancel"
          appearance={{ type: 'ghost', variant: 'secondary' }}
          onClick={() => {
            setEditMode(false);
          }}
        />
      </Tooltip>
      <Tooltip
        content={messages?.linkEditorSave?.tooltip}
        appearance="light"
        disabled={!messages?.linkEditorSave?.tooltip}
        className="ids-link-editor__button-tooltip"
      >
        <IconButton
          size="small"
          icon={<Checkmark size="medium" />}
          className="ids-link-editor__confirm"
          appearance="ghost"
          onClick={handleLinkSubmission}
        />
      </Tooltip>
    </>
  ) : (
    <div className="ids-link-editor__view">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ids-link-editor__link"
      >
        {linkUrl}
      </a>

      <Tooltip
        content={messages?.linkEditorEdit?.tooltip}
        appearance="light"
        disabled={!messages?.linkEditorEdit?.tooltip}
        className="ids-link-editor__button-tooltip"
      >
        <IconButton
          size="small"
          icon={<Edit size="medium" />}
          className="ids-link-editor__edit"
          appearance={{ type: 'ghost', variant: 'secondary' }}
          onClick={() => {
            setEditedLinkUrl(linkUrl);
            setEditMode(true);
          }}
        />
      </Tooltip>

      <Tooltip
        content={messages?.linkEditorRemove?.tooltip}
        appearance="light"
        disabled={!messages?.linkEditorRemove?.tooltip}
        className="ids-link-editor__button-tooltip"
      >
        <IconButton
          size="small"
          icon={<Delete size="medium" />}
          className="ids-link-editor__trash"
          appearance={{ type: 'ghost', variant: 'secondary' }}
          onClick={() => {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
          }}
        />
      </Tooltip>
    </div>
  );

  return (
    <div ref={editorRef} className="ids-link-editor">
      {!isLink ? null : linkEditorHTML}
    </div>
  );
}

function useFloatingLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  messages?: Messages
): JSX.Element | null {
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLink, setIsLink] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const linkParent = $findMatchingParent(node, $isLinkNode);
      const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);

      // We don't want this menu to open for auto links.
      if (linkParent != null && autoLinkParent == null) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [editor, updateToolbar]);

  return createPortal(
    <FloatingLinkEditor
      editor={activeEditor}
      isLink={isLink}
      anchorElem={anchorElem}
      setIsLink={setIsLink}
      messages={messages}
    />,
    anchorElem
  );
}

export default function FloatingLinkEditorPlugin({
  anchorElem = document.body,
  messages,
}: {
  anchorElem?: HTMLElement;
  messages?: Messages;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  return useFloatingLinkEditorToolbar(editor, anchorElem, messages);
}
