const { resolve } = require('node:path')
const { execSync } = require('node:child_process')

exports.command = 'run'

exports.desc = 'runs the app in a single instance'

exports.builder = (yargs) => {
  yargs.options({})
}

exports.handler = async (args) => {
  const rootDir = resolve(__dirname, '..')
  const command = `npm run start`
  execSync(command, {
    encoding: 'utf-8',
    stdio: 'inherit',
    env: args.environment,
    cwd: rootDir,
  })
}
