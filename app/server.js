const config = require('app/config')
const app = require('app')(config)

console.info('Server process starting..')

app.listen(config.express.port, config.express.ip, (error) => {
  if (error) {
    console.error('Unable to listen for connections', error)
    process.exit(10)
  }
  console.info('Express is listening on http://' + config.express.ip + ':' + config.express.port)
})
