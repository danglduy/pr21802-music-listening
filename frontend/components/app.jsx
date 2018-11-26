import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './content';

import {IntlProvider} from 'react-intl';
import {ENGLISH} from '../locales/en';

import AppProvider from './app_provider';

import * as UserApiUtil from '../utils/user_api_util';

import 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      messages: ENGLISH.messages,
      currentUserId: null
    }
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <AppProvider>
          <Router basename="/player">
            <Content />
          </Router>
        </AppProvider>
      </IntlProvider>
    );
  }
}

export default App;