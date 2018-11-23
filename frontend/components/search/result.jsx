import React from 'react';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  render() {
    let globalContext = this.context;
    let artistsContent, albumsContent, songsContent;
    if (globalContext.currentSearchResultArtists.length > 0) {
      artistsContent = (
        globalContext.currentSearchResultArtists.map(artist => (
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
            <a className="media-card__footer"
              onClick={() => this.setContent(constants.ARTIST, constants.SHOW, artist.id)}>
              {artist.name}
            </a>
          </div>
        ))
      )
    }

    if (globalContext.currentSearchResultAlbums.length > 0) {
      albumsContent = (
        globalContext.currentSearchResultAlbums.map(album => (
          <div className="media-card" key={album.id}>
            <div
              className="media-card__image"
              style={{ backgroundImage: `url(${album.cover})` }}
            >
              <i className="ion-ios-play" />
            </div>
            <a className="media-card__footer"
              onClick={() => this.setContent(constants.ALBUM, constants.SHOW, album.id)}>
              {album.name}
            </a>
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
        <div id="albums">
          <div className="media-cards">
            {albumsContent}
          </div>
        </div>
      </div>
    )
  }
}
SearchResult.contextType = AppContext;
export default SearchResult;
