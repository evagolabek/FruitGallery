import * as request from 'superagent'
import {baseUrl} from '../constants'
import history from '../history'
import {SHOW_RECIPES, SHOW_RECIPE, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE} from './types'


export const getRecipes = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/recipes`)
    .then(response => {
      dispatch({
        type: SHOW_RECIPES,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const getRecipe = (recipeId) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/recipes/${recipeId}`)
    .then(response => {
      dispatch({
        type: SHOW_RECIPE,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}

export const createRecipe = (fruit) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/recipes`)
    .send(fruit)
    .then(response => {
      dispatch({
        type: ADD_RECIPE,
        payload: response.body
      })
    })
    .catch(err => console.error(err))

  history.go()
}

export const updateRecipe = (recipeId, recipe) => (dispatch, getState) => {
  request
    .put(`${baseUrl}/recipes/${recipeId}`)
    .send(recipe)
    .then(response => {
      dispatch({
        type: UPDATE_RECIPE,
        payload: response.body
      })
    })
    .catch(err => console.error(err))

  history.go()
}

export const deleteRecipe = (recipeId) => (dispatch, getState) => {
  request
  .delete(`${baseUrl}/recipes/${recipeId}`)
  .then( response => {
    dispatch({
      typer: DELETE_RECIPE,
      payload: response.body
    })
  })
  .catch(err => console.error(err))

  history.go()
}
