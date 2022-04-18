import React from 'react'
import Head from 'next/head'
import NavBar from 'components/NavBar/NavBar'
import styled from 'styled-components'

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
          data-tid="57f72b5"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/static/fonts/Inter/Inter-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/Inter/Inter-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/Inter/Inter-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/Inter/Inter-SemiBold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/Inter/Inter-ExtraBold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header>
        <NavBar />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

const Header = styled.header`
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;
  max-width: ${(props) => props.theme.space.xxl};
`

const Main = styled.main`
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;
  max-width: ${(props) => props.theme.space.xxl};
`
