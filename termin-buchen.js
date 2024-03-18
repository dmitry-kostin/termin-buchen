#!/usr/bin/env node
const { resolve, join } = require('node:path')
const { env, argv, cwd } = require('node:process')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { config } = require('dotenv')

async function main() {
    const rootDir = resolve(__dirname)
    const cliCommandsDir = join(rootDir, 'commands')
    const envFilePath = join(rootDir, `${env.NODE_ENV ?? ''}.env`)
    await yargs(hideBin(argv))
      .middleware((args) => {
        args.env = {
          ...env,
          ...config({ path: envFilePath }).parsed,
        }
        args.cwd = cwd()
      })
      .commandDir(cliCommandsDir)
      .demandCommand()
      .parseAsync()
}

main()
