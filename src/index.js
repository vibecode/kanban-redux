import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(() => null);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
