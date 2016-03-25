import React from 'react';

import '../../scss/Home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      demoState: 'React!!!',
    };
  }

  render() {
    return (
      <div>
        <p>React Popver coming soon.</p>
      </div>
    );
  }
}

export default Home;
