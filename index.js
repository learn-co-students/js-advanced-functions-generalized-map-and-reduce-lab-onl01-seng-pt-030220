const map = (array, fn) => {
  let newArray = []
  for(let n of array){
    newArray.push(fn(n))
  }
  return newArray
}

const reduce = (array, fn, acc = 0) => {
  for(let n of array){
    if (acc === 0){
      acc = n 
    }else{
      acc = fn(n, acc)
    }
  }
  return acc
}
