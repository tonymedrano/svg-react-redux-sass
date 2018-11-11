import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { reducer as formReducer } from "redux-form"

import thunk from 'redux-thunk'
import { postReducer } from "../state/reducers"


const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store