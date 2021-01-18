import React from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import * as settingsActions from '../actions/settings';

const startingCharacters = [
  'tortipouss',
  'ousticram',
  'tiplouf',
];

const Settings = ({ playerName, character }) => {
  const handleChangeInput = (event) => {
    store.dispatch(settingsActions.setPlayerName(event.target.value));
  };

  const handleChangeRadio = (event) => {
    store.dispatch(settingsActions.setPlayerCharacter(parseInt(event.target.value, 10)));
  };

  return (
    <div className="board">
      <input value={playerName} onChange={handleChangeInput} />
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
              onChange={handleChangeRadio}
            />
            <label htmlFor={name}>{name}</label>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          store.dispatch(settingsActions.setUpDone());
        }}
      >
        {'Commencer l\'aventure'}
      </button>
    </div>
  );
};

const mapToProps = (state) => ({
  playerName: state.settings.playerName,
  character: state.settings.character,
});

export default connect(mapToProps)(Settings);
