import { swap, wait, giveColor } from "./helpers.js";

const heapify = async function (array, length, parentIndex, delay) {
  let index = parentIndex;
  let left = 2 * parentIndex + 1;
  let right = 2 * parentIndex + 2;

  if (left < length && +array[left].innerText > +array[index].innerText)
    index = left;

  if (right < length && +array[right].innerText > +array[index].innerText)
    index = right;

  if (index !== parentIndex) {
    giveColor(array[parentIndex], "#ae978a"); // light gray
    giveColor(array[index], "#e5b0b7"); // light pink

    await wait(delay);

    swap(array[index], array[parentIndex]);
    giveColor(array[index], "#017efa"); // blue
    giveColor(array[parentIndex], "#017efa");

    await wait(delay);

    await heapify(array, length, index, delay);
  }
};

const maxHeap = async function (array, delay) {
  const length = array.length;
  const middleIndex = Math.floor(array.length / 2 - 1);

  for (let i = middleIndex; i >= 0; i--) {
    giveColor(array[i], "#d7d40b"); // yellow green
    await wait(delay);

    await heapify(array, length, i, delay);
  }
};

export default async function heapSort(array, delay) {
  await maxHeap(array, delay);

  for (let i = array.length - 1; i > 0; i--) {
    swap(array[0], array[i]);
    giveColor(array[i], "#8f573e"); //brown

    await wait(delay);

    await heapify(array, i, 0, delay);
  }
  giveColor(array[0], "#8f573e"); //brown
  await wait(delay);
}
