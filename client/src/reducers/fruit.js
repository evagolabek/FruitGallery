import {SHOW_FRUIT} from '../actions/types'


export default (state = null, {type, payload}) => {
  switch (type) {
    case SHOW_FRUIT:
      return payload

    default:
      return state
  }
}
