function slice(array, start, size = 1) {
    let part_array = [];
    let index = 0;
    for( let i = start; i < start + size && i < array.length; i++ ){
        part_array[index++] = array[i];
    }
    return part_array;
}
function chunk(array, size = 1){
    let result = [];
    let start;
    let index = 0;
    for (start = 0; start < array.length; start += size){
        result[index++] = slice(array, start, size);
    }
    if (array.length - start > 0){
        result[index++] = slice(array, start, array.length - start);
    }
    return result;   
}
function compact(array){
    const compact_array = [];
    let index = 0;
    for(let i=0; i<array.length; i++){
        if(Boolean(array[i])){
            compact_array[index++] = array[i];
        }
    }
    return compact_array;
}
function drop(array, number = 1){
    return slice(array, number, array.length - number);
}
function dropWhile(array, identity){
    let part_array = [];
    let index = 0;
    for( let i = 0; i < array.length; i++ ){
        if(typeof identity === 'function' && !identity(array[i])) {
            part_array[index++] = array[i];
        }
        if(identity instanceof Array){
            if(!JSON.stringify(array[i]).includes(identity[0]) ||
                !JSON.stringify(array[i]).includes(identity[1])){
                part_array[index++] = array[i];
            }
            continue;
        }
        if(typeof identity === 'object' || typeof identity === 'string') {
            if(JSON.stringify(identity) !== JSON.stringify(array[i])) {
                part_array[index++] = array[i];
            } 
        }
   }
    return part_array;
}
       
module.exports = { chunk, compact, drop, dropWhile};

