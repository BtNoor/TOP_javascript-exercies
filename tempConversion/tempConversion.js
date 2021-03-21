const ftoc = function(temp) {
  let celcius = (temp - 32) * (5/9);
  return Math.round(celcius  * 10) / 10;
}

const ctof = function(temp) {
  let faren = temp * 9 / 5 + 32;
  return Math.round(faren  * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
