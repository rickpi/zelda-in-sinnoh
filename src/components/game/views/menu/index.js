import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as gameActions from '../../actions';
import * as playerActions from '../../controllers/player-controller/actions';
import * as boardActions from '../board/actions';

const startingCharacters = [
  'tortipouss',
  'ousticram',
  'tiplouf',
];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }

  handleChangeInput(event) {
    store.dispatch(playerActions.setPlayerName(event.target.value));
  }

  handleChangeRadio(event) {
    store.dispatch(playerActions.setPlayerCharacter(parseInt(event.target.value, 10)));
  }

  render() {
    const { playerName, character, boards } = this.props;

    return (
      <div className="board">
        <input value={playerName} onChange={this.handleChangeInput} />
        <br />
        {startingCharacters.map((name, index) => {
          const checked = index === character;
          return (
            <div key={name}>
              <input
                type="radio"
                id={name}
                name="startingCharacter"
                value={index}
                checked={checked}
                onChange={this.handleChangeRadio}
              />
              <label htmlFor={name}>{name}</label>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            store.dispatch(gameActions.startLoading());
            store.dispatch(boardActions.loadBoard(boards));
            store.dispatch(gameActions.init());
          }}
        >
          {'Commencer l\'aventure'}
        </button>
      </div>
    );
  }
}

const mapToProps = (state) => ({
  playerName: state.player.playerName,
  character: state.player.character,
  boards: state.game.levels[state.game.level],
});

export default connect(mapToProps)(Menu);
