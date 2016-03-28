import React from 'react';
import Player from './Player';

import '../../scss/Home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: {
        name: 'Michael Laudrup',
        country: 'Denmark',
        era: '1982 – 1998',
        appearances: '104',
        goals: '37',
        filename: 'laudrup.png',
        alignment: 'right',
        description: 'This is a right aligned Popover',
      },
      player2: {
        name: 'Lothar Matthaus',
        country: 'Germany',
        era: '1980 – 2000',
        appearances: '150',
        goals: '23',
        filename: 'matthaus.png',
        alignment: 'bottom',
        description: 'This is a bottom aligned Popover',
      },
      player3: {
        name: 'Romario',
        country: 'Brazil',
        era: '1987- 2005',
        appearances: '70',
        goals: '55',
        filename: 'romario.png',
        alignment: 'top',
        description: 'This is a top aligned Popover',
      },
    };
  }

  render() {
    const githubUrl = 'https://github.com/mattyrichards/react-popover';
    return (
      <div className="l-page-container">
        <div className="l-intro">
          <h1>Simple React Popover example</h1>
          <p>Hover over the football stickers to see the Popover in action.</p>
          <p>Source code can be found on <a className="l-link" href={githubUrl}>
            <i className="l-link__icon fa fa-github"></i>Github</a>
          </p>
        </div>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-sm-1-3">
            <div className="l-grid-item">
              <Player
                name={this.state.player1.name} country={this.state.player1.country}
                era={this.state.player1.era} appearances={this.state.player1.appearances}
                goals={this.state.player1.goals} filename={this.state.player1.filename}
                alignment={this.state.player1.alignment}
              />
              <p className="l-grid-item__caption">{this.state.player1.description}</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-sm-1-3">
            <div className="l-grid-item">
              <Player
                name={this.state.player2.name} country={this.state.player2.country}
                era={this.state.player2.era} appearances={this.state.player2.appearances}
                goals={this.state.player2.goals} filename={this.state.player2.filename}
                alignment={this.state.player2.alignment}
              />
              <p className="l-grid-item__caption">{this.state.player2.description}</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-sm-1-3">
            <div className="l-grid-item">
              <Player
                name={this.state.player3.name} country={this.state.player3.country}
                era={this.state.player3.era} appearances={this.state.player3.appearances}
                goals={this.state.player3.goals} filename={this.state.player3.filename}
                alignment={this.state.player3.alignment}
              />
              <p className="l-grid-item__caption">{this.state.player3.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
