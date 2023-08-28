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

// Selection Sort
const selectionSort = function (array) {
  array = array.slice();
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }

    if (array[minIndex] !== array[i])
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
};
console.log("selectionSort: ", selectionSort(unsortedArray));

// Insertion Sort
const insertionSort = function (array) {
  array = array.slice();

  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = currentElement;
    // currentElement = array[j + 1];
  }
  return array;
};
console.log("insertionSort: ", insertionSort(unsortedArray));

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
  let left = 2 * parentIndex + 1;
  let right = 2 * parentIndex + 2;

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
console.log("heapSort: ", heapSort([10, 80, 30, 90, 40, 50, 70]));
console.log("unsortedArray: ", unsortedArray);
