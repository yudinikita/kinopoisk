import styled from 'styled-components'
import FilmCarousel, { FilmCarouselProps } from './FilmCarousel'

interface FilmCarouselSectionProps extends FilmCarouselProps {
  title?: string
}

export default function FilmCarouselSection({
  title = '',
  slides = [],
}: FilmCarouselSectionProps) {
  return (
    <Section>
      <Title>{title}</Title>
      <FilmCarousel slides={slides} />
    </Section>
  )
}

const Section = styled.section`
  margin-top: 60px;
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 44px;
`
