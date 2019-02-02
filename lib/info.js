const os = require('os')
const envinfo = require('envinfo')

module.exports = async () => {
  const inf = await envinfo.run({
    System: [ 'OS', 'CPU', 'Memory', 'Shell' ]
  }, { json: true })
  const { System } = JSON.parse(inf)
  const Editor = process.env.EDITOR || process.env.VISUAL
  const Shell = `${System.Shell.path} ${System.Shell.version}`.trim()
  const Hostname = os.hostname()
  const Arch = os.arch()
  const User = os.userInfo().username
  const Kernel = os.release()
  const OS = `${System.OS} ${os.type()}`.trim()
  return { ...System, Editor, Shell, Kernel, Hostname, User, Arch, OS }
}
