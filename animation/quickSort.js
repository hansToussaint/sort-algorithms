import { swap, wait, giveColor } from "./helpers.js";

async function getIndex(array, left, right, delay) {
  // const pivot = array[array.length - 1];
  const pivot = array[right];

  giveColor(pivot, "orangered");

  // let smallerIndex = -1;
  let smallerIndex = left - 1;

  for (let i = left; i < right; i++) {
    giveColor(array[i], "#c31b2a"); /* red */

    await wait(delay);

    if (+array[i].innerText <= +pivot.innerText) {
      smallerIndex++;
      swap(array[smallerIndex], array[i]);

      giveColor(array[smallerIndex], "#8f573e"); /* brown */
      if (smallerIndex !== i) giveColor(array[i], "#a89f90"); /* gray */

      await wait(delay);
    } else giveColor(array[i], "#a89f90");
  }

  smallerIndex++;
  swap(array[smallerIndex], pivot);
  giveColor(pivot, "#a89f90");
  giveColor(array[smallerIndex], "black");

  return smallerIndex;
}

export default async function quickSort(array, left, right, delay) {
  if (left < right) {
    const index = await getIndex(array, left, right, delay);

    await quickSort(array, left, index - 1, delay);

    await wait(delay);

    await quickSort(array, index + 1, right, delay);
  }
}
