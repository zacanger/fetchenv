const reset = '\u001b[0m'

const block = '\u2588'

const white = '\u001b[1;37m'
const lightGrey = '\u001b[0;37m'
const grey = '\u001b[1;30m'
const black = '\u001b[0;30m'

const blue = '\u001b[0;34m'
const lightBlue = '\u001b[1;34m'
const cyan = '\u001b[0;36m'
const lightCyan = '\u001b[1;36m'

const green = '\u001b[0;32m'
const lightGreen = '\u001b[1;32m'
const yellow = '\u001b[0;33m'
const lightYellow = '\u001b[1;33m'

const red = '\u001b[0;31m'
const lightRed = '\u001b[1;31m'
const purple = '\u001b[0;35m'
const lightPurple = '\u001b[1;35m'

const joinRows = (...cols) => cols.join(block)
const firstRow = joinRows(white, lightGrey, grey, black, blue, lightBlue, cyan, lightCyan)
const secondRow = joinRows(green, lightGreen, yellow, lightYellow, red, lightRed, purple, lightPurple)

module.exports = [ firstRow, secondRow ].join('') + reset
