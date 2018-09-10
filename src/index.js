import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import SideBar from './js/public/SideBar';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<SideBar />, document.getElementById('SideBar'));
registerServiceWorker();
