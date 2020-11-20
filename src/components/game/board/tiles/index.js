import React from 'react';

import Tile from './tile';

const Tiles = ({ tiles }) => {
  const rows = [];
  let tmpRow = [];

  tiles.forEach((tile) => {
    tmpRow.push(tile);
    if (tile.posX === 14) {
      rows.push(tmpRow);
      tmpRow = [];
    }
  });
  return (
    <div className="tileset__container">
      {rows.map((row) => (
        <div className="tileset__row" key={row[0].posY}>
          {row.map((tile) => (
            <Tile
              index={tile.posY * 15 + tile.posX}
              key={`${tile.posX}-${tile.posY}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tiles;
