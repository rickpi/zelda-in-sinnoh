import React from 'react';
import MainCharacter from '../../../../character/main-character';
// import Crehelf from '../../../../character/npc/crehelf';

const TileContent = ({ content }) => {
  let keyIndex = 0;

  return (
    content.map((item) => {
      keyIndex += 1;
      switch (item) {
        case 'main-character':
          return <MainCharacter key={`content-${keyIndex}`} />;
        // case 'npc-crehelf':
        //   return <Crehelf key={`content-${keyIndex}`} />;
        default:
          return <div className={`tile__content ${item}`} key={`content-${keyIndex}`} />;
      }
    })
  );
};

export default TileContent;
