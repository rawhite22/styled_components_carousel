import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Deck = () => {
  return (
    <DeckContainer>
      <Card />
    </DeckContainer>
  )
}

export default Deck

const DeckContainer = styled.div`
  background-color: darkviolet;
  height: 500px;
  width: 700px;
  overflow: hidden;
`
