import React from 'react'
import ReactDom from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import EmailDeduplicator from './containers/email_deduplicator'

import reducers from './reducers'

const store = createStore(
   reducers,
   applyMiddleware(thunkMiddleware)
);

ReactDom.render((
   <Provider store={store}>
      <EmailDeduplicator />
   </Provider>
), document.getElementById('root'))
