function analyzeArray(arr) {
  function average() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  function minValue() {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function maxValue() {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  function length() {
    return arr.length;
  }

  return {
    average: average(arr),
    min: minValue(arr),
    max: maxValue(arr),
    length: length(arr),
  };
}

export default analyzeArray;
