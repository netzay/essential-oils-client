const initialState = {
  name: '',
  uses: '',
  description: '',
  img_url: ''
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATED_DATA':
      return action.oilFormData
    case 'RESET_OIL_FORM':
      return state;
    default:
      return state;

  }
}