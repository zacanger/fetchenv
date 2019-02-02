module.exports = (obj) =>
  Object.keys(obj)
    .reduce((p, c) =>
      `${p}
${c}: ${obj[c]}`
    , '').trim()
