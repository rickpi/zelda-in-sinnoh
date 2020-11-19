import React from 'react';
import MainCharacter from '../../../character/main-character';

const Tile = ({ content }) => (
  <div className="tile tile--level-1">
    {content.map((item) => {
      if (item.indexOf('character') !== -1) {
        return <MainCharacter />;
      }
      return <div className={`tile__content ${item}`} />;
    })}
  </div>
);

const TilesetLine = ({ tileset }) => (
  <div className="tileset__row">
    {tileset.map((tile) => <Tile content={tile.content} />)}
  </div>
);

const Tileset = ({ matrix }) => (
  <div className="tileset__container">
    {matrix.map((tileset) => <TilesetLine tileset={tileset} />)}
  </div>
);

export default Tileset;
