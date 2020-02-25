
exports.min = function min (array) {
    if (!Array.isArray(array) || Object.keys(array).length == 0) return 0;

    let minimum = array.reduce(function(min, current){
        return current < min ? current : min;
    }, Infinity);
    return minimum;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || Object.keys(array).length == 0) return 0;

    let maximum = array.reduce(function(max, current){
        return current > max ? current : max;
    }, -Infinity);
    return maximum;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || Object.keys(array).length == 0) return 0;
    
    let summ = array.reduce(function(sum, current){
        return sum+current;
    }, 0);
  return summ/(Object.keys(array).length);
}
