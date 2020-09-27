// Add your functions here

function map(arr, fn){
    let newArr = [];
    arr.forEach(ele => {
        newArr.push(fn(ele));
    })
    return newArr;
}

function reduce(arr, fn, start){
    let initial = start;
    for (let i = 0; i < arr.length; i++){
        if (i === 0 && initial === undefined) {
            initial = arr[i];
        } else {
            initial = fn(arr[i], initial);
        }
    }
    return initial;
}