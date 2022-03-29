/*
  This code enables all the inital li elements to create a new li when clicked. However, the new li elements do not have the same capability.
*/
// accessing all the li in the html
const lis = document.querySelectorAll('li');
<<<<<<< HEAD
console.log(lis);
const generateLiHandler = () => {
  const ol = document.querySelector('ol');
  const newLi = document.createElement('li');
  newLi.textContent = 'Click me to make more!';
  newLi.addEventListener('click', generateLiHandler);
  ol.append(newLi);
};
=======

const generateLiHandler = () => {
  // access the order list
  const ol = document.querySelector('ol');
  // create a new list item
  const newLi = document.createElement('li');
  // add new text to the new list item
  newLi.textContent = 'Click me to make more!';
  // add an event listener to the new list item!
  newLi.addEventListener('click', generateLiHandler);
  // append the new list item to the ordered list
  ol.append(newLi);
};

// loop through the li
>>>>>>> 9340daa8869ad179f701009d67bd3e3b4df8b690
for (let li of lis) {
  li.addEventListener('click', generateLiHandler);
}
