import React from 'react';

const TileContent = ({ content }) => {
  let keyIndex = 0;

  return (
    content.map((item) => {
      keyIndex += 1;
      switch (item) {
        // case 'main-character':
        //   return <MainCharacter key={`content-${keyIndex}`} />;
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
          {row.map((tile) => {
            const index = tile.posY * 15 + tile.posX;
            return (
              <Tile
                index={index}
                base={tile.base}
                content={tile.content}
                key={`${tile.posX}-${tile.posY}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Tiles;
