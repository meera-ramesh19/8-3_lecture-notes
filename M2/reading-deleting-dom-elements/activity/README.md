## Guiding Questions

- Connect the `script.js` file to the `index.html` page by adding a `script` element. What attributes are needed on the `script` element to do this?

- Add the following line to your JavaScript file. After clicking the "Run" button, does it log? (If not, check to make sure your `script` element is correctly formatted.)

  ```js
  console.log('Just testing...');
  ```

- What does `document` represent? document refers to the dom

- What data type is `document`? How do you know? object

- What is the difference between `document.querySelector()` and `document.querySelectorAll()`? Keep in mind the following when answering this question:

  - What is the functional purpose of each method? 
  to grab a single element
  - What is the return data type of each method? 
  to grab multiple elements
  - What argument is expected for each method?   callback
- What is the `defer` attribute and why is it necessary 
when writing JavaScript that accesses the DOM? so the HTML is parsed first and then js is parsed and run

- In your JavaScript file, use `document.querySelector()` to select the `h1` element. Then, log out the text that is stored inside of that element.
const h1=document.querySelector('h1');

  What attributes will allow you to select the text inside of the element?
  innerText, innerHTML,textContent

- What is the difference between the following two lines of code?

  ```js
  document.querySelector('main').innerHTML; //gives the whole tag
  document.querySelector('main').textContent;//gives only the text along with all the spaces
  ```

- Using `document.querySelector()`, select the element with a class of `emoji`. What emoji is selected? Why?

const emoji=document.querySelector('emoji')
- Is it possible to select the second emoji on the page with `document.querySelector()`? If so, how? If not, why not?
const heading=document.querySelector('h1')
heading.getElementsByTagName('span')[1]
- Select all of the emojis on the page with `document.querySelectorAll()`. Then, loop through the returned value and log out the content of each element.

  How did you choose to loop through the `NodeList`?
 using foreach() method
- Write code that removes all of the emojis from the page. Why must you use some kind of loop to do this?

const emojis=document.querySelectorAll('emoji')
emoji.forEach((em)=>em.remove())
- What code could you write that would remove _only_ the second emoji from the page? If possible, think of multiple ways to perform this task.
const heading=document.querySelector('h1')
heading.getElementsByTagName('span')[1].remove

const emojis=document.getByClassName('emoji')
emojis[0].remove()
- Based on what you know so far, is there a way to remove only your birthday from the page, excluding the text "My Birthday:"? If so, how so? If not, why not?
const label=document.querySelector('label')
label.remove()
