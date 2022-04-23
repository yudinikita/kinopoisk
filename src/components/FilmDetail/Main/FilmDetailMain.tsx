import styled from 'styled-components'
import FilmDetailButtons from 'components/FilmDetail/Main/FilmDetailButtons'
import FilmDetailTable from 'components/FilmDetail/Main/FilmDetailTable'
import FilmDetailRating from 'components/FilmDetail/Main/FilmDetailRating'
import FilmDetailActors from 'components/FilmDetail/Main/FilmDetailActors'
import FilmDetailTabs from 'components/FilmDetail/Main/FilmDetailTabs'
import FilmDetailHeader from './FilmDetailHeader'
import type { FilmDetailType } from 'mocks/types'

interface FilmDetailMainProps {
  film?: FilmDetailType
}

export default function FilmDetailMain({ film }: FilmDetailMainProps) {
  return (
    <Container>
      <Column>
        <FilmDetailHeader
          title={film?.nameRu}
          originalTitle={film?.nameOriginal}
          ratingAgeLimits={film?.ratingAgeLimits}
        />
        <FilmDetailButtons filmId={film?.id} videoSrc={film?.videoPlayerUrl} />
        <FilmDetailTable table={film?.tableAboutFilm} />
      </Column>
      <Column>
        <FilmDetailRating
          rating={film?.ratingKinopoisk}
          count={film?.ratingKinopoiskVoteCount}
        />
        <FilmDetailActors actors={film?.actors} />
        <FilmDetailTabs />
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`
