import styled from 'styled-components'
import FilmDetailTrailer from 'components/FilmDetail/Sidebar/FilmDetailTrailer'
import FilmDetailPoster from 'components/FilmDetail/Sidebar/FilmDetailPoster'
import { FilmDetailType } from 'mocks/types'
import WatchLaterBtn from './WatchLaterBtn'

interface FilmDetailMainProps {
  film?: FilmDetailType
}

export default function FilmDetailSidebar({ film }: FilmDetailMainProps) {
  return (
    <Container>
      <Wrapper>
        <FilmDetailPoster
          posterUrl={film?.posterUrl}
          filmTitle={film?.nameRu}
        />
        <FilmDetailTrailer
          filmTitle={film?.nameRu}
          trailerCoverUrl={film?.trailerCoverUrl}
          trailerLength={film?.trailerLength}
          trailerDate={film?.trailerDate}
        />
        <WatchLaterBtn filmId={film?.id} />
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
