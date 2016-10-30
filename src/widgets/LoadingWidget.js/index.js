import React from 'react';
import './LoadingWidget.scss';

const LoadingWidget = () => {
  return (
    <div className="uil-rolling-css" style={{ transform: 'scale(0.4)' }}>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingWidget;
