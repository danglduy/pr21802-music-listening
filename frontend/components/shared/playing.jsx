import React from 'react';

import { AppContext } from '../app_provider';

class Playing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let globalContext = this.context;

    return (
      <section className="playing">
        <div className="playing__art">
          <img
            src={ globalContext.currentTrackCoverUrl }
            alt="Album Art"
          />
        </div>
        <div className="playing__song">
          <a className="playing__song__name">{ globalContext.currentTrackName }</a>
          <a className="playing__song__artist">{ globalContext.currentTrackArtist }</a>
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
