// import uuid  from 'node-uuid';

let defaultState = {
    showCompleted: false,
    searchText: '',
    todos: [{
        id: 1,
        text: 'Some text here',
        completed: true
      },{
        id: 2,
        text: 'Other text here',
        completed: false
      }],
      uid: {}
};

export const getAllTodosReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_ALL_TODOS':
        return state.todos || [];
      default:
        return state.todos || [];
    };
};

export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
      default:
        return state;
    };
};
  
export const showCompletedReducer = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
      default:
        return state;
    }
};


export const todosReducer = (state = defaultState.todos, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ];
      case 'UPDATE_TODO':
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...action.updates
            };
          } else {
            return todo;
          }
        });
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];
      case 'LOGOUT':
        return [];
      default:
        return state;
    }
};
  

export const authReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          uid: action.uid
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
};