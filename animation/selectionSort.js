import { swap, wait, giveColor } from "./helpers.js";

export default async function selectionSort(array, delay) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    giveColor(array[i], "gray");
    for (let j = i + 1; j < array.length; j++) {
      //
      // the gray separate the sorted and the part
      // current minimun : black
      // current value : red
      giveColor(array[minIndex], "black");

      giveColor(array[j], "#c31b2a"); //red

      await wait(delay);

      if (+array[j].innerText < +array[minIndex].innerText) {
        giveColor(array[minIndex], "#017efa");
        giveColor(array[i], "gray");
        giveColor(array[j], "black");

        minIndex = j;
      }

      giveColor(array[j], "#017efa"); // blue
    }

    if (+array[minIndex].innerText !== +array[i].innerText) {
      swap(array[minIndex], array[i]);
      giveColor(array[i], "#8f573e"); //brown //sorted item

      //   await wait(delay);
    }
  }
}
