import React from 'react'
import styled from 'styled-components'

export default function PromoSlider() {
  return (
    <Container>
      <Video autoPlay loop muted poster="static/images/trailer-poster.jpg">
        <source src="/static/videos/promo-trailer.mp4" />
      </Video>
    </Container>
  )
}

const Container = styled.div`
  height: 680px;
  display: flex;
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
