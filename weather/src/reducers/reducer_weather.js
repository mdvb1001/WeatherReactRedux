import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return state.concat([action.payload.data]);
    // can't push because you would be manipulating state... no good!
    // You can write the above line of code like this as well:
    // return [ action.payload.data, ...state ];
  }
  return state;
}