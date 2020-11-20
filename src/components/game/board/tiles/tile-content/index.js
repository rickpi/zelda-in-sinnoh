import React from 'react';
import MainCharacter from '../../../../character/main-character';

const TileContent = ({ content }) => {
  let keyIndex = 0;

  return (
    content.map((item) => {
      keyIndex += 1;
      switch (item) {
        case 'main-character':
          return <MainCharacter key={`content-${keyIndex}`} />;
        default:
          return <div className={`tile__content ${content}`} key={`content-${keyIndex}`} />;
      }
    })
  );
};

export default TileContent;
