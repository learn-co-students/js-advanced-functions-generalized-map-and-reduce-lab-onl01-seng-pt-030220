// Add your functions here
// Your code here
function map(sourceArray,callBackFunc ){
      let array=[]
     sourceArray.forEach(el => {
       array.push(callBackFunc(el))

     } )
     return array
}


function reduce(sourceArray,callBackFunc,startingPoint)
{

  let total

  if (startingPoint){
      /// first when startingPoint exist do this put total= startingPoint ,because reduce start from given inintialvalue(startingPoint)
    total = startingPoint
    sourceArray.forEach(el=>
       total =callBackFunc(total,el)
    )
   }else
   {
      //we put total  to first element ,because reduce by defalut will
      // choose first element if no startingPoint or initial value
      //
      total =sourceArray[0]
      for(let i=1;i< sourceArray.length;i++){
         total =callBackFunc(total,sourceArray[i])
    }

  }
return total
}
