import Debug from 'debug';
import App from '../../app';

const attachElement = document.getElementById('app');

// development tools
const state = {
  cats: [
    {
      name: 'Bob',
      color: 'calico',
    },
    {
      name: 'Sally',
      color: 'grey',
    },
  ],
};
Debug.enable('myApp*');

const app = new App({state: state});

app.renderToDOM(attachElement);
