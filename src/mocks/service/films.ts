import { filmsListCard } from 'mocks/lists/filmsList'
import { FilmsListParams } from 'api/films'
import { FilmCardProps } from 'components/FilmCard/FilmCard'

const arrayShuffle = (array: any[]) => array.sort(() => Math.random() - 0.5)

export const getFilms = (params: FilmsListParams): FilmCardProps[] => {
  let result = [] as FilmCardProps[]

  const count = Number(params?.count) || 10
  const filter = params?.filter

  const films = filmsListCard.slice(0, count)

  switch (params?.type) {
    case 'ticket':
      result = films
      break
    case 'watch_now':
      result = films.reverse()
      break
    case 'recommendation':
      result = arrayShuffle(films)
      break
    default:
      result = films
      break
  }

  if (filter) {
    result = result.filter((film) =>
      film.title?.toLowerCase().includes(filter.toLowerCase().trim())
    )
  }

  return result
}
