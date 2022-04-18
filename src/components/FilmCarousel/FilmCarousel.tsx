import React, { useCallback, useEffect, useState } from 'react'
import FilmCard, { FilmCardProps } from 'components/FilmCard/FilmCard'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { PrevButton, NextButton } from './FilmCarouselButton'

export interface FilmCarouselProps {
  slides: FilmCardProps[]
}

export default function FilmCarousel({ slides }: FilmCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true })
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
        <Container>
          {renderSlides()}
          <Slide>
            <FilmCard />
          </Slide>
        </Container>
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
`

const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
`
