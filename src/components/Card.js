import React, { useState } from 'react'
import styled from 'styled-components'
const Card = () => {
  const [slideState, setSlideState] = useState({
    slide_1: true,
    slide_2: false,
    slide_3: false,
  })

  const nextSlide = () => {
    if (slideState.slide_3) {
      setSlideState({ ...slideState, slide_3: false, slide_1: true })
    } else if (slideState.slide_1) {
      setSlideState({ ...slideState, slide_1: false, slide_2: true })
    } else {
      setSlideState({ ...slideState, slide_2: false, slide_3: true })
    }
  }

  const prevSlide = () => {
    if (slideState.slide_3) {
      setSlideState({ ...slideState, slide_3: false, slide_2: true })
    } else if (slideState.slide_1) {
      setSlideState({ ...slideState, slide_1: false, slide_3: true })
    } else {
      setSlideState({ ...slideState, slide_2: false, slide_1: true })
    }
  }

  return (
    <SlideContainer>
      <SlideOne op={slideState.slide_1}>
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </SlideOne>
      <SlideTwo op={slideState.slide_2}>
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </SlideTwo>
      <SlideThree op={slideState.slide_3}>
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </SlideThree>
      <SlideIndicator>
        <Circle op={slideState.slide_1} />
        <Circle op={slideState.slide_2} />
        <Circle op={slideState.slide_3} />
      </SlideIndicator>
    </SlideContainer>
  )
}

export default Card

const SlideIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  display: flex;
`
const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: hotpink;
  margin: 20px;
  opacity: ${(props) => (props.op ? 1 : 0.2)};
  transition: all 1s ease;
`

const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const SlideOne = styled.div`
  height: 100%;
  width: 100%;
  background-color: darkviolet;
  opacity: ${(props) => (props.op ? 1 : 0)};
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
  }
  z-index: ${(props) => (props.op ? 10 : 0)};
  transform: translateX(${(props) => (props.op ? 0 : '-100%')});
`
const SlideTwo = styled.div`
  height: 100%;
  width: 100%;
  background-color: dodgerblue;
  opacity: ${(props) => (props.op ? 1 : 0)};
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
  }
  z-index: ${(props) => (props.op ? 10 : 0)};
  transform: translateY(${(props) => (props.op ? 0 : '-100%')});
`
const SlideThree = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
  opacity: ${(props) => (props.op ? 1 : 0)};
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
  }
  z-index: ${(props) => (props.op ? 10 : 0)};
  transform: translateX(${(props) => (props.op ? 0 : '100%')});
`
