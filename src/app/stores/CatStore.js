import {EventEmitter} from 'events';
import Immutable from 'immutable';
import Debug from 'debug';
import _ from 'lodash';

import {BOX, CHANGE} from '../constants/CatConstants';

const debug = new Debug('myApp:store');


class Store extends EventEmitter {
  constructor(dispatcher, state) {
    super();

    const _this = this;

    if (!dispatcher) {
      debug(new Error('Store: dispatcher is required'));
    }

    if (state) {
      debug('app is created with an initial state', state);
    }

    state = state || {};
    state = _.merge({}, Store.defaultState, state);

    // Register handlers

    dispatcher.register( (action) => {
      if (action.actionType === BOX.CAT_ADD) {
        _this.onItemAdd(action.item);
        _this.emit(CHANGE);
      }
    });

    debug('store is loaded with state', state);

    // Turn state to immutable
    _this.state = Immutable.fromJS(state);
  }

  getState() {
    return this.state;
  }

  onCatAdd(cat) {
    debug('cat add', cat);

    const immutableItem = Immutable.fromJS(cat);

    this.state = this.state.updateIn(['box', 'cats'], cats => cats.push(immutableItem));
  }
}

// Default state
Store.defaultState = {
  box: {
    title: null,
    cats: [],
  },
};

export default Store;
