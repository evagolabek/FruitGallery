import {SHOW_FRUITS, ADD_FRUIT, UPDATE_FRUIT} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_FRUIT:
      return {
        ...state,
        [payload.id]: payload
      }

    case SHOW_FRUITS:
      return payload.fruits

    case UPDATE_FRUIT:
      return payload.reduce((fruits, fruit) => {
        fruits[fruit.id] = fruit
        return fruits
      }, {})

    default:
      return state
  }
}
