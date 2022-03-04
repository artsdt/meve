#!/usr/bin/env node
import logger from './shared/logger'
import { Command } from 'commander'
import { dev } from './commands/dev'
import { build } from './commands/build'
import { preview } from './commands/preview'
import { compile } from './commands/compile'
import { jest } from './commands/jest'
import { lint } from './commands/lint'
import { changelog } from './commands/changelog'
import { release } from './commands/release'
import { commitLint } from './commands/commitLint'

const program = new Command()

program.version(`meve-cli ${require('../package.json').version}`).usage('<command> [options]')

program
  .command('dev')
  .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
  .description('Run meve development environment')
  .action(dev)

program.command('build').description('Build meve site for production').action(build)

program.command('preview').description('Preview meve site for production').action(preview)

program
  .command('compile')
  .description('Compile meve components library code')
  .option('-nu, --noUmd', 'Do not compile umd target code')
  .action(compile)

program
  .command('jest')
  .description('Run Jest in work directory')
  .option('-w, --watch', 'Watch files change auto jest')
  .option('-wa, --watchAll', 'Watch all files change auto jest')
  .option('-c, --component <componentName>', 'Test a specific component')
  .option('-cc --clearCache', 'Clear test cache')
  .action(jest)

program
  .command('changelog')
  .option('-rc --releaseCount <releaseCount>', 'Release count')
  .option('-f --file <file>', 'Changelog filename')
  .description('Generate changelog')
  .action(changelog)

program
  .command('release')
  .option('-r --remote <remote>', 'Remote name')
  .description('Release all packages and generate changelogs')
  .action(release)

program.command('commit-lint <gitParams>').description('Lint commit message').action(commitLint)

program.command('lint').description('Lint code').action(lint)

program.on('command:*', ([cmd]) => {
  program.outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})

program.parse()
