import { BASE_URL } from 'api/index'
import { FilmCardProps } from 'components/FilmCard/FilmCard'

export type FilmsListTypes = 'ticket' | 'watch_now' | 'recommendation'

export interface FilmsListParams {
  type?: FilmsListTypes | string
  count?: string
  filter?: string
}

export async function loadFilms(
  params: FilmsListParams
): Promise<FilmCardProps[]> {
  let films = [] as FilmCardProps[]

  await fetch(BASE_URL + '/films?' + new URLSearchParams({ ...params }))
    .then((res) => res.json())
    .then((data) => (films = data?.films))

  return films
}
