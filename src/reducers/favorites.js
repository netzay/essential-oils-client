function favorites(state = {
  loading: false,
  favoritesData: []

}, action) {
  switch (action.type) {
    case "CREATE_FAVORITE":
      return {...state, favoritesData: [...state.favoritesData, action.payload]}

    case "LOADING_FAVORITES":
      return {...state, loading: true, favoritesData:[], }

    case "FETCH_FAVORITES":
      return {...state, loading:false, favoritesData: action.payload}

    case "DELETE_FAVORITE":
      return {...state, loading: false,
      favoritesData: state.favoritesData.filter(
        favorite => favorite.id !== action.payload.id
        )
      }

    default:
      return state
  }
}

export default favorites;
