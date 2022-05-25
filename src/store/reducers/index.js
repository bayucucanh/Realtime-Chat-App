import {SET_USER} from '../types';

const initialState = {
  userData: {},
  isLogin: false,
};

export const GlobalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.data,
        isLogin: true,
      };

    default:
      return state;
  }
};
