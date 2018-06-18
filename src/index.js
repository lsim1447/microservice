import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StorageStore from './stores/StorageStore';
import { Provider } from 'mobx-react';

ReactDOM.render(
    <Provider StorageStore={StorageStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
