// with vanilla redux, we don't have any way to deal with actions whose
// payload is async in nature

import { FETCH_USERS } from '../actions/types';

export default function(state=[], action) {
  // console.log('received action', action)

  switch (action.type) {
  case FETCH_USERS:
    return [...state, ...action.payload.data];
  default:
    return state;
  }
}