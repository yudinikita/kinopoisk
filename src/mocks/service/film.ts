import { FilmDetailResponse } from 'mocks/types'
import { filmsDetailList } from 'mocks/lists/filmsDetailList'

export const getFilmDetail = (filmId?: string | null): FilmDetailResponse => {
  if (!filmId) {
    return {
      success: false,
      message: 'Укажите корректный id.',
    }
  }

  const film = filmsDetailList.find((film) => film.id === filmId)

  if (film) {
    return {
      success: true,
      message: '',
      data: film,
    }
  }

  return {
    success: false,
    message: 'Фильм не найден.',
  }
}
