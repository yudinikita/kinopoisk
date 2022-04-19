import { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'

const Watchlist: NextPage = () => {
  return (
    <Container>
      <FilmsToWatch />
      <p>
        Сохраняйте интересные фильмы и сериалы, чтобы не потерять — они появятся
        в этом разделе
      </p>
      <Link href="/" passHref>
        <LinkToHome>Перейти на главную</LinkToHome>
      </Link>
    </Container>
  )
}

export default Watchlist

const Container = styled.div`
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
    background-image: url('/static/icons/bookmark.svg');
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
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.brand};
  }
`
