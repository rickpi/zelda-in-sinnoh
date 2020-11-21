import React from 'react';
import { connect } from 'react-redux';

const NPCTalkingBox = ({
  cinematic,
  sentence,
  isReloading,
}) => {
  if (isReloading || !cinematic) return <div />;

  return (
    <div className="npc-talking">
      <div className="npc-talking__wrap">
        <p className="npc-talking__text">{sentence}</p>
        <div className="npc-talking__arrow" />
      </div>
    </div>
  );
};

const mapToProps = (state) => ({
  cinematic: state.NPCTalkingBox.cinematic,
  isReloading: state.NPCTalkingBox.isReloading,
  sentence: state.NPCTalkingBox.sentence,
});

export default connect(mapToProps)(NPCTalkingBox);
