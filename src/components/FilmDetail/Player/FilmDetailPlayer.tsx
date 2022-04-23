import React from 'react'
import styled from 'styled-components'
import FilmPlayer from 'components/FilmPlayer/FilmPlayer'

interface FilmDetailPlayerProps {
  videoSrc?: string
  filmId?: string
}

export default function FilmDetailPlayer({ videoSrc }: FilmDetailPlayerProps) {
  if (!videoSrc) return null

  return (
    <Container id="filmPlayer">
      <FilmPlayer url={videoSrc} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  min-height: 100%;
  height: auto;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`
