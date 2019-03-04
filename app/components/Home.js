import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    return (
      <>
      <div className="home-container">
        <h1>Github Battle</h1>
      </div>

      <Link className="button" to="/battle">
        Battle
      </Link>
      </>
    )
  }

}

export default Home;