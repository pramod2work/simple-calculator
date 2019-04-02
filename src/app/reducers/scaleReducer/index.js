import { handleActions, createAction } from 'redux-actions'

// Actions
export const SCALE_APPLICATION = 'SCALE_APPLICATION'

const initialState = {
  data: {}
}

export const scaleApplication = createAction(SCALE_APPLICATION)

const futureDataReducer = handleActions({
  [scaleApplication]: (state, { payload }) => ({
    data: { ...state.data, ...payload }
  })
}, initialState)

export default futureDataReducer
