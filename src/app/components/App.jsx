import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import ViewCalculator from './ViewCalculator'
import store from '../store'

import { SectionContainer, GlobalStyle } from '../style/style'

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <SectionContainer>
        <Route path='/' exact component={ViewCalculator} />
      </SectionContainer>
    </Router>
  </Provider>
)

export default hot(module)(Root)
