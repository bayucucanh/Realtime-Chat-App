import {createStore} from 'redux';
import {GlobalReducer} from './reducers';

export const Store = createStore(GlobalReducer);
