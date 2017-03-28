
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store.js';
import App from './app.js';


render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('app')
);