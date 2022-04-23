import styled from 'styled-components'
import { useFilmWatchlist } from 'hooks/useFilmWatchlist'

interface WatchLaterBtn {
  filmId?: string
}

export default function WatchLaterBtn({ filmId = '' }: WatchLaterBtn) {
  const {
    deleteWatchlistBtn,
    handleDeleteWatchlistBtn,
    handleAddWatchlistBtn,
  } = useFilmWatchlist(filmId)

  const renderWatchLaterBtn = () =>
    deleteWatchlistBtn ? (
      <WatchLater onClick={handleDeleteWatchlistBtn}>
        Не буду смотреть
      </WatchLater>
    ) : (
      <WatchLater onClick={handleAddWatchlistBtn}>Буду смотреть</WatchLater>
    )

  return renderWatchLaterBtn()
}

const WatchLater = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-weight: 400;
  font-size: 16px;
  border: 0;
  border-radius: ${(props) => props.theme.border.base};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray5};

  &:active {
    transform: scale(0.95);
  }
`
