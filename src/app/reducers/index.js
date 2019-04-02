import { combineReducers } from 'redux'

import futureReducerData from './scaleReducer'

const rootReducer = combineReducers({
  futureData: futureReducerData
})

export default rootReducer
