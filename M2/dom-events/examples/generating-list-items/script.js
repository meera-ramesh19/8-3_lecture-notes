/*
  This code enables all the inital li elements to create a new li when clicked. However, the new li elements do not have the same capability.
*/
const lis = document.querySelectorAll('li');
console.log(lis);
const generateLiHandler = () => {
  const ol = document.querySelector('ol');
  const newLi = document.createElement('li');
  newLi.textContent = 'Click me to make more!';
  newLi.addEventListener('click', generateLiHandler);
  ol.append(newLi);
};
for (let li of lis) {
  li.addEventListener('click', generateLiHandler);
}
