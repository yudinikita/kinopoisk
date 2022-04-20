import {
  addFilmToWatchlist,
  currentWatchlist,
  removeFilmFromWatchlist,
} from 'reducers/watchlist'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { FilmCardProps } from 'components/FilmCard/FilmCard'

export const useFilmCard = (id: Pick<FilmCardProps, 'id'>) => {
  const [deleteWatchlistBtn, setDeleteWatchlistBtn] = useState(false)

  const dispatch = useAppDispatch()
  const watchlist = useAppSelector(currentWatchlist)

  useEffect(() => {
    if (watchlist) {
      const storedWatchlist = watchlist.find((film) => film.id === id)
      setDeleteWatchlistBtn(!!storedWatchlist)
    }
  }, [watchlist])

  const handleAddWatchlistBtn = () => dispatch(addFilmToWatchlist(id))
  const handleDeleteWatchlistBtn = () => dispatch(removeFilmFromWatchlist(id))

  return {
    deleteWatchlistBtn,
    handleAddWatchlistBtn,
    handleDeleteWatchlistBtn,
  }
}
