// Add your functions here
function map(arr, callback){
    const newArr = []
    for(const element of arr){
        newArr.push(callback(element))
    }
    return newArr
}

function reduce(arr, callback, start){
    let total = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for(; i < arr.length; i++){
        total = callback(arr[i], total)
    }

    return total
}