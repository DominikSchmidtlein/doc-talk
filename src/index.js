import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();
