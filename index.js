// Add your functions here
function map(sourceArray, fxn){
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(fxn(element))
  });
  return newArray;
}


function reduce(ary, reduceFn, memo){
  ary.forEach (element => {
    if(memo===undefined){
      memo = element
    }else{
      memo = reduceFn(element, memo)
    }
  })
  return memo
}

///learn co
// function reduce(src, cb, starting){
//   let r = (!!starting) ? starting : src[0]
//   let i = (!!starting) ? 0 : 1

//   for (; i < src.length; i++) {
//     r = cb(src[i], r)
//   }

//   return r;
// }
