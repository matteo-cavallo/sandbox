const texts = [
  "will make you fall in love with data",
  "is the best internet rabbit hole",
  "brings you hot takes on data",
  "makes cool shit with data",
];

let index = 0;
const textElement = document.querySelector(".animate")!;
textElement.textContent = texts[index];

textElement.addEventListener("animationiteration", () => {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
});
