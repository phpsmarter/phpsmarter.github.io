import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogRocket from 'logrocket';
LogRocket.init('qgqy01/demo');
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
