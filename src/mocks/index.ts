if (typeof window === 'undefined') {
  // eslint-disable-next-line
  const { server } = require('./server')
  server.listen()
} else {
  // eslint-disable-next-line
  const { worker } = require('./browser')
  worker.start()
}
export {}
