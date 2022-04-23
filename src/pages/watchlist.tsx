import { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'
import { v4 } from 'uuid'
import { useAppSelector } from 'app/hooks'
import { currentWatchlist } from 'reducers/watchlist'
import FilmCard from 'components/FilmCard/FilmCard'

const Watchlist: NextPage = () => {
  const watchlist = useAppSelector(currentWatchlist)

  if (watchlist && watchlist.length > 0) {
    return (
      <>
        <Title>Буду смотреть</Title>
        <Container>
          {watchlist.map((film) => (
            <FilmCard key={v4()} {...film} />
          ))}
        </Container>
      </>
    )
  }

  return <WatchlistNotFound />
}

export default Watchlist

const WatchlistNotFound = () => {
  return (
    <ContainerNotFound>
      <FilmsToWatch />
      <p>
        Сохраняйте интересные фильмы и сериалы, чтобы не потерять — они появятся
        в этом разделе
      </p>
      <Link href="/" passHref>
        <LinkToHome>Перейти на главную</LinkToHome>
      </Link>
    </ContainerNotFound>
  )
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

const ContainerNotFound = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  font-size: 32px;
  line-height: 160%;
  color: ${(props) => props.theme.colors.gray5};
`

const FilmsToWatch = styled.div`
  margin: 0 auto;
  width: min-content;
  filter: opacity(0.7);

  ::before {
    display: block;
    width: 100px;
    height: 100px;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M19.95 4.166c-10.645 0-12.443 1.553-12.443 14.048 0 13.989-.262 17.619 2.398 17.619 2.659 0 7-6.14 10.045-6.14s7.387 6.14 10.045 6.14c2.66 0 2.399-3.63 2.399-17.619 0-12.495-1.799-14.048-12.444-14.048Z' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: contain;
  }
`

const LinkToHome = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 22px;
  padding: 30px;
  color: ${(props) => props.theme.colors.brand};
  border-radius: ${(props) => props.theme.border.base};
  border: 2px solid ${(props) => props.theme.colors.brand};
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.brand};
  }

  &:active {
    transform: scale(0.98);
  }
`
