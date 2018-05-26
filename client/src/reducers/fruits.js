import {SHOW_FRUITS} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {

    case SHOW_FRUITS:
      return payload.fruits

    default:
      return state
  }
}
