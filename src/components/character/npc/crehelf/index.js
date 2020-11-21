import React from 'react';
import { connect } from 'react-redux';

import '../../../../assets/css/npc/crehelf.css';

import store from '../../../../store';
import NPCTalkingBox from '../npc-talking-box';
import * as actions from './actions';
import * as talkingActions from '../npc-talking-box/actions';

class Crehelf extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.startCinematic = this.startCinematic.bind(this);
    this.handleNextSentence = this.handleNextSentence.bind(this);
    this.handleNextWord = this.handleNextWord.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => store.dispatch(actions.nextFrameNPC()), 150);
    document.addEventListener('keydown', this.handleKeyDown);
    this.startCinematic(1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleKeyDown(event) {
    const { key } = event;

    switch (key) {
      case 'Enter':
        this.handleNextSentence();
        break;
      default:
        break;
    }
  }

  handleNextSentence() {
    const {
      isTalking,
      cinematic,
      sentences,
    } = this.props;

    if (!isTalking && cinematic) {
      store.dispatch(talkingActions.startReloading());
      store.dispatch(talkingActions.startTalking());
      store.dispatch(actions.nextSentence());

      const { currentSentence } = this.props;

      if (currentSentence === sentences.length) {
        this.handleNextWord();
      } else {
        store.dispatch(talkingActions.updateSentence(sentences[currentSentence]));
        store.dispatch(talkingActions.endReloading());
        setTimeout(() => store.dispatch(talkingActions.endTalking()), 3000);
      }
    }
  }

  handleNextWord() {
    store.dispatch(talkingActions.endCinematic());
    store.dispatch(talkingActions.endReloading());
    store.dispatch(actions.nextWord());
  }

  startCinematic(delay = 0) {
    const { cinematic, sentences, currentSentence } = this.props;

    if (!cinematic) {
      store.dispatch(talkingActions.updateSentence(sentences[currentSentence]));
      setTimeout(() => {
        store.dispatch(talkingActions.startCinematic());
        store.dispatch(talkingActions.startTalking());
      }, delay);
      setTimeout(() => store.dispatch(talkingActions.endTalking()), delay + 2200);
    }
  }

  render() {
    const { name, orientation, frame } = this.props;
    const classNames = [
      'tile__content',
      `${name}-${orientation}-${frame}`,
    ];

    return (
      <div className={classNames.join(' ')}>
        <NPCTalkingBox />
      </div>
    );
  }
}

const mapToProps = (state) => ({
  name: state.crehelf.name,
  orientation: state.crehelf.orientation,
  frame: state.crehelf.frame,
  sentences: state.crehelf
    .words[state.crehelf.currentWord]
    .sentences,
  currentSentence: state.crehelf.currentSentence,
  isTalking: state.NPCTalkingBox.isTalking,
  cinematic: state.NPCTalkingBox.cinematic,
});

export default connect(mapToProps)(Crehelf);
