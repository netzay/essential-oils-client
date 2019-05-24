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
    type: 'GET_OIL_SUCESS',
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
    type: 'DELETE_OIL',
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
        dispatch(getOils())
      })
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