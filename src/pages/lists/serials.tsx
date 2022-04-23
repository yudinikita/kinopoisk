import { NextPage } from 'next'
import styled from 'styled-components'
import { v4 } from 'uuid'
import FilmCard, { FilmCardProps } from 'components/FilmCard/FilmCard'
import { loadFilms } from 'api/films'

interface FilmsProps {
  serials?: FilmCardProps[]
}

const Serials: NextPage = ({ serials }: FilmsProps) => {
  if (serials && serials.length > 0) {
    return (
      <>
        <Title>Сериалы</Title>
        <Container>
          {serials.map((serial) => (
            <FilmCard key={v4()} {...serial} />
          ))}
        </Container>
      </>
    )
  }

  return <p>Сериалов не найдено</p>
}

export default Serials

export async function getStaticProps() {
  const serials = await loadFilms({ type: 'recommendation' })

  return {
    props: {
      serials,
    },
  }
}

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  padding-bottom: 50px;

  @media (max-width: ${(props) => props.theme.space.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.space.md}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${(props) => props.theme.space.sm}) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 44px;

  @media (max-width: ${(props) => props.theme.space.md}) {
    font-size: 28px;
  }
`
