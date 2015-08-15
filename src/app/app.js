import React from 'react/addons';
import Debug from 'debug';

import AppRoot from './components/AppRoot';

const debug = new Debug('myApp');

class App {
  constructor(options) {
    debug('create app with options', options);

    this.state = options.state;
  }

  render(element) {
    debug('render app with state', this.state);

    const appRootElement = React.createElement(AppRoot, {
      state: this.state,
    });

    // render to DOM
    if (element) {
      debug('render to DOM');
      React.render(appRootElement, element);
      return this;
    }

    debug('render to string');
    return React.renderToString(appRootElement);
  }

  renderToDOM(element) {
    if (!element) {
      return debug(new Error('App.renderToDOM: element is required'));
    }

    this.render(element);
  }

  renderToString() {
    return this.render();
  }
}

export default App;
