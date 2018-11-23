import React, {Fragment} from 'react';

import {AppContext} from '../app_provider';
import {constants} from '../../constants/constants';

import * as CategoryApiUtil from '../../utils/category_api_util';
import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      albums: []
    };
  }

  getAlbums = (category) => {
    AlbumApiUtil.fetchCategoryAlbums(category.id).then(
      (data) => {
        this.setState({
          category: category,
          albums: data
        });
      }
    )
  }

  componentDidMount() {
    let {category} = this.props;
    this.getAlbums(category);
  }

  componentDidUpdate() {
    let {category} = this.props;
    if (category.id === this.state.category.id) {return}
    this.getAlbums(category);
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  playAlbum = (album) => {
    let globalContext = this.context;
    SongApiUtil.fetchAlbumSongs(album.id).then(
      songs => {
        globalContext.currentQueue = songs;
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
    const {isPlaying, currentQueueId, currentQueueType} = globalContext;

    if (currentQueueId === album.id && currentQueueType === constants.ALBUM) {
      if (isPlaying === true) {
        playButton =
          <i className="ion-ios-pause"
            onClick={() => {globalContext.dispatch(constants.PAUSE)}}/>
      } else {
        playButton =
          <i className="ion-ios-play"
            onClick={() => {globalContext.dispatch(constants.RESUME)}}/>
      }
    } else {
      playButton =
        <i className="ion-ios-play" onClick={() => {this.playAlbum(album)}}/>
    }
    return playButton;
  }

  render() {
    let globalContext = this.context;
    const {category, albums} = this.state;
    const categoryId = `category-${category.id}`
    let albumsContent;

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <div className="media-card" key={album.id}>
            <div
              className="media-card__image"
              style={{backgroundImage: `url(${album.cover})`}}
            >
              {this.playButton(album)}
            </div>
            <a className="media-card__footer"
              onClick={() => this.setContent(constants.ALBUM, constants.SHOW, album.id)}
            >
              {album.name}
            </a>
          </div>
        )))
    }

    return (
      <div role="tabpanel" className="tab-pane" id={categoryId}>
        <div className="media-cards">
          {albumsContent}
        </div>
      </div>
    )
  }
}

CategoryShow.contextType = AppContext;
export default CategoryShow;
