import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.book,
      loading: false
    };

  case UPDATE_POSTS:
    return {
      ...state,
      books: [...action.books],
      loading: false
    };

  case ADD_POST:
    return {
      ...state,
      books: [action.book, ...state.books],
      loading: false
    };

  case REMOVE_POST:
    return {
      ...state,
      books: state.books.filter((book) => {
        return book._id !== action._id; 
      })
    };

  

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    currentBook: {
      _id: 0,
      title: "",
      description: "",
      author: "",
      imageLink: "",
      infoLinks:""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
