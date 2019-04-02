/* global describe test expect beforeEach */

import React from 'react'
import { shallow } from 'enzyme'

import CalculatorKeyPad from './index'

describe('<CalculatorKeyPad />', () => {
  describe('Shallow Rendering', () => {
    let component
    beforeEach(() => {
      component = shallow(<CalculatorKeyPad />)
    })

    test('snapshot test', () => {
      expect(component).toMatchSnapshot()
    })

    test('Check for values selected', () => {
      component.find('[data-test-id="key-1"]').last().simulate('click')
      expect(component.state().numSelected).toBe('1')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      expect(component.state().numSelected).toBe('')
      component.find('[data-test-id="key-2"]').last().simulate('click')
      expect(component.state().numSelected).toBe('2')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-3"]').last().simulate('click')
      expect(component.state().numSelected).toBe('3')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-4"]').last().simulate('click')
      expect(component.state().numSelected).toBe('4')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-5"]').last().simulate('click')
      expect(component.state().numSelected).toBe('5')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-6"]').last().simulate('click')
      expect(component.state().numSelected).toBe('6')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-7"]').last().simulate('click')
      expect(component.state().numSelected).toBe('7')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-8"]').last().simulate('click')
      expect(component.state().numSelected).toBe('8')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-9"]').last().simulate('click')
      expect(component.state().numSelected).toBe('9')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-0"]').last().simulate('click')
      expect(component.state().numSelected).toBe('0')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-+"]').last().simulate('click')
      expect(component.state().numSelected).toBe('+')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key--"]').last().simulate('click')
      expect(component.state().numSelected).toBe('-')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-*"]').last().simulate('click')
      expect(component.state().numSelected).toBe('*')
      component.find('[data-test-id="key-D"]').last().simulate('click')
      component.find('[data-test-id="key-/"]').last().simulate('click')
      expect(component.state().numSelected).toBe('/')
    })

    test('Check for Addition', () => {
      component.find('[data-test-id="key-1"]').last().simulate('click')
      component.find('[data-test-id="key-+"]').last().simulate('click')
      component.find('[data-test-id="key-2"]').last().simulate('click')
      component.find('[data-test-id="key-="]').last().simulate('click')
      expect(component.state().numSelected).toBe(3)
    })

    test('handle keyboard event', () => {
      component.instance().handleKeyboardEvent({ key: 1 })
      component.instance().handleKeyboardEvent({ key: 3 })
      expect(component.state().numSelected).toBe('13')
      component.instance().handleKeyboardEvent({ key: 'Del' })
      expect(component.state().numSelected).toBe('')
    })
  })
})
