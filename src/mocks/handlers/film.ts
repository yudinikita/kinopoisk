import { rest } from 'msw'
import { BASE_URL } from 'api'
import { getFilmDetail } from 'mocks/service/film'

export const filmGet = rest.get(BASE_URL + '/film', (req, res, ctx) => {
  const id = req.url.searchParams.get('id')

  const filmDetail = getFilmDetail(id)

  return res(
    ctx.status(200),
    ctx.delay(300),
    ctx.json({
      ...filmDetail,
    })
  )
})
