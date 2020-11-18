import React from 'react';

const Tileset = ({ tileset }) => (
  <div className={`tileset tileset--${tileset}`} />
);

const Line = ({ line }) => (
  <div className="tilesets__row">
    {line.map((tileset) => <Tileset tileset={tileset} />)}
  </div>
);

const Tilesets = ({ matrix }) => (
  <div className="tilesets__container">
    {matrix.map((line) => <Line line={line} />)}
  </div>
);

export default Tilesets;
