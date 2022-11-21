import React from 'react';
import isChromatic from 'chromatic/isChromatic';

const ChromaticWrapper = ({ children }) => {
  return isChromatic() ? (
    <div style={{ width: '100%', height: '100vh', boxSizing: 'border-box' }}>
      {children}
    </div>
  ) : (
    children
  );
};

export default ChromaticWrapper;
