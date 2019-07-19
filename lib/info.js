const os = require('os')
const envinfo = require('envinfo')

module.exports = async () => {
  const inf = await envinfo.run({
    System: ['OS', 'CPU', 'Memory', 'Shell']
  }, { json: true })
  const { System } = JSON.parse(inf)
  const Editor = process.env.EDITOR || process.env.VISUAL
  const Shell = `${System.Shell.path} ${System.Shell.version}`.trim()
  const Kernel = os.release()
  const User = `${os.userInfo().username}@${os.hostname()}`
  const OS = `${System.OS} ${os.arch()} ${os.type()}`.trim()
  return { ...System, Editor, Shell, Kernel, User, OS }
}
