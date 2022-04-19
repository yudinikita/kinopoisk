import { filmsListCard } from 'mocks/lists/filmsList'
import { FilmsListParams } from 'api/films'

const arrayShuffle = (array: any[]) => array.sort(() => Math.random() - 0.5)

export const getFilms = (params: FilmsListParams) => {
  const count = Number(params?.count) || 10

  const films = filmsListCard.slice(0, count)

  switch (params?.type) {
    case 'ticket':
      return films
    case 'watch_now':
      return films.reverse()
    case 'recommendation':
      return arrayShuffle(films)
    default:
      return films
  }
}
