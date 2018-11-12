import React from 'react';
import { FormattedMessage } from 'react-intl';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="playlist">
        <a href="#">
          <i className="ion-ios-add-circle" />
            <FormattedMessage
              id="playlist.new_playlist"
              defaultMessage="New Playlist"
            />
        </a>
      </section>
    );
  }
}

export default Playlist;
