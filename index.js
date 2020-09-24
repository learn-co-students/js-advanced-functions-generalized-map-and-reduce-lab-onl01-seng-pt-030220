// Add your functions here

function map(sourceArray, fxn) {
let newArray = [] 
sourceArray.forEach(element => {
    newArray.push(fxn(element))
    return newArray
})
return newArray
};



function reduce(ary, reduceFn, pointer){
    ary.forEach (element => {
      if(pointer===undefined){
        pointer = element
      }else{
        pointer = reduceFn(element, pointer)
      }
    })
    return pointer
  }