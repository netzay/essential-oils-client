export function createFavorite(name, uses, description) {
  return dispatch => {
    return fetch('favorites', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, uses, description})
    })
      .then(response => { return response.json() })
      .then(payload => {
        dispatch({ type: 'CREATE_FAVORITE', payload });
      }).catch(function (error) {
        console.log('request failed, already in favorites', error)
      })
  };
}

export function fetchFavorites() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITES' });
    return fetch('favorites', { accept: 'application/json', })
      .then(response => { return response.json() })
      .then(payload => dispatch({ type: 'FETCH_FAVORITES', payload }));
  };
}

export function deleteFavorite(favoriteId) {
  return (dispatch) => {
    return fetch(`favorites/${favoriteId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(payload => dispatch({ type: "DELETE_FAVORITE", payload }))
  }
}
