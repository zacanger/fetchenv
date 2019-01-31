const reset = '\033[0m'

const block = '\u2588'

const white = '\033[1;37m'
const lightGrey = '\033[0;37m'
const grey = '\033[1;30m'
const black = '\033[0;30m'

const blue = '\033[0;34m'
const lightBlue = '\033[1;34m'
const cyan = '\033[0;36m'
const lightCyan = '\033[1;36m'

const green = '\033[0;32m'
const lightGreen = '\033[1;32m'
const yellow = '\033[0;33m'
const lightYellow = '\033[1;33m'

const red = '\033[0;31m'
const lightRed = '\033[1;31m'
const purple = '\033[0;35m'
const lightPurple = '\033[1;35m'

const joinRows = (...cols) => cols.join(block)
const firstRow = joinRows(white, lightGrey, grey, black, blue, lightBlue, cyan, lightCyan)
const secondRow = joinRows(green, lightGreen, yellow, lightYellow, red, lightRed, purple, lightPurple)

module.exports = [ firstRow, secondRow ].join('\n') + reset
