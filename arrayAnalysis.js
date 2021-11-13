function arrayAnalysis(array) {
  if (!Array.isArray(array)) {
    throw new Error('not an array');
  }
  array.forEach((element) => {
    if (isNaN(element)) {
      throw new Error('Something not a number');
    }
  });

  // Actual code

  let object = new Object();
  object.average = getAverage(array);
  object.min = getMin(array);
  object.max = getMax(array);
  object.length = getLength(array);

  return object;
}

function getAverage(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / array.length;
}

function getMin(array) {
  let result = array[0];
  array.forEach((element) => {
    if (element < result) {
      result = element;
    }
  });
  return result;
}
function getMax(array) {
  let result = array[0];
  array.forEach((element) => {
    if (element > result) {
      result = element;
    }
  });
  return result;
}
function getLength(array) {
  return array.length;
}
module.exports = arrayAnalysis;
