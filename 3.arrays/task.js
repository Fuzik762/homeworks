function compareArrays(arr1, arr2) {
  let result;
      if(arr1.length === arr2.length){
      result = arr1.every((el, idx) => el === arr2[idx]);
      } else {
        result = false;
      }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(el => el > 0).filter(el => el % 3 === 0).map(el => el * 10);

  return resultArr; // array
}
