import { legacy_createStore as createStore } from 'redux'

function counterReducer(state = {}, action: {[key: string]: any}) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return state = action.data
      case 'REMOVE':
        return state
      default:
        return state
    }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

export default counterReducer;