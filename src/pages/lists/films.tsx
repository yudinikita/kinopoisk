import { NextPage } from 'next'
import styled from 'styled-components'
import { v4 } from 'uuid'
import FilmCard, { FilmCardProps } from 'components/FilmCard/FilmCard'
import { loadFilms } from 'api/films'

interface FilmsProps {
  films?: FilmCardProps[]
}

const Films: NextPage = ({ films }: FilmsProps) => {
  if (films && films.length > 0) {
    return (
      <>
        <Title>Фильмы</Title>
        <Container>
          {films.map((film) => (
            <FilmCard key={v4()} {...film} />
          ))}
        </Container>
      </>
    )
  }

  return <p>Фильмов не найдено</p>
}

export default Films

export async function getStaticProps() {
  const films = await loadFilms({ type: 'recommendation' })

  return {
    props: {
      films,
    },
  }
}

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  padding-bottom: 50px;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 44px;
`
