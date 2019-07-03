const API_URL = process.env.REACT_APP_API_URL;

export const addFav = oil => {
  return {
    type: 'ADD_FAVORITE_SUCCESS',
    oil
  }
}

export const addFavorite = id => {
  return dispatch => {
    return fetch(`${API_URL}/oils/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ oil: id })
    })
      //wait for promise to resolve by passing 
      //a handler with the.then method of the promise
      .then(response => response.json())
      .then(oil => {
        dispatch(addFav(oil))
      })
      //intercept any error occuring during the execution
      //of the request and processing in the .then callbacks
      .catch(error => console.log(error))
  }
}