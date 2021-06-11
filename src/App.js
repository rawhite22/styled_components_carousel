import React from 'react'
import styled from 'styled-components'
import Deck from './components/Deck'

function App() {
  return (
    <AppContainer>
      <Deck />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
