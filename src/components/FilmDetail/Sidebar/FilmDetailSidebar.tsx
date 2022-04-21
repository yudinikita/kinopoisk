import styled from 'styled-components'
import FilmTrailer from './FilmTrailer'
import WatchLaterBtn from './WatchLaterBtn'
import FilmPoster from './FilmPoster'
import { FilmDetailType } from 'mocks/types'

interface FilmDetailMainProps {
  film?: FilmDetailType
}

export default function FilmDetailSidebar({ film }: FilmDetailMainProps) {
  return (
    <Container>
      <Wrapper>
        <FilmPoster posterUrl={film?.posterUrl} filmTitle={film?.nameRu} />
        <FilmTrailer
          filmTitle={film?.nameRu}
          trailerCoverUrl={film?.trailerCoverUrl}
          trailerLength={film?.trailerLength}
          trailerDate={film?.trailerDate}
        />
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
