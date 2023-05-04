// eslint-disable-next-line max-len
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

type Props = {
  disabled?: boolean;
};

export function DisablePlugin({ disabled }: Props): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.setEditable(!disabled);
  }, [disabled, editor]);

  return null;
}
