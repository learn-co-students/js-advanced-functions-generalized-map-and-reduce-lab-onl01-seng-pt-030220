
const map = function(array, funk){
  let newArr = []
  array.forEach(arr => newArr.push(funk(arr)))
  return newArr
}



const reduce = function(array, funk, startingPoint){
  array.forEach(arr => {
   if (startingPoint === undefined){
    startingPoint = arr
   } else {
    startingPoint = funk(arr, startingPoint)
   }
  })
  return startingPoint
}

// takes and array and function, optional startingpoint
// reduces each el in array through passed in function.
// returns a value

