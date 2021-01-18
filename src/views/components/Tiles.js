import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import * as screenActions from '../actions/screen';

import Player from './Player';

const TileContent = ({ content, id }) => (
  content.map((contentItem) => (
    <div
      key={`${id}-${content}`}
      className={`tile__content ${contentItem}`}
    />
  )));

const Tiles = ({ tiles, frame }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      store.dispatch(screenActions.nextFrame());
    }, 300);

    return () => clearInterval(interval);
  });

  return (
    <div className="tiles__container">
      {tiles.map(({ base, id, content }) => (
        <div
          key={id}
          className={`tile ${base}`}
        >
          <TileContent content={content} id={id} />
        </div>
      ))}
      <Player frame={frame} />
    </div>
  );
};

const mapToProps = (state) => ({
  tiles: state.screen.tiles,
  frame: state.screen.frame,
});

export default connect(mapToProps)(Tiles);
