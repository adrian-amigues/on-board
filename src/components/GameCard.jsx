import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  width: 560px;
  justify-content: flex-start;
  /* align-items: center; */
  margin-bottom: 40px;
  box-shadow: 3px 3px 15px 0px #0009;
`

const ImageContainer = styled.div`
  width: 200px;
  margin-right: 10px;
`

const Image = styled.img`
  object-fit: contain;
  display: block;
  margin: auto;
`

const TextContainer = styled.div`
  font-family: 'Baloo Thambi 2';
`

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const GameCard = ({ id, name, image, description }) => {
  console.log('GameCard -> name', name)
  return (
    <Card>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <span>{name}</span>
        <Description>
          {/* <p> */}
          {description}
          {/* </p> */}
        </Description>
      </TextContainer>
    </Card>
  )
}

export default GameCard
