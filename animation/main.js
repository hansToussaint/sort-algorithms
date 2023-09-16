import bubbleSort from "./bubbleSort.js";
import selectionSort from "./selectionSort.js";
import insertionSort from "./insertionSort.js";
import quickSort from "./quickSort.js";
import heapSort from "./heapSort.js";
import { giveColor, wait } from "./helpers.js";

export const visualisationBox = document.querySelector(".visualisation-box");

const changeSize = document.getElementById("array-size");

let delay;

function disableOthers(element) {
  element.classList.add("disable");
}

function enable(element) {
  element.classList.remove("disable");
}

function generateArray(size = 78) {
  delay = 0.5 / size;

  // const array = [20, 80, 50, 30, 90, 40];

  const array = Array.from(
    { length: size },
    () => Math.floor(Math.random() * 95) + 5
  );

  const markup = `
    <div class="array-container">${array
      .map(
        (el) =>
          `<div class="array-element" style="height: ${el / 1.7}rem; width: ${
            50 / size
          }rem; color: ${size > 15 ? "transparent" : "white"}">${el}</div>`
      )
      .join("")}</div>
  `;

  visualisationBox.insertAdjacentHTML("afterbegin", markup);
}
generateArray();

// Event handlers
changeSize.addEventListener("input", function (e) {
  const size = Number(e.target.value);

  visualisationBox.innerHTML = "";
  generateArray(size);
});

////////////////////////////////////////////

async function listener(sortType, delay) {
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await sortType(arrayElement, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));
}

async function listenerQuickSort() {
  const arrayElement = Array.from(document.querySelectorAll(".array-element"));

  await quickSort(arrayElement, 0, arrayElement.length - 1, delay);

  arrayElement.forEach((el) => giveColor(el, "#b88214"));
}

//global
const headerElements = document.querySelector("header");
const allSortTypes = document.querySelectorAll(".algo");

headerElements.addEventListener("click", function (e) {
  const createArray = e.target.closest(".header__new-array");

  const btnBubbleSort = e.target.closest(".bubble-sort");
  const btnSelectionSort = e.target.closest(".selection-sort");
  const btnInsertionSort = e.target.closest(".insertion-sort");
  const btnQuickSort = e.target.closest(".quick-sort");
  const btnMergeSort = e.target.closest(".merge-sort");
  const btnHeapSort = e.target.closest(".heap-sort");

  allSortTypes.forEach((el) => {
    if (el.id !== e.target.id) {
      el.classList.add("disable");
    }
  });

  // CREATE NEW ARRAY
  if (e.target === createArray) {
    const arrayElement = Array.from(
      document.querySelectorAll(".array-element")
    );

    visualisationBox.innerHTML = "";
    generateArray(arrayElement.length);
  }

  // SORT ALGORITMS
  if (e.target === btnBubbleSort) {
    listener(bubbleSort, delay);
  }

  if (e.target === btnSelectionSort) {
    listener(selectionSort, delay);
  }

  if (e.target === btnInsertionSort) {
    listener(insertionSort, delay);
  }

  if (e.target === btnQuickSort) {
    listenerQuickSort();
  }

  if (e.target === btnMergeSort) {
    console.log("merge");
  }

  if (e.target === btnHeapSort) {
    listener(heapSort, delay);
  }
});
