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

  @media (max-width: ${(props) => props.theme.space.xl}) {
    justify-content: space-between;
  }

  @media (max-width: ${(props) => props.theme.space.lg}) {
    flex-direction: column;
  }
`

const Sidebar = styled.div`
  min-width: 320px;

  @media (max-width: ${(props) => props.theme.space.lg}) {
    order: 1;
  }
`

const Delimiter = styled.div`
  flex: 0 0 30px;
  width: 30px;

  @media (max-width: ${(props) => props.theme.space.lg}) {
    display: none;
  }
`

const Main = styled.div`
  @media (max-width: ${(props) => props.theme.space.lg}) {
    order: 0;
  }
`

const Additional = styled.div``

const Player = styled.div``

const Similar = styled.div``
