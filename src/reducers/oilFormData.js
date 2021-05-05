const initialState = {
  name: '',
  uses: '',
  notes: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DATA':
      return action.oilFormData
    case 'RESET_OIL_FORM':
      return initialState;
    default:
      return state;

  }
}