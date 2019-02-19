function getRandomRgb () {
  let num = Math.round(0xffffff * Math.random())
  let r = num >> 16
  let g = (num >> 8) & 255
  let b = num & 255
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
// function random_rgb () {
//   let o = Math.round;
//   let r = Math.random;
//   let s = 255
//   return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')'
// }

module.exports = getRandomRgb
