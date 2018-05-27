import * as request from 'superagent'
import {baseUrl} from '../constants'
import history from '../history'
import {SHOW_FRUITS, SHOW_FRUIT, ADD_FRUIT, UPDATE_FRUIT, DELETE_FRUIT} from './types'


export const getFruits = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/fruits`)
    .then(response => {
      dispatch({
        type: SHOW_FRUITS,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const getFruit = (fruitId) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/fruits/${fruitId}`)
    .then(response => {
      dispatch({
        type: SHOW_FRUIT,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const createFruit = (fruit) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/fruits`)
    .send(fruit)
    .then(response => {
      dispatch({
        type: ADD_FRUIT,
        payload: response.body
      })
    })
    .catch(err => console.error(err))

  history.go()
}

export const updateFruit = (fruitId, fruit) => (dispatch, getState) => {
  request
    .put(`${baseUrl}/fruits/${fruitId}`)
    .send(fruit)
    .then(response => {
      dispatch({
        type: UPDATE_FRUIT,
        payload: response.body
      })
    })
    .catch(err => console.error(err))

  history.go()
}

export const deleteFruit = (fruitId) => (dispatch, getState) => {
  request
  .delete(`${baseUrl}/fruits/${fruitId}`)
  .then( response => {
    dispatch({
      typer: DELETE_FRUIT,
      payload: response.body
    })
  })
  .catch(err => console.error(err))

  history.go()
}
