function quickSort(array) {

  if(array.length <= 1 ) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  
  for(let i = array.length - 2; i >= 0; i--){
    if(array[i] < pivot ){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  
  return quickSort(left).concat(pivot, ...quickSort(right));
}

module.exports = quickSort; 
