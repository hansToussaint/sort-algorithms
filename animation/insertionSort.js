import { swap, wait, giveColor } from "./helpers.js";

export default async function insertionSort(array, delay) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = Number(array[i].innerText);
    giveColor(array[i], "#73868f"); //gray

    let j = i - 1;
    giveColor(array[j], "#e8e166"); // yellow
    await wait(delay);

    while (j >= 0 && +array[j].innerText > currentValue) {
      swap(array[j + 1], array[j]);
      giveColor(array[j], "#8f573e"); //brown

      j = j - 1;
      if (j >= 0) giveColor(array[j], "gray");
      await wait(delay);
    }
    giveColor(array[i], "#017efa"); //blue
    // array[j + 1] = currentValue;

    currentValue = Number(array[j + 1].innerText);

    //
    giveColor(array[i], "#017efa");
    giveColor(array[0], "#8f573e");
  }
}
