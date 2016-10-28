import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>image client home</h1>
        <ul>
          <li>
            <Link to="/photo">
              Single photo
            </Link>
          </li>
        </ul>
      </div>
    );
  },
});
