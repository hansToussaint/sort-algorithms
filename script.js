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
  console.log("bubbleSort: ", array);
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
console.log("quickSort: ", quickSort(unsortedArray));

// Merge sort
const mergeSort = function () {};

// Heap Sort
const heapify = function (array, length, parentIndex) {
  let index = parentIndex;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < length && array[left] > array[index]) index = left;

  if (right < length && array[right] > array[index]) index = right;

  if (index !== parentIndex) {
    [array[parentIndex], array[index]] = [array[index], array[parentIndex]];

    heapify(array, length, index);
  }
};

const maxHeap = function (array) {
  const length = array.length;
  const middleIndex = Math.floor(array.length / 2 - 1);

  for (let i = middleIndex; i >= 0; i--) {
    heapify(array, length, i);
  }
};

const heapSort = function (array) {
  array = array.slice();
  maxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, i, 0);
  }
  return array;
};
console.log("heapSort: ", heapSort(unsortedArray));
console.log("unsortedArray: ", unsortedArray);
