let number = 3
let maxNum = number
let lastNumber = 0
let completed = true

function isSimple(num) {
  const i = completed ? 2 : lastNumber + 1
  if (i < num) {
    if (num % i === 0) {
      completed = true
      return false
    }
  }
  if (i >= num) {
    completed = true
    return true
  }
  completed = false
  lastNumber = i
  return false
}

setInterval(() => {
  if (isSimple(number)) {
    maxNum = number
  }
  if (completed) number++
}, 0)
setInterval(() => {
  console.log(`${new Date().getTime()} -- IN PROCESS -- Biggest prime number found:${maxNum}`)
}, 1000)
