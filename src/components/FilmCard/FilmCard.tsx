import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export interface FilmCardProps {
  linkPath?: string
  posterSrc?: string
  title?: string
  year?: number | string
  genre?: string
  rating?: number | string
}

export default function FilmCard({
  linkPath = '',
  posterSrc,
  title,
  year,
  genre,
  rating = 0,
}: FilmCardProps) {
  const renderCaptions = () =>
    year && genre ? (
      <Link href={linkPath} passHref>
        <Captions>
          <Title>{title}</Title>
          <Subtitle>
            {year}, {genre}
          </Subtitle>
        </Captions>
      </Link>
    ) : null

  return (
    <Container>
      <PosterWrapper>
        <Link href={linkPath}>
          <a>{renderPoster(posterSrc)}</a>
        </Link>
        <Overlay>
          <Rating>{rating}</Rating>
          <AddBtn>
            <svg
              width="8"
              height="8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" d="M3 0h2v8H3z" />
              <path fill="#fff" d="M8 3v2H0V3z" />
            </svg>
          </AddBtn>
        </Overlay>
      </PosterWrapper>
      {renderCaptions()}
    </Container>
  )
}

const renderPoster = (posterSrc?: string) =>
  posterSrc ? (
    <Poster src={posterSrc} width={230} height={350} />
  ) : (
    <PosterNotFound />
  )

const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 15px;
`

const Poster = styled(Image)`
  width: 100%;
  height: 350px;
  transition: transform 0.3s ease-in-out;
`

const PosterNotFound = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray5};
  opacity: 0.3;
`

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Container = styled.div`
  width: 235px;
  min-width: 235px;

  &:hover ${Poster} {
    transform: scale(1.3);
  }

  &:hover ${Title} {
    color: ${(props) => props.theme.colors.brand};
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const Rating = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  padding: 9px 12px;
  border-radius: 10px;
  background-color: #65b634;
  pointer-events: all;
`

const AddBtn = styled.button`
  display: flex;
  padding: 15px;
  border: none;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.brand};
  cursor: pointer;
  pointer-events: all;

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Captions = styled.a`
  padding: 0 10px;
  margin-top: 20px;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  row-gap: 10px;
`

const Subtitle = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray5};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
