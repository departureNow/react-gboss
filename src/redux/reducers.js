/*
根据旧的老的action,state产生新的state返回
 */
import {combineReducers} from 'redux';

function xxx(state = 0, action) {
  return state;
}

function yyy(state = 0, action) {
  return state;
}

export default combineReducers({xxx, yyy});