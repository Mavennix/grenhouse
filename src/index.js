import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Greenhouse from './components/greenhouse';

ReactDOM.render( < Greenhouse / > , document.getElementById('root'));
registerServiceWorker();