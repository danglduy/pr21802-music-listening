import React from 'react';
import {FormattedMessage} from 'react-intl';

import {AppContext} from '../app_provider';

import * as UserApiUtil from '../../utils/user_api_util';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="header">
        <div className="page-flows">
          <span className="flow">
            <i className="ion-ios-arrow-back" />
          </span>
          <span className="flow">
            <i className="ion-ios-arrow-forward disabled" />
          </span>
        </div>
        <div className="search">
          <FormattedMessage id="header.search" defaultMessage="Search">
            {msg => (
              <input type="text" placeholder= {msg} />
            )}
          </FormattedMessage>
        </div>
        <div className="user">
          <div className="user__notifications">
            <i className="ion-md-notifications" />
          </div>
          <div className="user__inbox">
            <i className="ion-md-archive" />
          </div>
          <div className="user__info">
            <span className="user__info__img">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg"
                alt="Profile Picture"
                className="img-responsive"
              />
            </span>
            <span className="user__info__name">
              <span className="first">Adam</span>
              <span className="last">Lowenthal</span>
            </span>
          </div>
          <div className="user__actions">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="ion-ios-arrow-down" />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1"
              >
                <li>
                  <a href="/account">
                    <FormattedMessage
                      id="header.account"
                      defaultMessage="Account"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage
                      id="header.settings"
                      defaultMessage="Settings"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage
                      id="header.logout"
                      defaultMessage="Log Out"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Header.contextType = AppContext;
export default Header;
