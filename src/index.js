import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configStore from './store/configStore';
import localforage from 'localforage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const localStore = localforage.createInstance({
  name: 'kanban'
});

localStore.getItem('state')
          .then(val => val = val || undefined)
          .then(val => configStore(val), err => {
            console.log(err);
            return configStore(null);
          })
          .then(store => {
            ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('root'));
            store.subscribe(() => {
              localStore.setItem('state', store.getState());
            });
          });

registerServiceWorker();
