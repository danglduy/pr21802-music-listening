import React from 'react';

import Header from './shared/header';
import Content from './content';
import CurrentTrack from './shared/current_track';

import { IntlProvider } from 'react-intl';
import { ENGLISH } from '../locales/en';

import AppProvider from './app_provider'

import 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      messages: ENGLISH.messages,
    }
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <AppProvider>
          <Header />
          <Content />
          <CurrentTrack />
        </AppProvider>
      </IntlProvider>
    );
  }
}

export default App;
