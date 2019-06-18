import { resetOilForm } from './oilForm'

const API_URL = process.env.REACT_APP_API_URL;

//action creators
const setOils = oils => {
  return {
    type: 'GET_OILS_SUCCESS',
    oils
  }
}

export const setOil = oil => {
  return {
    type: 'GET_OIL_SUCCESS',
    oil,
  }
}

export const addOil = oil => {
  return {
    type: 'CREATE_OIL_SUCCESS',
    oil
  }
}

export const destroyOil = oil => {
  return {
    type: 'DELETE_OIL_SUCCESS',
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

export const getOil = (oil_id) => {
  return dispatch => {
    return fetch(`${API_URL}/oils/${oil_id}`)
      .then(response => response.json())
      .then(oil => {
        return dispatch(setOil(oil))
      })
      .catch(error => console.log(error))
  }
}
//component continues to call an action creator, 
//which then uses a Promise to postpone dispatching 
//an action until the API call is complete.The dispatched 
//action causes a reducer to update its state, which causes 
//component to re - render. Provides a single place to manage each async call.
export const createOil = oil => {
  return dispatch => {
    return fetch(`${API_URL}/oils`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ oil: oil })
    })
      //wait for promise to resolve by passing 
      //a handler with the.then method of the promise
      .then(response => response.json())
      .then(oil2 => {
        dispatch(addOil(oil2))
        dispatch(resetOilForm())
      })
      //intercept any error occuring during the execution
      //of the request and processing in the .then callbacks
      .catch(error => console.log(error))
  }
}

export const deleteOil = id => {
  return dispatch => {
    return fetch(`${API_URL}/oils/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ oil: id })
    })
      .then(response => response.json())
      .then(oil => {
        dispatch(destroyOil(oil))
        dispatch(getOils())
      })
      .catch(error => console.log(error))
  };
}
