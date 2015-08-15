import {BOX} from '../constants/CatConstants';
import Debug from 'debug';

const debug = new Debug('myApp:actions');

class Actions {
  constructor(dispatcher, store) {
    this.dispatcher = dispatcher;
    this.store = store;
  }

  addBoxCat(cat) {
    debug('BOX.CAT_ADD', cat);

    this.dispatcher.dispatch({
      actionType: BOX.ADD_CAT,
      cat: cat,
    });
  }
}

export default Actions;
