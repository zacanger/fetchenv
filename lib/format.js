const colors = require('./colors')
const { bold } = require('zeelib/lib/colorize').default

module.exports = (o) => {
  const obj = { ...o }

  let s = `
    ${bold(obj.User)}`
  delete obj.User

  s += '\n\n'
  s += '    ' + colors
  s += '\n'

  const rest = Object.keys(obj)
    .reduce((p, c) =>
      `    ${p}
    ${bold(c)}: ${obj[c]}`
    , s)
  return rest + '\n'
}
