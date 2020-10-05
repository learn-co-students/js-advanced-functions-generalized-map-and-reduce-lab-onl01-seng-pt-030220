// Add your functions here
function map(src, f) {
    let newArray = []
    
    for (let i = 0; i < src.length; i++) {
        let theElement = src[i]
        newArray.push(f(theElement))
    };

    return newArray;
}

function reduce(src, reduceFn, memo) {
    
    src.forEach(item => {
        if(memo === undefined) {
            memo =  item
        } else {
            memo = reduceFn(item, memo)
        }
        
    });
    return memo;
}