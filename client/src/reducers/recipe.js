import {SHOW_RECIPE} from '../actions/types'


export default (state = null, {type, payload}) => {
  switch (type) {
    case SHOW_RECIPE:
      return payload

    default:
      return state
  }
}
