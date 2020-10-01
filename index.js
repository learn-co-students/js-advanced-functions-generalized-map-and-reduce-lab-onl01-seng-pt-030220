
const map = function(array, funk){
  let newArr = []
  array.forEach(arr => newArr.push(funk(arr)))
  return newArr
}

// function map(src, cb) {
//   let r = []

//   for (let i = 0; i < src.length; i++) {
//     let theElement = src[i]
//     r.push(cb(theElement))
//   }

//   return r;
// }



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

// function reduce(src, cb, starting){
//   let r = (!!starting) ? starting : src[0]
//   let i = (!!starting) ? 0 : 1

//   for (; i < src.length; i++) {
//     r = cb(src[i], r)
//   }

//   return r;
// }
