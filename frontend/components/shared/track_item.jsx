import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song,
      queueIndex: this.props.queueIndex,
      queue: this.props.queue
    };
  }

  render() {
    const { song, queue, queueIndex } = this.state;
    let globalContext = this.context;
    let playButton;
    if (song.duration) {
      playButton =
        <a href="javascript:void(0)"
          onClick={() => globalContext.dispatch("START", queue, queueIndex)}>
          <FormattedMessage
            id="track_item.play"
            defaultMessage="Play"/>
        </a>
    }
    return (
      <div className="track" key={ song.id }>
        <div className="track__number">{ song.track_no }</div>
        <div className="track__added">
          {playButton}
        </div>
        <div className="track__title">{ song.name }</div>
        <div className="track__length">{ song.duration }</div>
      </div>
    )
  }
}

TrackItem.contextType = AppContext;
export default TrackItem;
