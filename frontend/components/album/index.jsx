import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    AlbumApiUtil.fetchAlbums().then(
      data => {
        this.setState({ albums: data });
      }
    )
  }

  playAlbum = (album) => {
    let globalContext = this.context;
    SongApiUtil.fetchAlbumSongs(album.id).then(
      data => {
        globalContext.currentQueue = data;
        globalContext.currentQueueType = constants.ALBUM;
        globalContext.currentQueueId = album.id;
        globalContext.currentQueueIndex = 0;
        globalContext.dispatch(constants.START);
      }
    )
  }

  playButton = (album) => {
    let playButton;
    let globalContext = this.context;
    const { isPlaying, currentQueueId, currentQueueType } = globalContext;

    if (currentQueueId === album.id && currentQueueType === constants.ALBUM) {
      if (isPlaying === true) {
        playButton =
          <i className="ion-ios-pause"
            onClick={() => { globalContext.dispatch(constants.PAUSE) }} />
      } else {
        playButton =
          <i className="ion-ios-play"
            onClick={() => { globalContext.dispatch(constants.RESUME) }} />
      }
    } else {
      playButton =
        <i className="ion-ios-play"
          onClick={() => { this.playAlbum(album) }} />
    }
    return playButton;
  }

  render() {
    let globalContext = this.context;
    const { albums } = this.state;
    let albumsContent;

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <div className="media-card" key={album.id}>
            <div
              className="media-card__image"
              style={{ backgroundImage: `url(${album.cover})` }}
            >
              {this.playButton(album)}
            </div>

            <Link to={`/albums/${album.id}`} className="media-card__footer">
              {album.name}
            </Link>
          </div>
        )))
    }

    return (
      <div className="content__middle">
        <div id="albums">
          <div className="media-cards">
            {albumsContent}
          </div>
        </div>
      </div>
    )
  }
}

AlbumIndex.contextType = AppContext;
export default AlbumIndex;
