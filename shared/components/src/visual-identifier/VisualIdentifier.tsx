import * as React from 'react';

import './visualIdentifier.scss';

export const VisualIdentifier: React.FunctionComponent = ({ children }) => {
  return <div className="visual-identifier">{children}</div>;
};
