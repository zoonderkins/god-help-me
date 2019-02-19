function getRandomRgb () {
  let num = Math.round(0xffffff * Math.random())
  let r = num >> 16
  let g = (num >> 8) & 255
  let b = num & 255
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
};

console.log(getRandomRgb())
const christmas =
[
  '              .!,            .!,',
  '             ~ 6 ~          ~ 6 ~',
  "        .    ' i `  .-^-.   ' i `",
  '      _.|,_   | |  / .-. \   | |',
  "       '|`   .|_|.| (-` ) | .|_|.",
  "       / \ ___)_(_|__`-'__|__)_(______",
  '       /`,o\)_______________________o_(',
  '      /_* ~_\[___]___[___]___[___[_[\`-.',
  "      / o .'\[_]___[___]___[___]_[___)`-)",
  "    /_,~' *_\_]                 [_[(  (",
  '     /`. *  *\_]                 [___\ _\ ',
  "    /   `~. o \]      ;( ( ;     [_[_]`-'",
  '   /_ *    `~,_\    (( )( ;(;    [___]',
  "   /   o  *  ~'\   /\ /\ /\ /\   [_[_]",
  " / *    .~~'  o\  ||_||_||_||   [___]",
  "/_,.~~'`    *  _\_||_||_||_||___[_[_]_",
  ' /`~..  o        \ ::::::::::::::::::::: \ ',
  ' / *  . .   *     \ ::::::::::::::::::::: \ ',
  ' /_     o    ``~~.,,_\=========\_/=========" ',
  "/  *      *     ..~'\         _|_ .-_--.",
  "/*    o   _..~~`'*   o\           ( (_)  )",
  "`-.__.~'`'   *   ___.-'            `----'",
  '   " :-------: "',
  '     \_____/'
].join('\n')

const log = console.log

log(`'%c ${christmas}'`, `color:${getRandomRgb()}`)