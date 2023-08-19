export const swap = function (firstElement, secondElement) {
  let temp1 = firstElement.style.height;
  firstElement.style.height = secondElement.style.height;
  secondElement.style.height = temp1;

  let temp2 = firstElement.innerText;
  firstElement.innerText = secondElement.innerText;
  secondElement.innerText = temp2;

  // console.log(firstElement, secondElement);
};

export const wait = async function (time) {
  await new Promise((resolve) => setTimeout(resolve, time * 1000));
};

export const giveColor = function (element, color) {
  element.style.backgroundColor = color;
};
