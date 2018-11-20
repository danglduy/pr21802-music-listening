import React from 'react';

import {constants} from '../constants/constants';
import {AppContext} from './app_provider';

import Navigation from './shared/navigation';
import Playlist from './shared/playlist';
import Playing from './shared/playing';

import ArtistIndex from './Artist/artist_index';
import ArtistShow from './Artist/artist_show';

import AlbumIndex from './Album/album_index';
import AlbumShow from './Album/album_show';

import PlaylistShow from './Playlist/playlist_show';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContentType: constants.ARTIST,
      currentContentMethod: constants.INDEX,
      currentContentId: '',
    }
  }

  setContent = (contentType, contentMethod, contentId = 0) => {
    let globalContext = this.context;
    globalContext.currentContentType = contentType;
    globalContext.currentContentMethod = contentMethod;
    globalContext.currentContentId = contentId;
    this.setState({
      currentContentType: contentType,
      currentContentMethod: contentMethod,
      currentContentId: contentId
    })
  }

  componentDidUpdate() {
    let totalHeight = $(window).height();

    let headerHeight = $('.header').outerHeight();
    let footerHeight = $('.current-track').outerHeight();
    let playlistHeight = $('.new_playlist').outerHeight();
    let nowPlaying = $('.playing').outerHeight();

    let navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
    let artistHeight = totalHeight - (headerHeight + footerHeight);

    $('.navigation').css('height' , navHeight);
    $('.content__middle').css('height' , artistHeight);

    if ($(window).width() <= 768){
      $('.collapse').removeClass('in');
      $('.navigation').css('height' , 'auto');
      $('.artist').css('height' , 'auto');
    }

    if ($(window).width() > 768){
      $('.collapse').addClass('in');
    }
  }

  render() {
    let mainContent;
    let globalContext = this.context;
    const {currentContentType, currentContentMethod, currentContentId} = this.state;
    if (currentContentType === constants.ARTIST) {
      if (currentContentMethod === constants.INDEX) {
        mainContent = <ArtistIndex setContent={this.setContent} />
      } else if (currentContentMethod === constants.SHOW) {
        mainContent = <ArtistShow artistId={currentContentId} />
      }
    } else if (currentContentType === constants.ALBUM) {
      if (currentContentMethod === constants.INDEX) {
        mainContent = <AlbumIndex setContent={this.setContent} />
      } else if (currentContentMethod === constants.SHOW) {
        mainContent = <AlbumShow albumId={currentContentId} />
      }
    } else if (currentContentType === constants.PLAYLIST) {
      if (currentContentMethod === constants.SHOW) {
        mainContent = <PlaylistShow playlistId={currentContentId} />
      }
    }

    return (
      <section className="content">
        <div className="content__left">
          <Navigation setContent={this.setContent}/>
          <Playlist />
          <Playing setContent={this.setContent}/>
        </div>
        {mainContent}
      </section>
    );
  }
}

Content.contextType = AppContext;
export default Content;
