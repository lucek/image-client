import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>image client single photo</h1>
        <ul>
          <li>
            <Link to="/">
              Photos
            </Link>
          </li>
        </ul>
      </div>
    );
  },
});
