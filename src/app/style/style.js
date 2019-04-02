import styled, { createGlobalStyle } from 'styled-components'

import styleVars from './global'

export const SectionContainer = styled.div` 
  /* min-height: 480px; */
  max-width: fit-content;
  border: 1px solid ${styleVars.color.stoneExtraLight};
  border-radius: 3px;
  padding: 8px;
  margin: 0;

  @media screen and (min-width: 480px) {
    padding: 24px;
    margin: 24px;
  }

  @media screen and (min-width: 720px) {
    padding: 32px;
    margin: 32px;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;

    input,
    textarea,
    select,
    button {
      font-size: 16px;
    }
  }
`
