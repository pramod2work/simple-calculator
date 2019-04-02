import React, { Component } from 'react'

import {
  KeypadRow,
  KeypadButton,
  BlankKeypad,
  InlineDiv,
  InputDisplay
} from './styles'
import { keypadSequence } from './keypad-logic'
import { MATH_OPERATIONS } from '../../constants/global'
import { calculateLogic } from './math-logic'

class CalculatorKeyPad extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this)
    this.state = {
      numSelected: ''
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyboardEvent)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyboardEvent)
  }

  handleClick (keyValue) {
    let { numSelected } = this.state
    if (keyValue === MATH_OPERATIONS.DISPLAY) {
      numSelected = calculateLogic(numSelected)
    } else if (keyValue === 'D') {
      numSelected = ''
    } else {
      numSelected = `${numSelected}${keyValue}`
    }

    this.setState({ numSelected })
  }

  handleKeyboardEvent (event) {
    const keyValue = event.key
    const deleteKey = keyValue === 'Backspace' || keyValue === 'Del'
    if (!Number.isNaN(Number(keyValue)) || deleteKey) {
      const keypadValue = deleteKey ? 'D' : keyValue
      this.handleClick(keypadValue)
      if (document.querySelector(`[data-test-id="key-${keypadValue}"]`)) {
        document.querySelector(`[data-test-id="key-${keypadValue}"]`).focus()
        window.setTimeout(() => {
          document.querySelector(`[data-test-id="key-${keypadValue}"]`).blur()
        }, 200)
      }
    }
  }

  render () {
    const { numSelected } = this.state
    return (
      <div>
        <InputDisplay data-test-id='display-section'>
          <input
            type='text'
            name='calculatorField'
            id='calculator-field'
            value={numSelected}
            disabled
            aria-label='calculator operation output, select value and operation from below keypad section'
          />
        </InputDisplay>

        {
          keypadSequence.map((keypadObj, index) => (
            <KeypadRow key={keypadObj.keyId} isLast={index === keypadSequence.length - 1} data-test-id={`keypad-row-${index}`}>
              {
                keypadObj.keys.map((keySequence, indexKey) => (
                  <InlineDiv key={keySequence.keyId}>
                    {
                      keySequence.blank
                        ? <BlankKeypad isLast={indexKey === keypadObj.keys.length - 1} data-test-id='key-blank' />
                        : (
                          <KeypadButton
                            onClick={() => this.handleClick(keySequence.delete ? 'D' : keySequence.value)}
                            isDelete={keySequence.delete}
                            isLast={indexKey === keypadObj.keys.length - 1}
                            data-test-id={`key-${keySequence.displayName}`}
                          >
                            <span>
                              {
                                keySequence.delete ? 'AC' : keySequence.displayName
                              }
                            </span>
                          </KeypadButton>
                        )
                    }
                  </InlineDiv>
                ))
              }
            </KeypadRow>
          ))
        }
      </div>
    )
  }
}

export default CalculatorKeyPad
