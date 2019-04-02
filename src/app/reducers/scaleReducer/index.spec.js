/* global describe test expect */

import futureReducerData, { scaleApplication } from './index'

const initialState = { data: {} }

describe('Sample reducer for Ruture Scale', () => {
  test('test defaultreducer for initial value', () => {
    const payload = { name: 'dummy' }
    expect(futureReducerData(initialState, scaleApplication(payload))).toEqual({
      data: { ...payload }
    })
  })

  test('test add task reducer for nth value', () => {
    const payload = { name: 'dummy' }
    const state = { data: { test: 1, name: 'dummy-initial' } }
    expect(futureReducerData(state, scaleApplication(payload))).toEqual({
      data: { ...state.data, ...payload }
    })
  })
})
