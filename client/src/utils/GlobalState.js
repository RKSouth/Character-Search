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
      currentPost: action.character,
      loading: false
    };

  case UPDATE_POSTS:
    return {
      ...state,
      characters: [...action.characters],
      loading: false
    };

  case ADD_POST:
    return {
      ...state,
      characters: [action.character, ...state.characters],
      loading: false
    };

  case REMOVE_POST:
    return {
      ...state,
      characters: state.characters.filter((character) => {
        return character._id !== action._id; 
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
    characters: [],
    currentcharacter: {
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
