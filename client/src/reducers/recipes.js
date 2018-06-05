import {SHOW_RECIPES} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {

    case SHOW_RECIPES:
      return payload.recipes

    default:
      return state
  }
}
