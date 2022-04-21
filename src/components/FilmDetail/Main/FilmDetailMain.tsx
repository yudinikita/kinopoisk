import styled from 'styled-components'
import FilmDetailHeader from './FilmDetailHeader'
import FilmDetailButtons from 'components/FilmDetail/Main/FilmDetailButtons'
import FilmDetailTable from 'components/FilmDetail/Main/FilmDetailTable'
import FilmDetailRating from 'components/FilmDetail/Main/FilmDetailRating'
import FilmDetailActors from 'components/FilmDetail/Main/FilmDetailActors'
import FilmDetailTabs from 'components/FilmDetail/Main/FilmDetailTabs'

export default function FilmDetailMain() {
  return (
    <Container>
      <Column>
        <FilmDetailHeader />
        <FilmDetailButtons />
        <FilmDetailTable />
      </Column>
      <Column>
        <FilmDetailRating />
        <FilmDetailActors />
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
