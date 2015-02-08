var test = require('tape')
var Hexagon = require('./index')

test('hexagons have cube coordinates', function (t) {
  t.plan(3)

  var hex = new Hexagon(1, 29)
  t.equal(hex.x, 1)
  t.equal(hex.y, -30)
  t.equal(hex.z, 29)
})

test('hexagons have axial coordinates', function (t) {
  t.plan(2)

  var hex = new Hexagon(10, 12)
  t.equal(hex.q, 10)
  t.equal(hex.r, 12)
})

test('hexagons have hexadecimal keys', function (t) {
  t.plan(2)

  var hex = new Hexagon(1, 29)
  t.equal(hex.key, '0000000001,000000001d')

  hex = new Hexagon(9, 102948)
  t.equal(hex.key, '0000000009,0000019224')
})
