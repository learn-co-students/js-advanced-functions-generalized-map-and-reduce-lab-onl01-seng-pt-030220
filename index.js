// Add your functions here
function map(array, fn) {
    const result = [];
        for(let i=0; i<array.length; i++){
            result.push(fn(array[i]));
        }
    return result;
}

const reduce = function(array, fn, int) {
    let result = int;
    for(let i=0; i<array.length; i++){
        if (result === undefined){
            result = array[i];
        } else {
            result = fn(array[i], result);
        }
    };
    return result;
}