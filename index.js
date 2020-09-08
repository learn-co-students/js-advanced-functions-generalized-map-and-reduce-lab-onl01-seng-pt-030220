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
