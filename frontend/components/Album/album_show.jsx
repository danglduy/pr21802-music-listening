import React from 'react';
import { FormattedMessage } from 'react-intl';

import TrackItem from '../shared/track_item';

import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.albumId,
      album: {},
      songs: []
    };

    AlbumApiUtil.fetchAlbum(this.state.albumId).then(
      (data) => {
        this.setState({ album: data });
      }
    )

    SongApiUtil.fetchAlbumSongs(this.state.albumId).then(
      (data) => {
        this.setState({ songs: data });
      }
    )
  }

  render() {
    const { album, songs } = this.state;
    let songContent;

    songContent = (
      songs.map(song => (
        <TrackItem song={ song } key={ song.id } />
      ))
    )

    return (
      <div className="content__middle">
        <div className="album is-verified">
          <div className="album__header">
            <div className="album__info">
              <div className="profile__img">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
                  alt={ album.name }
                />
              </div>
              <div className="album__info__meta">
                <div className="album__info__type">
                  <FormattedMessage
                    id="artist_show.album"
                    defaultMessage="album"
                  />
                </div>
                <div className="album__info__name">{ album.name }</div>
                <div className="album__info__actions">
                  <button className="button-dark">
                    <i className="ion-ios-play" />
                    <FormattedMessage
                      id="album_show.play"
                      defaultMessage="Play"
                    />
                  </button>
                  <button className="button-light">
                    <FormattedMessage
                      id="album_show.save"
                      defaultMessage="Save"
                    />
                  </button>
                  <button className="button-light more">
                    <i className="ion-ios-more" />
                  </button>
                </div>
              </div>
            </div>
            <div className="album__listeners">
              <div className="album__listeners__count">15,662,810</div>
              <div className="album__listeners__label">
                <FormattedMessage
                  id="album_show.monthly_listeners"
                  defaultMessage="Monthly Listeners"
                />
              </div>
            </div>
            <div className="album__navigation">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#album-overview"
                    aria-controls="album-overview"
                    role="tab"
                    data-toggle="tab"
                  >
                    <FormattedMessage
                      id="album_show.overview"
                      defaultMessage="Overview"
                    />
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#related-albums"
                    aria-controls="related-albums"
                    role="tab"
                    data-toggle="tab"
                  >
                    <FormattedMessage
                      id="album_show.related_albums"
                      defaultMessage="Related Albums"
                    />
                  </a>
                </li>
              </ul>
              <div className="album__navigation__friends">
                <a href="#">
                  <img
                    src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    alt="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="album__content">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="album-overview"
              >
                <div className="overview">
                  <div className="overview__related">
                    <div className="section-title">
                      <FormattedMessage
                        id="album_show.related_albums"
                        defaultMessage="Related Albums"
                      />
                    </div>
                    <div className="related-albums">
                      <a href="#" className="related-album">
                        <span className="related-album__img">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
                            alt="Hoodie Allen"
                          />
                        </span>
                        <span className="related-album__name">
                          Hoodie Allen
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="overview__albums">
                    <div className="album">
                      <div className="album__tracks">
                        <div className="tracks">
                          <div className="tracks__heading">
                            <div className="tracks__heading__number">#</div>
                            <div className="tracks__heading__title">
                              <FormattedMessage
                                id="album_show.song"
                                defaultMessage="Song"
                              />
                            </div>
                            <div className="tracks__heading__length">
                              <i className="ion-ios-stopwatch-outline" />
                            </div>
                            <div className="tracks__heading__popularity">
                              <i className="ion-thumbsup" />
                            </div>
                          </div>
                          {songContent}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
