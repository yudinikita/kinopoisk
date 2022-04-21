import styled from 'styled-components'
import FilmTrailer from './FilmTrailer'
import WatchLaterBtn from './WatchLaterBtn'
import FilmPoster from './FilmPoster'

export default function FilmDetailSidebar() {
  return (
    <Container>
      <Wrapper>
        <FilmPoster />
        <FilmTrailer />
        <WatchLaterBtn />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  padding: 0 10px;
`
