import * as request from 'superagent'
import {baseUrl} from '../constants'
import {SHOW_FRUITS, ADD_FRUIT, UPDATE_FRUIT} from './types'


export const getFruits = () => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/fruits`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: SHOW_FRUITS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createFruit = (o) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/fruits`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send(o)
    .then(response => {
      dispatch({
        type: ADD_FRUIT,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const updateFruit = (batchId, fruit) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
  request
    .patch(`${baseUrl}/fruits`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send({fruit})
    .then(result => {
      dispatch({
        type: UPDATE_FRUIT
      })
    })
    .catch(err => console.error(err))
}
