function mergeSort(array){
  if(array.length < 2){
    return array
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return combinedArr(mergeSort(left), mergeSort(right))
}



function combinedArr(left, right){
  let newArray = [];
  while(left.length || right.length){
    
    if(left[0] > right[0] || left[0] === undefined){
      newArray.push(right.shift())
    } else {
      newArray.push(left.shift())
    }
  
  }
  return newArray
}




module.exports = mergeSort; 