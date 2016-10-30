import React from 'react';
import Header from '../../components/Header';
import './App.scss';

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default App;
