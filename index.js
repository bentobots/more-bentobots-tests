const Bot = require('bentobots').Bot,
  Graph = require('bentobots').Graph,
  list = require('bentobots-list'),
  utils = require('bentobots-utils'),
  point = require('bentobots-point')

const print = INPUT => console.log(INPUT)

var graph = new Graph({name: 'Designscript Example'})

const bots = [
  new Bot('Range', utils.range, { START: 0, END: 20, STEP: 4 }),
  new Bot('Point', point.create, { X: 'Range>SEQ', Y: 'Range>SEQ', Z: 0 }),
  new Bot('Print', print, { INPUT: 'Point>POINT' })
].map(graph.addBot)

function cb (output) {
  console.log('COMPLETED BATCH')
}

graph.run(cb, true)

// console.log(point.create({X: [0, 4, 8, 12, 16, 20], Y: [0, 4, 8, 12, 16, 20], Z: 0}))
