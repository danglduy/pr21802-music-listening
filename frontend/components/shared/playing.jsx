import React from 'react';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

class Playing extends React.Component {
  constructor(props) {
    super(props);
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }


  render() {
    let globalContext = this.context;
    const { currentQueueType, currentQueueId } = globalContext;

    return (
      <section className="playing">
        <div className="playing__art">
          <a href="javascript:void(0)"
            onClick={() => { this.setContent(currentQueueType, constants.SHOW, currentQueueId) }}>
            <img
              src={globalContext.currentTrackCoverUrl}
              alt="Album Art"
            />
          </a>
        </div>
        <div className="playing__song">
          <a className="playing__song__name">{globalContext.currentTrackName}</a>
          <a className="playing__song__artist">{globalContext.currentTrackArtist}</a>
        </div>
        <div className="playing__add">
          <i className="ion-md-checkmark" />
        </div>
      </section>
    );
  }
}

Playing.contextType = AppContext;
export default Playing;
