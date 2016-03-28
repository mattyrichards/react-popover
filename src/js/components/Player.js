import React from 'react';
import Popover from './Popover';

import '../../scss/Player.scss';

class Player extends React.Component {

  constructor() {
    super();
    this._hover = this._hover.bind(this);
    this.state = {
      hovered: false,
    };
  }

  _hover() {
    this.setState({
      hovered: !this.state.hovered,
    });
  }

  render() {
    const popoverContent = (
      <div className="c-player-popover">
        <div className="l-popover-row">
          <p className="c-player-popover__attribute">Name:</p>
          <p className="c-player-popover__value">{this.props.name}</p>
        </div>
        <div className="l-popover-row">
          <p className="c-player-popover__attribute">Nation:</p>
          <p className="c-player-popover__value">{this.props.country}</p>
        </div>
        <div className="l-popover-row">
          <p className="c-player-popover__attribute">Career:</p>
          <p className="c-player-popover__value">{this.props.era}</p>
        </div>
        <div className="l-popover-row">
          <p className="c-player-popover__attribute">Appearances:</p>
          <p className="c-player-popover__value">{this.props.appearances}</p>
        </div>
        <div className="l-popover-row l-popover-row--no-border">
          <p className="c-player-popover__attribute">Goals:</p>
          <p className="c-player-popover__value">{this.props.goals}</p>
        </div>
      </div>
    );
    const imageUrl = `/images/${this.props.filename}`;
    return (
      <div className="c-player" onMouseOver={this._hover} onMouseOut={this._hover}>
        <img src={imageUrl} alt={this.props.name} className="c-player__image" />
        <Popover
          content={popoverContent}
          alignment={this.props.alignment}
          activate={this.state.hovered}
        />
      </div>
    );
  }
}

Player.propTypes = {
  name: React.PropTypes.string,
  country: React.PropTypes.string,
  era: React.PropTypes.string,
  appearances: React.PropTypes.string,
  goals: React.PropTypes.string,
  filename: React.PropTypes.string,
  alignment: React.PropTypes.string,
};

export default Player;
