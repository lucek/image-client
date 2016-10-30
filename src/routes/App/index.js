import React from 'react';
import Header from '../../components/Header';
import './App.scss';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header tags={this.props.tags} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default App;
