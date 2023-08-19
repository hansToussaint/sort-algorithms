"use strict";

const unsortedArray = [5, 8, 92, 1, 6];

// Bubble Sort
const bubbleSort = function (array) {
  array = [5, 8, 92, 1, 6];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
};
bubbleSort();

// Quick Sort
const quickSort = function (array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] <= pivot ? leftArray.push(array[i]) : rightArray.push(array[i]);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};
console.log(quickSort(unsortedArray));
console.log(unsortedArray);

// Merge sort
const mergeSort = function () {};

// Heap Sort
const heapSort = function () {};
