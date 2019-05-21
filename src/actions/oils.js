import { resetOilForm } from './oilForm'

const API_URL = process.env.REACT_APP_API_URL;

//action creators
const setOils = oils => {
  return {
    type: 'GET_OILS_SUCCESS',
    oils
  }
}

const addOil = oil => {
  return {
    type: 'CREATE_OIL_SUCCESS',
    oil
  }
}


//async actions - calling to backend

export const getOils = () => {
  return dispatch => {
    return fetch(`${API_URL}/oils`)
      .then(response => response.json())
      .then(oils => dispatch(setOils(oils)))
      .catch(error => console.log(error))

  }
}

export const createOil = oil => {

  return dispatch => {
    return fetch(`${API_URL}/oils`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ oil: oil })
    })
      .then(response => response.json())
      .then(oil => {
        dispatch(addOil(oil))
        dispatch(resetOilForm())
      })
      .catch(error => console.log(error))
  }
}