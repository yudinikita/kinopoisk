import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const nowYear = new Date().getFullYear()

export default function Footer() {
  return (
    <Container>
      <Name>
        © 2003 — {nowYear}
        {', '}
        <Link href="/">
          <a>Кинопоиск</a>
        </Link>
      </Name>
      <LinksGroup>
        <Link href="/terms">
          <a>Соглашение</a>
        </Link>
        <Link href="/privacy">
          <a>Конфиденциальность</a>
        </Link>
        <Link href="/contacts">
          <a>Обратная связь</a>
        </Link>
      </LinksGroup>
      <AuthorGroup>
        Проект{' '}
        <Link href="mailto:nikitayudin782@gmail.com">
          <a>Юдина Никиты</a>
        </Link>
      </AuthorGroup>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template: '. . .';
  justify-content: space-between;
  margin: 0 auto;
  padding: 100px 0 50px;
  color: ${(props) => props.theme.colors.gray3};
  line-height: 180%;

  @media (max-width: ${(props) => props.theme.space.xl}) {
    grid-template: '.';
    row-gap: 40px;
    justify-content: center;
    text-align: center;
  }
`

const Name = styled.p`
  margin: 0;
  font-size: 20px;
`

const LinksGroup = styled.div`
  display: grid;
  grid-template: '. . .';
  grid-column-gap: 25px;
  margin: 0;
  font-size: 20px;

  @media (max-width: ${(props) => props.theme.space.md}) {
    grid-template: '.';
    row-gap: 40px;
    justify-content: center;
    text-align: center;
  }
`

const AuthorGroup = styled.div`
  margin: 0;
  font-size: 20px;

  a {
    font-weight: 500;
  }
`
