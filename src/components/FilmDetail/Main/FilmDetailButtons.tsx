import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'
import { useFilmWatchlist } from 'hooks/useFilmWatchlist'

interface FilmDetailButtonsProps {
  videoSrc?: string
  filmId?: string
}

export default function FilmDetailButtons({
  videoSrc,
  filmId = '',
}: FilmDetailButtonsProps) {
  const {
    deleteWatchlistBtn,
    handleDeleteWatchlistBtn,
    handleAddWatchlistBtn,
  } = useFilmWatchlist(filmId)

  const renderWatchBtn = () =>
    videoSrc ? (
      <Link href="#filmPlayer" passHref>
        <WatchNowBtn>
          <IconWatchNow
            width="20"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.113.5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.391-1.69 4.06-4.113 4.06H4.113C1.691 15.5 0 13.831 0 11.44V4.56C0 2.17 1.691.5 4.113.5Zm13.845 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675c0 .5-.25.957-.669 1.22a1.385 1.385 0 0 1-1.374.063l-1.481-.748a1.623 1.623 0 0 1-.888-1.457V5.083c0-.621.34-1.18.888-1.456l1.482-.748Z"
              fill="#fff"
            />
          </IconWatchNow>
          Смотреть онлайн
        </WatchNowBtn>
      </Link>
    ) : null

  const renderWatchlistBtn = () =>
    deleteWatchlistBtn ? (
      <WatchLaterBtn onClick={handleDeleteWatchlistBtn}>
        <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.07 2H8.9C6.2 2 4 3.07 4 5.79v15.18c0 .56.45 1.02 1.01 1.02.17 0 .341-.051.49-.13l6.49-3.24 6.48 3.24c.24.14.53.18.79.1.27-.08.49-.26.62-.5.08-.15.12-.32.12-.49V5.79C19.97 3.07 17.78 2 15.07 2"
            fill="#f60"
          />
        </svg>
      </WatchLaterBtn>
    ) : (
      <WatchLaterBtn onClick={handleAddWatchlistBtn}>
        <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.07 2H8.9C6.2 2 4 3.07 4 5.79v15.18c0 .56.45 1.02 1.01 1.02.17 0 .341-.051.49-.13l6.49-3.24 6.48 3.24c.24.14.53.18.79.1.27-.08.49-.26.62-.5.08-.15.12-.32.12-.49V5.79C19.97 3.07 17.78 2 15.07 2"
            fill="#000"
          />
        </svg>
      </WatchLaterBtn>
    )

  return (
    <Container>
      {renderWatchBtn()} {renderWatchlistBtn()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  padding: 0 10px;
`

const IconWatchNow = styled.svg`
  margin-right: 10px;
`

const WatchNowBtn = styled.a`
  display: flex;
  margin: 0;
  margin-right: 15px;
  padding: 12px 25px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: ${(props) => props.theme.border.base};
  color: white;
  background-color: ${(props) => props.theme.colors.brand};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #e95000;
  }

  &:active {
    transform: scale(0.95);
  }
`

const WatchLaterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.gray5};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray6};
  }

  &:active {
    transform: scale(0.95);
  }
`
