import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as SearchApiUtil from '../../utils/search_api_util';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      songs: []
    }
  }

  componentDidMount() {
    const { match } = this.props;
    SearchApiUtil.fetchSearchResults(match.params.q).then(
      data => {
        this.setState({
          artists: data.artists,
          albums: data.albums,
          songs: data.songs
        })
      }
    )
  }

  render() {
    let artistsContent, albumsContent, songsContent;
    const { artists, albums, songs } = this.state;
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
            <Link to={`/artist/${artist.id}`} className="media-card__footer">
              {artist.name}
            </Link>
          </div>
        ))
      )
    }

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <div className="media-card" key={album.id}>
            <div
              className="media-card__image"
              style={{ backgroundImage: `url(${album.cover})` }}
            >
              <i className="ion-ios-play" />
            </div>

            <Link to={`/albums/${album.id}`} className="media-card__footer">
              {album.name}
            </Link>
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
