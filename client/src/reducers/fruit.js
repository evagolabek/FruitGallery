import {SHOW_FRUIT, ADD_FRUIT} from '../actions/types'


export default (state = null, {type, payload}) => {
  switch (type) {
    case SHOW_FRUIT:
      return payload

    case ADD_FRUIT:
      return [...state, payload];

    default:
      return state
  }
}
