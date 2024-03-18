const { resolve } = require('node:path')
const { execSync } = require('node:child_process')
const { cpus } = require('node:os')
const cluster = require('node:cluster')

exports.command = 'run-cluster'

exports.desc = 'runs the app in a cluster'

exports.builder = (yargs) => {
  yargs.options({})
}

exports.handler = async (args) => {
  const rootDir = resolve(__dirname, '..')
  const command = `npm run start`

  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`)

    const numCPUs = cpus().length
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`)
      cluster.fork()
    })
  } else {
    execSync(command, {
      encoding: 'utf-8',
      stdio: 'inherit',
      env: args.environment,
      cwd: rootDir,
    })

    console.log(`Worker ${process.pid} started`)
  }
}
