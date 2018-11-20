import React from 'react';

import {FormattedMessage} from 'react-intl';

import {constants} from '../../constants/constants';
import PlaylistItems from './playlist_items';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  setContent = (contentType, contentMethod, contentId) => {
    this.props.setContent(contentType, contentMethod, contentId)
  }

  render() {
    return (
      <section className="navigation">
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            href="#main"
          >
            <FormattedMessage
              id="navigation.main"
              defaultMessage="Main"
            />
          </div>
          <div id="main">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-browsers" />
              <span>
                <FormattedMessage
                  id="navigation.browse"
                  defaultMessage="Browse"
                />
              </span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-people" />
              <span>
                <FormattedMessage
                  id="navigation.activity"
                  defaultMessage="Activity"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            href="#yourMusic"
          >
            <FormattedMessage
              id="navigation.yourmusic"
              defaultMessage="Your Music"
            />
          </div>
          <div id="yourMusic">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-note" />
              <span>
                <FormattedMessage
                  id="navigation.songs"
                  defaultMessage="Songs"
                />
              </span>
            </a>
            <a href="javascript:void(0)" className="navigation__list__item" onClick={() => this.setContent(constants.ALBUM, constants.INDEX)}>
              <i className="ion-ios-musical-notes" />
              <span>
                <FormattedMessage
                  id="navigation.albums"
                  defaultMessage="Albums"
                />
              </span>
            </a>
            <a href="javascript:void(0)" className="navigation__list__item" onClick={() => this.setContent(constants.ARTIST, constants.INDEX)} >
              <i className="ion-ios-person" />
              <span>
                <FormattedMessage
                  id="navigation.artists"
                  defaultMessage="Artists"
                />
              </span>
            </a>
          </div>
        </div>
        <PlaylistItems setContent={this.setContent} />
      </section>
    );
  }
}

export default Navigation;
