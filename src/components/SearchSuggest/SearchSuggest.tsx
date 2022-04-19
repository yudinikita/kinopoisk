import { v4 } from 'uuid'
import styled from 'styled-components'
import FilmCard, { FilmCardProps } from 'components/FilmCard/FilmCard'

interface SearchSuggestProps {
  films?: FilmCardProps[]
}

export default function SearchSuggest({ films = [] }: SearchSuggestProps) {
  return (
    <Container>
      <ContentContainer>{renderFilms(films)}</ContentContainer>
    </Container>
  )
}

const renderFilms = (films?: FilmCardProps[]) =>
  films && films?.length !== 0 ? (
    films.map((film) => <FilmCard {...film} key={v4()} />)
  ) : (
    <NotFound>По вашему запросу ничего не найдено</NotFound>
  )

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 15;
  overflow: hidden;
`

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  row-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  top: 270px;
  left: 0;
  margin: 0 auto;
  padding: 20px 70px 400px 70px;
  width: ${(props) => props.theme.space.xxl};
  background-color: transparent;
  overflow: hidden;
`

const NotFound = styled.p`
  text-align: center;
  width: 100%;
  font-size: 24px;
  grid-column: 1 / 5;
`
