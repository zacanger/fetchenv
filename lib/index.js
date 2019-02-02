const info = require('./info')
const format = require('./format')

module.exports = async () => {
  const env = await info()
  console.log(format(env))
}
