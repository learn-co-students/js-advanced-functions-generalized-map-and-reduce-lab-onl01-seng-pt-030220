
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
      /// first when startingPoint exist do this put total= startingPoint
      //,because reduce start from given inintialvalue(startingPoint),then send all element with new total values
    total = startingPoint
    sourceArray.forEach(el=>
       total =callBackFunc(total,el)
    )
   }
   else
   {
      //We put total  to first element ,because reduce by defalut will
      // choose first element if no startingPoint or initial value
      //  total =sourceArray[0],when we put total =0 test not getting pased,because
      // he said all values not true because of total = 0 it's false value,and acumalator
      // should not start with default value zero
      //it start with first element of array
      
      total =sourceArray[0]
      for(let i=1;i< sourceArray.length;i++){
         total =callBackFunc(total,sourceArray[i])
      }

  }
  return total
}


//sorry for put extra stuff in this lab without realize that  because after ,because after correct running ,by
//hits doing ctl+z and learn submit again without realize that
