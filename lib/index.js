const colors = require('./colors')
const info = require('./info')
const format = require('./format')

module.exports = async () => {
  const env = await info()
  console.log(format(env))
  console.log(colors)
}
