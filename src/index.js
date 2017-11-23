import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './pages/login/index';
import registerServiceWorker from './utils/registerServiceWorker';
import {CookiesProvider} from 'react-cookie'

ReactDOM.render(<CookiesProvider><Article /></CookiesProvider>, document.getElementById('root'));
registerServiceWorker();
