import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import { v4 } from 'uuid'
import FilmCard, { FilmCardProps } from 'components/FilmCard/FilmCard'
import { PrevButton, NextButton } from './FilmCarouselButton'

export interface FilmCarouselProps {
  slides: FilmCardProps[]
}

export default function FilmCarousel({ slides = [] }: FilmCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  const renderSlides = () =>
    slides.map((film) => (
      <Slide key={v4()}>
        <FilmCard {...film} />
      </Slide>
    ))

  return (
    <Carousel>
      <Viewport ref={viewportRef}>
        <Container>{renderSlides()}</Container>
      </Viewport>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Carousel>
  )
}

const Carousel = styled.div`
  position: relative;
`

const Viewport = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  margin-left: -10px;
`

const Slide = styled.div`
  position: relative;
  flex: 0 0 20%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;

  @media (max-width: ${(props) => props.theme.space.xxl}) {
    flex: 0 0 25%;
  }

  @media (max-width: ${(props) => props.theme.space.xl}) {
    flex: 0 0 25%;
  }

  @media (max-width: ${(props) => props.theme.space.lg}) {
    flex: 0 0 33.3333%;
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    flex: 0 0 0;
  }
`
