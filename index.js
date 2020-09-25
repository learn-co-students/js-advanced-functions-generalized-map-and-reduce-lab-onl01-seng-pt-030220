function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
// function map(array, callback) { 
//     let  newArray = []
//      for (let i = 0; i < array.length; i++) { 
//        let element = array[i]
//        newArray.push(callback(element))
//      }
//      return newArray;
// }

// const reduce = (array, callback, intial) => {
//     let memo = intial;
//     for (let i = 0; i < array.length; i++) {
//       if (i === 0 && memo === undefined) {
//         memo = array[0];
//       } else {
//         memo = callback(array[i], memo);
//       }
//     }
  
//     return memo;
//   };