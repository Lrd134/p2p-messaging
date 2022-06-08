import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f,
)(createStore)(rootReducer)

root.render(  
  <Provider store={store} >
    <App />
  </Provider>
);
