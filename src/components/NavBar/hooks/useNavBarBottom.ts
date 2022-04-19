import React, { useEffect, useState } from 'react'
import { FilmCardProps } from 'components/FilmCard/FilmCard'
import { useDebounce } from 'use-debounce'
import { loadFilms } from 'api/films'

export default function useNavBarBottom() {
  const [foundFilms, setFoundFilms] = useState<FilmCardProps[]>([])
  const [suggest, setSuggest] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [value] = useDebounce(searchValue, 150)

  const handleSuggest: React.MouseEventHandler<HTMLInputElement> = () => {
    setSuggest(true)
  }

  const handleCloseSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSuggest(false)
  }

  const handleChangeSearchValue: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    const value = e.target.value
    setSearchValue(value)
  }

  useEffect(() => {
    ;(async () => {
      const loadedFilms = await loadFilms({ count: '10', filter: value })
      setFoundFilms(loadedFilms)
    })()
  }, [value])

  return {
    foundFilms,
    suggest,
    handleSuggest,
    handleCloseSearch,
    handleChangeSearchValue,
  }
}
