// Add your functions here
function map(sourceArray, fxn){
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(fxn(element))
  });
  return newArray;
}

// function reduce(array, func, startingPoint){
//   let accumulator;
//   let index;

//   if(!!startingPoint){
//       accumulator = startingPoint;
//       index = 0;
//   } else {
//       accumulator = func(array[0],array[1]);
//       index = 2;
//   }
//   for(index; index< array.length; index++){
//       accumulator = func(accumulator, array[index])
//   }
//   return accumulator;
// }

function reduce(ary, reduceFn, memo){
  for (const element of ary){
    memo = memo === undefined ? element : reduceFn(element, memo)
  }
  return memo
}
