// Add your functions here

function map(src, val){
    let results = [];
    src.forEach(element => {
        results.push(val(element))
        return results
    })
    return results
}
function reduce(src, cb, starting){
    let reduce = (!!starting) ? starting : src[0]
    let index = (!!starting) ? 0 : 1
  
    for (; index < src.length; index++) {
      reduce = cb(src[index], reduce)
    }
  
    return reduce;
  }
