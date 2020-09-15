const map = (array, fn) => {
  let newArray = []
  for(let n of array){
    newArray.push(fn(n))
  }
  return newArray
}

const reduce = (array, fn, acc = 0) => {
  for(let n of array){
    acc = acc === 0 ? n : fn(n, acc)
  }
  return acc
}
