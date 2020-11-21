import React from 'react';
import { connect } from 'react-redux';

import '../../../../assets/css/npc/crehelf.css';

import store from '../../../../store';
import NPCTalkingBox from '../npc-talking-box';
import * as actions from './actions';
import * as talkingActions from '../npc-talking-box/actions';
import * as tilesActions from '../../../game/board/tiles/actions';

class Crehelf extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.startDiscussion = this.startDiscussion.bind(this);
    this.handleNextSentence = this.handleNextSentence.bind(this);
    this.handleNextWord = this.handleNextWord.bind(this);
    this.startCinematic = this.startCinematic.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => store.dispatch(actions.nextFrameNPC()), 150);
    document.addEventListener('keydown', this.handleKeyDown);
    this.startDiscussion(1000);
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
      discussion,
      sentences,
    } = this.props;

    if (!isTalking && discussion) {
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
    store.dispatch(talkingActions.endDiscussion());
    store.dispatch(talkingActions.endReloading());
    store.dispatch(actions.nextWord());
    setTimeout(() => this.startCinematic(), 200);
  }

  startDiscussion(delay = 0) {
    const { discussion, sentences, currentSentence } = this.props;

    if (!discussion) {
      store.dispatch(talkingActions.updateSentence(sentences[currentSentence]));
      setTimeout(() => {
        store.dispatch(talkingActions.startDiscussion());
        store.dispatch(talkingActions.startTalking());
      }, delay);
      setTimeout(() => store.dispatch(talkingActions.endTalking()), delay + 2200);
    }
  }

  startCinematic() {
    const {
      name,
      currentCinematic,
    } = this.props;

    store.dispatch(actions.changeOrientation(currentCinematic.orientation));
    store.dispatch(actions.startCinematic());
    setTimeout(() => {
      store.dispatch(actions.endCinematic());
      store.dispatch(tilesActions.removeNPC(name));
    }, currentCinematic.duration);
  }

  render() {
    const {
      name,
      orientation,
      frame,
      cinematic,
      currentCinematicIndex,
    } = this.props;
    const classNames = [
      'tile__content',
      `${name}-${orientation}-${frame}`,
    ];

    if (cinematic) classNames.push(`${name}-cinematic-${currentCinematicIndex}`);

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
  discussion: state.NPCTalkingBox.discussion,
  cinematic: state.crehelf.cinematic,
  currentCinematic: state.crehelf
    .cinematics[state.crehelf.currentCinematic],
  currentCinematicIndex: state.crehelf.currentCinematic,
});

export default connect(mapToProps)(Crehelf);
