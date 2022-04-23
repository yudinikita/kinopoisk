import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import NavBar from 'components/NavBar/NavBar'
import FooterComponent from 'components/Footer/Footer'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Кинопоиск. Все фильмы планеты.</title>
        <meta
          name="description"
          content="Поиск фильмов, новости кино, отзывы пользователей, афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое."
        />
        <meta
          name="keywords"
          content="фильм фильмы поиск кино обои афиша новости обзоры сегодня в кино скоро кассовые сборы кинотеатры актер актеры актриса режиссер сценарист фото фотография постер"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <NavBar />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterComponent />
      </Footer>
    </>
  )
}

const commonStyles = css`
  background-color: ${(props) => props.theme.colors.bg};
  margin: 0 auto;
  padding: 0 70px;
  max-width: ${(props) => props.theme.space.xxl};

  @media (max-width: ${(props) => props.theme.space.md}) {
    padding: 0 30px;
  }

  @media (max-width: ${(props) => props.theme.space.xs}) {
    padding: 0 15px;
  }
`

const Header = styled.header`
  ${commonStyles} {
  }
`

const Main = styled.main`
  ${commonStyles} {
  }
`

const Footer = styled.footer`
  ${commonStyles} {
  }
`
