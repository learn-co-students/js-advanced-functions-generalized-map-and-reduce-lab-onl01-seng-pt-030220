// Add your functions here

function map(array, callback) { 
    let  newArray = []
     for (let i = 0; i < array.length; i++) { 
       let element = array[i]
       newArray.push(callback(element))
     }
     return newArray;
}

const reduce = (array, callback, intial) => {
    let memo = intial;
    for (let i = 0; i < array.length; i++) {
      if (i === 0 && memo === undefined) {
        memo = array[0];
      } else {
        memo = callback(array[i], memo);
      }
    }
  
    return memo;
  };