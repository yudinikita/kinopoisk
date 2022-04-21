import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

interface FilmLayoutProps {
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
  main?: React.ReactNode
  sidebar?: React.ReactNode
  additional?: React.ReactNode
  player?: React.ReactNode
  similar?: React.ReactNode
}

export default function FilmLayout({
  meta,
  main,
  sidebar,
  additional,
  player,
  similar,
}: FilmLayoutProps) {
  return (
    <>
      <Head>
        <title>{meta?.title ?? 'Кинопоиск'}</title>
        <meta name="description" content={meta?.description ?? ''} />
        <meta name="keywords" content={meta?.keywords ?? ''} />
      </Head>

      <Container>
        <ContainerMain>
          <Sidebar>{sidebar}</Sidebar>
          <Delimiter />
          <Main>{main}</Main>
        </ContainerMain>
        <Additional>{additional}</Additional>
        <Player>{player}</Player>
        <Similar>{similar}</Similar>
      </Container>
    </>
  )
}

const Container = styled.div``

const ContainerMain = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: 320px;
`

const Delimiter = styled.div`
  flex: 0 0 30px;
  width: 30px;
`

const Main = styled.div``

const Additional = styled.div``

const Player = styled.div``

const Similar = styled.div``
