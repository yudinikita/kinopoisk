export interface ResponseType {
  success: boolean
  message?: string
}

type FilmType = 'FILM' | 'SERIAL'

export type TableAboutFilm = {
  property: string
  value?: string
}

export interface FilmDetailType {
  id: string
  type: FilmType
  nameRu?: string
  nameOriginal?: string
  posterUrl: string
  trailerUrl?: string
  trailerCoverUrl?: string
  trailerDate?: string
  trailerLength?: string
  ratingKinopoisk?: string
  ratingKinopoiskVoteCount?: string
  ratingAgeLimits?: string
  description?: string
  shortDescription?: string
  videoPlayerUrl?: string
  actors?: string[]
  tableAboutFilm?: TableAboutFilm[]
}

export interface FilmDetailResponse extends ResponseType {
  data?: FilmDetailType
}
