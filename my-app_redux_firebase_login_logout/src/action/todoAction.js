import firebase, {firebaseRef} from '../firebase/firebase';
import {history} from '../index'


export const getAllTodos = () => {
    return {
      type: 'GET_ALL_TODOS'
    };
};

export const setSearchText = (searchText) => {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
};
  
export const toggleShowCompleted = () => {
    return {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export const addTodos = (todos) => {
    return {
      type: 'ADD_TODOS',
      todos
    };
};

export const addTodo = (todo) => {
    return {
      type: 'ADD_TODO',
      todo
    };
};

export const AddTodoAction = (text) => {
    return (dispatch, getState) => {
      var todo = {
        text,
        completed: false
      };
      const uid = getState().auth.uid;
      const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
  
      return todoRef.then(() => {
        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
      });
    };
};

export var updateTodo = (id, updates) => {
    return {
      type: 'UPDATE_TODO',
      id,
      updates
    };
  };
  
export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
      var updates = {
        completed
      };
      return todoRef.update(updates).then(() => {
        dispatch(updateTodo(id, updates));
      });
    };
};

export const login = (uid) => {
    return {
      type: 'LOGIN',
      uid
    };
};
  
export const createAccount = (email, password) => {
    return (dispatch, getState) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        console.log('Auth worked!', result);
        dispatch(login(result.user.uid));
        history.push('/');

      }, (error) => {
        console.log('Unable to auth', error);
      });
    };
};

export const startLogin = (email, password) => {
    return (dispatch, getState) => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
        console.log('Auth worked!', result);
        dispatch(login(result.user.uid));
        history.push('/');
      }, (error) => {
        console.log('Unable to auth', error);
      });
    };
};

export const logout = () => {
    return {
      type: 'LOGOUT'
    };
};
  
export const startLogout = () => {
    return (dispatch, getState) => {
      return firebase.auth().signOut().then(() => {
        dispatch(logout());
        console.log('Logged out!');
      }, (error) => {
        console.log('logout error', error);
      });
    };
};
