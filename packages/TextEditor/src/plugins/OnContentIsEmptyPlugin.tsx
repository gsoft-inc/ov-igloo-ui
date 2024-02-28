import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalIsTextContentEmpty } from "@lexical/react/useLexicalIsTextContentEmpty";

type OnContentIsEmpty = (empty: boolean) => void;

export function OnContentIsEmptyPlugin({
    onContentIsEmpty
}: {
    onContentIsEmpty?: OnContentIsEmpty;
}) {
    const [editor] = useLexicalComposerContext();
    const contentIsEmpty = useLexicalIsTextContentEmpty(editor);

    if (onContentIsEmpty) {
        onContentIsEmpty(contentIsEmpty);
    }

    return null;
}
