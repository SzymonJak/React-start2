import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import store from '../src/redux/store';

// ReactDOM.render(<App />, document.getElementById('app'));
// To start using redux implemented Provider (see below)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
