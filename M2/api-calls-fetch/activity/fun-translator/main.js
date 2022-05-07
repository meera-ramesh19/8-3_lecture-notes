let inputElement = document.querySelector('#input');
let outputArea = document.querySelector('#output');
let translateBtn = document.querySelector('#translate');

const url = 'https://api.funtranslations.com/translate/morse.json';
let obj;
const displayData = (data) => {
  outputArea.innerText = data.contents.translated;
};

const translate = async (value) => {
  const res = await fetch(`${url}?text=${value}`);
  const data = await res.json();
  console.log(data);
  // displayData(data)
};

translateBtn.addEventListener('click', (e) => {
  let inputValue = inputElement.value;
  translate(inputValue);
});
