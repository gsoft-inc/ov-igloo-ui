import * as React from 'react';

const UseCombinedRefs = (
  ...refs: React.Ref<HTMLElement | undefined>[]
): React.MutableRefObject<HTMLElement | undefined> => {
  const targetRef = React.useRef<HTMLElement>();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === 'function' && targetRef.current) {
        ref(targetRef.current);
      } else {
        /* eslint-disable no-param-reassign,@typescript-eslint/ban-ts-comment */
        // @ts-ignore
        ref.current = targetRef.current;
        /* eslint-enable */
      }
    });
  }, [refs]);

  return targetRef;
};

export default UseCombinedRefs;
