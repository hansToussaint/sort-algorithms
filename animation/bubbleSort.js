import { swap, wait, giveColor } from "./helpers.js";

export default async function bubbleSort(array, delay) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      giveColor(array[j], "#c31b2a");
      giveColor(array[j + 1], "#c31b2a");

      await wait(delay);

      if (+array[j].innerText > +array[j + 1].innerText) {
        swap(array[j], array[j + 1]);
        await wait(delay);
      }

      giveColor(array[j], "#017efa");
      giveColor(array[j + 1], "#017efa");
    }

    giveColor(array[array.length - i - 1], "#8f573e"); /*#8f573e*/
  }

  await wait(delay);
}
