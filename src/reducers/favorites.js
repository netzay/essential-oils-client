export default (state = [], action) => {
  switch (action.type) {
    case "GET_FAVORITES_SUCCESS":
      return action.oils;
    case "CREATE_FAVORITE_SUCCESS":
      return state.concat(action.oil)
    case "ADD_FAVORITE_SUCCES":
      return state.concat(action.oil)
    case "DELETE_FAVORITE_SUCCESS":
      return state.filter(oil => oil.id !== action.id)
    default:
      return state;
  }
}