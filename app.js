const chalk = require('chalk')
const log = console.log
const christmas = require('./christmas.js')
const rgb = require('./rgb.js')

log(chalk`{bold.${rgb()} ${christmas.join('\n')}}`)
