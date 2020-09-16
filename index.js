// Add your functions here
// Your code here
function map(sourceArray,callBackFunc ){
      let array=[]
     sourceArray.forEach(el => {
       array.push(callBackFunc(el))

     } )
     return array
}


function reduce(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}
