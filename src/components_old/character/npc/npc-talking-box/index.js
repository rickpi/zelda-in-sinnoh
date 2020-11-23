import React from 'react';
import { connect } from 'react-redux';

const NPCTalkingBox = ({
  discussion,
  sentence,
  isReloading,
}) => {
  if (isReloading || !discussion) return <div />;

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
  discussion: state.NPCTalkingBox.discussion,
  isReloading: state.NPCTalkingBox.isReloading,
  sentence: state.NPCTalkingBox.sentence,
});

export default connect(mapToProps)(NPCTalkingBox);
