/* global describe test expect */

import { calculateLogic } from './math-logic'

describe('calculator core logic', () => {
  test('Addition Logic', () => {
    expect(calculateLogic('1.2+1.5')).toBe(2.7)
  })

  test('Substraction Logic', () => {
    expect(calculateLogic('1.2-1.9')).toBe(-0.7)
  })

  test('Multiplication Logic', () => {
    expect(calculateLogic('3*6')).toBe(18)
  })

  test('Multiplication Logic for 0', () => {
    expect(calculateLogic('3*0')).toBe(0)
  })

  test('Division Logic', () => {
    expect(calculateLogic('3/6')).toBe(0.5)
  })

  test('Division Logic for 0', () => {
    expect(calculateLogic('0/6')).toBe(0)
  })

  test('Division Logic for infinity', () => {
    expect(calculateLogic('6/0')).toBe(0)
  })
})
