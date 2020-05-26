import {AppActions, HANDLE_MODAL} from "./action";

interface InitialStateInterface {
  isOpen: boolean
}

const initialState: InitialStateInterface = {
  isOpen: false
}


function reducer (state= initialState, action: AppActions): any {
  switch (action.type) {
    case HANDLE_MODAL:
      return {
        ...state,
        isOpen: action.isOpen
      }
    default:
      return state
  }
}

export default reducer