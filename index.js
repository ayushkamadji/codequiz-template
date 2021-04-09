const solution = require("./solution")

x = [1, 2, 3]

y = [-1, -3]

function randSeq(n, lower, upper) {
  var result = []
  for (let i = 0; i < n; i++) {
    result.push(
      Math.round(Math.random() * (upper - lower)) + lower)
  }
  return result
}

rq = () => randSeq(10005, 1000000, -1000000)

var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@!? -%$#*&^=+'

function randCharSeq(length, charset) {
  let result = []
  let charsetLength = charset.length
  for (let i = 0; i < length; i++) {
    let charIndex = Math.floor(Math.random() * charsetLength)
    result.push(charset.charAt(charIndex))
  }

  return result
}

function randString(length, charset) {
  return randCharSeq(length, charset).join("")
}

function randCollection(length, fn) {
  let result = []
  for (let i = 0; i < length; i++) {
    let item = fn()
    result.push(item)
  }
  return result
}

// example
// array of 5 random strings upto 1000 in length
const rf = (maxLen) => () => randString(Math.floor(Math.random() * maxLen), charset)
randCollection(5, rf(1000))