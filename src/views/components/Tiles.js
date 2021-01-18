import React from 'react';

const TileContent = ({ content, id }) => (
  content.map((contentItem) => (
    <div
      key={`${id}-${content}`}
      className={`tile__content ${contentItem}`}
    />
  )));

const Tiles = ({ tiles }) => (
  <div className="tiles__container">
    {tiles.map(({ base, id, content }) => (
      <div
        key={id}
        className={`tile ${base}`}
      >
        <TileContent content={content} id={id} />
      </div>
    ))}
  </div>
);

export default Tiles;
