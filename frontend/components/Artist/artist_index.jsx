import React from 'react';

import {AppContext} from '../app_provider';
import {constants} from '../../constants/constants';

import * as ArtistApiUtil from '../../utils/artist_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    ArtistApiUtil.fetchArtists().then(
      (data) => {
        this.setState({artists: data});
      }
    )
  }

  playArtist = (artist) => {
    let globalContext = this.context;
    SongApiUtil.fetchArtistSongs(artist.id).then(
      (songs) => {
        globalContext.currentQueue = songs;
        globalContext.currentQueueType = constants.ARTIST;
        globalContext.currentQueueId = artist.id;
        globalContext.currentQueueIndex = 0;
        globalContext.dispatch(constants.START);
      }
    )
  }

  playButton = (artist) => {
    let playButton;
    let globalContext = this.context;
    const {isPlaying, currentQueueId, currentQueueType} = globalContext;
    if (currentQueueId === artist.id && currentQueueType === constants.ARTIST) {
      if (isPlaying === true) {
        playButton =
          <i className="ion-ios-pause" onClick={() => {globalContext.dispatch(constants.PAUSE)}}/>
      } else {
        playButton =
          <i className="ion-ios-play" onClick={() => {globalContext.dispatch(constants.RESUME)}}/>
      }
    } else {
      playButton =
        <i className="ion-ios-play" onClick={() => {this.playArtist(artist)}}/>
    }
    return playButton;
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  render() {
    const {artists} = this.state;
    let artistsContent;

    if (artists.length > 0) {
      artistsContent = (
        artists.map(artist => (
          <div className="media-card" key={artist.id}>
            <div
              className="media-card__image"
              style={{
                backgroundImage:
                `url(${artist.cover})`
              }}
            >
              {this.playButton(artist)}
            </div>
            <a className="media-card__footer" onClick={() => this.setContent(constants.ARTIST, constants.SHOW, artist.id)}>{artist.name}</a>
          </div>
        ))
      )
    }

    return (
      <div className="content__middle">
        <div id="artists">
          <div className="media-cards">
            {artistsContent}
          </div>
        </div>
      </div>
    )
  }
}

ArtistIndex.contextType = AppContext;
export default ArtistIndex;
