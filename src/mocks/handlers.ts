import { rest } from 'msw'

export const handlers = [
  rest.get('/api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: 'Hello, World!',
      })
    )
  }),
]
