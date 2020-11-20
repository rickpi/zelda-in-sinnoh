import React from 'react';
import MainCharacter from '../../../../character/main-character';

const TileContent = ({ content }) => (
  content.map((item) => {
    switch (item) {
      case 'main-character':
        return <MainCharacter />;
      default:
        return <div className={`tile__content ${content}`} />;
    }
  })
);

export default TileContent;
