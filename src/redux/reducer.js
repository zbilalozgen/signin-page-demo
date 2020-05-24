const initialState = {
  isOpen: false
}

function reducer(state= initialState, action) {
  switch (action.type) {
    case "HANDLE_MODAL":
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export default reducer