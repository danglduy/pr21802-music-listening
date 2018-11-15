import React from 'react';

import {constants} from '../../constants/constants';

import * as ArtistApiUtil from '../../utils/artist_api_util';

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
              <i className="ion-ios-play" />
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

export default ArtistIndex;
