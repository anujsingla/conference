import * as redux from 'redux';
import thunk from 'redux-thunk';

// every app has only 1 store.
// let store = redux.createStore();

import {
    searchTextReducer,
    showCompletedReducer,
    todosReducer,
    authReducer,
    getAllTodosReducer
} from '../reducer/todoReducer'

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer,
    todosList: getAllTodosReducer
  });

const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};