import React from 'react';

import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as UserApiUtil from '../../utils/user_api_util';
import * as PlaylistApiUtil from '../../utils/playlist_api_util';

class PlaylistItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    let globalContext = this.context;
    let currentUserId = globalContext.currentUserId;
    UserApiUtil.fetchCurrentUser().then(
      user => {
        PlaylistApiUtil.fetchUserPlaylists(user.id).then(
          playlists => {
            this.setState({
              playlists: playlists
            });
            globalContext.currentUserId = user.id;
          }
        )
      }
    )
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  render() {
    let playlistItems;
    let globalContext = this.context;
    const { playlists } = this.state;
    if (playlists.length > 0) {
      playlistItems = (
        playlists.map(playlist => (
          <a href="#"
            className="navigation__list__item"
            key={playlist.id}
            onClick={() => this.setContent(constants.PLAYLIST, constants.SHOW, playlist.id)}
          >
            <i className="ion-ios-musical-notes" />
            <span>{playlist.name}</span>
          </a>
        ))
      )
    }

    return (
      <div className="navigation__list">
        <div
          className="navigation__list__header"
          role="button"
          href="#playlists"
        >
          <FormattedMessage
            id="navigation.playlists"
            defaultMessage="Playlists"
          />
        </div>

        <div id="playlists">
          {playlistItems}
        </div>
      </div>
    );
  }
}

PlaylistItems.contextType = AppContext;
export default PlaylistItems;
