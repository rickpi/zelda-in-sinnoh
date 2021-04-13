import React from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import * as settingsActions from '../actions/settings';

const startingCharacters = [
  'tortipouss',
  'ouisticram',
  'tiplouf',
];

const Settings = ({ playerName, character }) => {
  const handleChangeInput = (event) => {
    store.dispatch(settingsActions.setPlayerName(event.target.value));
  };

  const handleClickOnHero = (chosenCharacter) => {
    store.dispatch(settingsActions.setPlayerCharacter(chosenCharacter));
  };

  return (
    <div className="settings">
      <div className="settings__body">
        <h1 className="settings__head">Zelda in Sinnoh</h1>
        <h3 className="settings__title">Entrez votre nom</h3>
        <div className="settings__name-block">
          <input
            value={playerName}
            onChange={handleChangeInput}
            className="settings__name-block__input"
          />
        </div>
        <h3 className="settings__title">Choisissez votre héros</h3>
        <div className="settings__hero-block">
          {startingCharacters.map((name, index) => {
            const checked = index === character;
            const classNameChecked = checked
              ? 'settings__hero-block__img--checked'
              : '';
            return (
              <div
                key={name}
                className={`settings__hero-block__img ${classNameChecked}`}
                onClick={() => handleClickOnHero(index)}
              >
                <img
                  src={`../../assets/img/settings-${name}.png`}
                  alt={name}
                />
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            store.dispatch(settingsActions.setUpDone());
          }}
          className="settings__start-button"
        >
          {'Commencer l\'aventure'}
        </button>
      </div>
    </div>
  );
};

const mapToProps = (state) => ({
  playerName: state.settings.playerName,
  character: state.settings.character,
});

export default connect(mapToProps)(Settings);
