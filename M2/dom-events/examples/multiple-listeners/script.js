let count = 0;
const span = document.querySelector('h1 span');
const buttons = document.querySelectorAll('section');
console.log(buttons);

const getCount = (e) => {
  console.log('target', e.target);
  let count = parseInt(span.textContent) + 1;
  span.textContent = count.toString();
};


buttons.forEach((button) => {
  button.addEventListener('click', getCount);
});
