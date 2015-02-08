module.exports = Hexagon

require('es6-weak-map/implement')
var zpad = require('zpad')
var util = require('util')

var KEY_COORDINATE_PAD_AMOUNT = 10

/**
 * Represents a hexagon with [axial coordinates](http://www.redblobgames.com/grids/hexagons/#coordinates).
 * @class
 * @param {Number} q - The q coordinate
 * @param {Number} r - The r coordinate
 */
function Hexagon (q, r) {
  _Hexagon.set(this, {
    q: q,
    r: r
  })
}
var _Hexagon = new WeakMap()

function makeKeyFromCoordinate (coordinate) {
  return zpad(coordinate.toString(16), KEY_COORDINATE_PAD_AMOUNT)
}

/**
 * Uniquely refers to this hexagon in a hash of hexagons
 * @member {string} key
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'key', {
  get: function () {
    return util.format('%s,%s',
      makeKeyFromCoordinate(this.q),
      makeKeyFromCoordinate(this.r)
    )
  }
})

/**
 * The axial `q` coordinate of the Hexagon
 * @member {Number} q
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'q', {
  get: function () {
    return _Hexagon.get(this).q
  }
})

/**
 * The axial `r` coordinate of the Hexagon
 * @member {Number} r
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'r', {
  get: function () {
    return _Hexagon.get(this).r
  }
})

/**
 * The cube `x` coordinate of the Hexagon
 * @member {Number} x
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'x', {
  get: function () {
    return this.q
  }
})

/**
 * The cube `z` coordinate of the Hexagon
 * @member {Number} z
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'z', {
  get: function () {
    return this.r
  }
})

/**
 * The cube `y` coordinate of the Hexagon
 * @member {Number} y
 * @memberof Hexagon#
 * @readonly
 */
Object.defineProperty(Hexagon.prototype, 'y', {
  get: function () {
    // invariant: x+y+z=0; so y=0-x-z
    return 0 - this.x - this.z
  }
})
