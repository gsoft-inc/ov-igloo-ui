import React from 'react';

const Mockup = () => {
  return (
    <div className="gv-mockup">
      <div className="gv-mockup__visual"></div>
      <div className="gv-mockup__content">
        <div className="gv-mockup__formGroup">
          <span>Label:</span>
          <div className="gv-mockup__input" />
        </div>
        <div className="gv-mockup__formGroup">
          <span>Label:</span>
          <div className="gv-mockup__input" />
        </div>
        <div className="gv-mockup__formGroup gv-mockup__formGroup--column">
          <span>Label:</span>
          <div className="gv-mockup__textarea" />
        </div>
        <div className="gv-mockup__formGroup gv-mockup__formGroup--actions">
          <div className="gv-mockup__btn" />
          <div className="gv-mockup__btn" />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
