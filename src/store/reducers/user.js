import {SET_USER} from '../types';

const initialState = {
  userData: {},
  isLogin: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
      };

    default:
      return state;
  }
};
