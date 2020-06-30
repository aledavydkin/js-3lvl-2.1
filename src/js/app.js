const board = document.querySelector('.board');
for (let i = 0; i < 16; i += 1) {
  board.insertAdjacentHTML('afterbegin', '<div class="cell"></div>');
}

const imgEl = document.createElement('img');
imgEl.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png';
const test = Array.from(document.querySelectorAll('.cell'));

let nextIndex = 0;
let lastIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  function random(min, max) {
    const minNumber = Math.ceil(min);
    const maxNumber = Math.floor(max);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }

  const randomNumber = (arr) => random(0, arr.length - 1);

  setInterval(() => {
    if (nextIndex === lastIndex) {
      nextIndex = randomNumber(test);
    }

    test[nextIndex].insertBefore(imgEl, null);
    lastIndex = nextIndex;
  }, 2000);
});
