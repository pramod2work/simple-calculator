import styled, { css } from 'styled-components'

import styleVars from '../../style/global'

export const KeypadRow = styled.div`
  margin-bottom: ${props => (props.isLast ? '0' : '16px')};
`

export const InlineDiv = styled.div`
  display: inline-block;
`

export const BlankKeypad = styled(InlineDiv)`
  width: 60px;
  padding-top: 16px;
  padding-bottom: 13px;
  text-align: center;
  margin-right: ${props => (props.isLast ? '0' : '24px')};
`

const KeypadButtonFocusStyle = css`
  background-color: ${styleVars.color.stoneLight};
  outline: none;
`

export const KeypadButton = styled.button.attrs({
  type: 'button',
  'aria-label': props => (props.isDelete ? 'Delete' : '')
})`
  width: 60px;
  padding: 22px 0 19px;
  text-align: center;
  display: inline-block;
  border: 1px solid ${styleVars.color.stoneExtraLight};
  border-radius: 50%;
  background-color: ${styleVars.color.white};
  line-height: 1;
  margin-right: ${props => (props.isLast ? '0' : '24px')};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &:hover {
    ${KeypadButtonFocusStyle}
  }
`

export const InputDisplay = styled.div`
  input {
    display: block;
    margin-bottom: 16px;
    width: 95%;
    text-align: right;
    padding: 4px;
    font-size: 18px;
  }
`
