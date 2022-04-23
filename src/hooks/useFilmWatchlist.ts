import { useEffect, useState } from 'react'
import {
  addFilmToWatchlist,
  currentWatchlist,
  removeFilmFromWatchlist,
} from 'reducers/watchlist'
import { useAppDispatch, useAppSelector } from 'app/hooks'

export const useFilmWatchlist = (id: string) => {
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
