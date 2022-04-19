import api from './index'
import { FilmCardProps } from 'components/FilmCard/FilmCard'

const BASE_URL = 'films/'

export type FilmsListTypes = 'ticket' | 'watch_now' | 'recommendation'

export interface FilmsListParams {
  type?: FilmsListTypes | string | null
  count?: number | string | null
}

type ListResponse = {
  films: FilmCardProps[]
}

export const list = async (params?: FilmsListParams) =>
  await api
    .get<ListResponse>(BASE_URL, { params })
    .then((response) => response.data)

export const detail = async (id: string | number) =>
  await api.get(`${BASE_URL}${id}/`).then((response) => response.data)
