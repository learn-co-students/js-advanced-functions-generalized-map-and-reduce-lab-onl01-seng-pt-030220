// Add your functions here
// Your code here
function map(sourceArray,callBackFunc ){
      let array=[]
     sourceArray.forEach(el => {
       array.push(callBackFunc(el))

     } )
     return array
}


function reduce(sourceArray,startingPoint =3 ){
     sourceArray.forEach(el => {
         return callBackFunc(el)
   } )
}
