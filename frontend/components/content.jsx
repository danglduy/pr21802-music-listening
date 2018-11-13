import React from 'react';

import Navigation from './shared/navigation';
import Playlist from './shared/playlist';
import Playing from './shared/playing';

import ArtistIndex from './Artist/artist_index';
import ArtistShow from './Artist/artist_show';

import AlbumIndex from './Album/album_index';
import AlbumShow from './Album/album_show';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'artist_index',
      artistId: 0,
      albumId: 0
    }
  }

  setContent = (newContent, id) => {
    this.setState({
      content: newContent
    });
    if (newContent === 'artist_show') {
      this.setState({
        artistId: id
      })
    }
    if (newContent === 'album_show') {
      this.setState({
        albumId: id
      })
    }
  }

  componentDidUpdate() {
    let totalHeight = $(window).height();
    let headerHeight = $('.header').outerHeight();
    let footerHeight = $('.current-track').outerHeight();
    let playlistHeight = $('.playlist').outerHeight();
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

    if (this.state.content === 'artist_index') {
      mainContent = <ArtistIndex setContent={ this.setContent } />
    }

    if (this.state.content === 'artist_show') {
      mainContent = <ArtistShow artistId={ this.state.artistId } />
    }

    if (this.state.content === 'album_index') {
      mainContent = <AlbumIndex setContent={ this.setContent } />
    }

    if (this.state.content === 'album_show') {
      mainContent = <AlbumShow albumId={ this.state.albumId } />
    }

    return (
      <section className="content">
        <div className="content__left">
          <Navigation setContent={ this.setContent }/>
          <Playlist />
          <Playing />
        </div>
        {mainContent}
      </section>
    );
  }
}

export default Content;
