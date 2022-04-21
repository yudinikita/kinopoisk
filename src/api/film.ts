import { BASE_URL } from 'api/index'
import type { FilmDetailResponse } from 'mocks/types'

export async function loadFilmDetail(
  filmId: string
): Promise<FilmDetailResponse> {
  const url = BASE_URL + '/film?' + new URLSearchParams({ id: filmId })

  const req = await fetch(url)

  return await req.json()
}
