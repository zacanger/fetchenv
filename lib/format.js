const colors = require('./colors')

module.exports = (o) => {
  const obj = { ...o }

  let s = `
    ${obj.User}`
  delete obj.User

  s += '\n\n'
  s += '    ' + colors
  s += '\n'

  const rest = Object.keys(obj)
    .reduce((p, c) =>
      `    ${p}
    ${c}: ${obj[c]}`
    , s)
  return rest + '\n'
}
