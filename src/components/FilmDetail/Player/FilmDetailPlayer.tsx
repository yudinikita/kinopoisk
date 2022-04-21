import React from 'react'
import styled from 'styled-components'

interface FilmDetailPlayerProps {
  videoSrc?: string
}

export default function FilmDetailPlayer({ videoSrc }: FilmDetailPlayerProps) {
  if (!videoSrc) return null

  return (
    <Container id="filmPlayer">
      <Video>
        <source src={videoSrc} />
      </Video>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  height: 680px;
  border-radius: 15px;
  overflow: hidden;
`

const Video = styled.video`
  top: -2px;
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`
