import Debug from 'debug';
import App from '../../app';

const attachElement = document.getElementById('app');

// development tools
const state = {};
Debug.enable('myApp*');

const app = new App({state: state});

app.renderToDOM(attachElement);
