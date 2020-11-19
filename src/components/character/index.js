import React from 'react';

import '../../assets/css/tiplouf.css';
import '../../assets/css/prinplouf.css';
import '../../assets/css/pingoleon.css';
import '../../assets/css/ouisticram.css';
import '../../assets/css/chimpenfeu.css';
import '../../assets/css/simiabraz.css';
import '../../assets/css/tortipouss.css';
import '../../assets/css/boskara.css';
import '../../assets/css/torterra.css';

class Character extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      name,
      orientation: 'front',
      frame: 0,
      ready: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changeFrame = this.changeFrame.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { key } = event;
    const { orientation } = this.state;
    let newOrientation = orientation;

    switch (key) {
      case 'ArrowUp':
        newOrientation = 'back';
        break;
      case 'ArrowDown':
        newOrientation = 'front';
        break;
      case 'ArrowLeft':
        newOrientation = 'left';
        break;
      case 'ArrowRight':
        newOrientation = 'right';
        break;
      default:
        break;
    }
    this.setState({
      orientation: newOrientation,
    });
  }

  changeFrame() {
    const { frame } = this.state;
    const newFrame = frame >= 3 ? 0 : frame + 1;

    this.setState({
      frame: newFrame,
    });
  }

  animate() {
    setInterval(this.changeFrame, 250);
    this.setState({
      ready: true,
    });
  }

  render() {
    const {
      name,
      orientation,
      frame,
      ready,
    } = this.state;

    if (!ready) this.animate();

    return (
      <div className={`tile__content ${name}-${orientation}-${frame}`} />
    );
  }
}

export default Character;
