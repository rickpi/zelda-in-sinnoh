import React from 'react';
import { connect } from 'react-redux';

import Player from '../../player';

const TileContent = ({ content }) => {
  let keyIndex = 0;
  // console.log(content, content.length);
  return (
    content.map((item) => {
      keyIndex += 1;
      // console.log(item);
      switch (item) {
        case 'player':
          return <Player key={`content-${keyIndex}`} />;
        // case 'npc-crehelf':
        //   return <Crehelf key={`content-${keyIndex}`} />;
        default:
          return <div className={`tile__content ${item}`} key={`content-${keyIndex}`} />;
      }
    })
  );
};

const Tile = ({ base, content }) => (
  <div className={`tile ${base}`}>
    <TileContent content={content} />
  </div>
);

const Tiles = ({ board }) => {
  const { tiles } = board;
  const rows = [];
  let tmpRow = [];

  tiles.forEach((tile) => {
    tmpRow.push(tile);
    if (tile.x === 14) {
      rows.push(tmpRow);
      tmpRow = [];
    }
  });
  return (
    <div className="tileset__container">
      {rows.map((row) => (
        <div className="tileset__row" key={row[0].y}>
          {row.map((tile) => {
            const index = tile.y * 15 + tile.x;
            return (
              <Tile
                index={index}
                base={tile.base}
                content={tile.content}
                key={`${tile.x}-${tile.y}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

const mapToProps = (state) => ({
  board: state.tiles,
});

export default connect(mapToProps)(Tiles);
