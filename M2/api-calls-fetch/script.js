const BASE_URL = 'https://randomuser.me/api';

// create a function to display dom elements from the api response
const displayUser = ({ results }) => {
  const [person] = results;

  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;
  const { email, picture } = person;

  const section = document.createElement('section');
  section.classList.add('card');

  // display the title, first name, lastname
  const h2 = document.createElement('h2');
  h2.textContent = fullName;

  // display the email
  const p = document.createElement('p');
  p.textContent = email;

  // display the profile photo
  const img = document.createElement('img');
  img.setAttribute('src', picture.large);
  img.setAttribute('alt', fullName);

  // append all the elements to the dom
  section.append(img, h2, p);
  document.querySelector('.people').append(section);
};

// create a function to display errors from the api call
const displayError = (error) => {
  const section = document.querySelector('section.error');
  section.style.display = 'block';

  // add the something went wrong paragraph
  const p = document.createElement('p');
  p.textContent = 'Something went wrong!';

  // add the error content
  const eMsg = document.createElement('p');
  eMsg.textContent = error;

  // append both paragraphs to the section
  section.append(p, eMsg);
};

const button = document.querySelector('button');

console.log(button.textContent);

button.addEventListener('click', () => {
  // clear out the old user data
  const people = document.querySelector('.people');
  people.innerHTML = '';

  // Fetch data from base url using fetch and promises
  fetch(BASE_URL)
    .then((res) => {
      return res.json();
    })
    .then(displayUser)
    .catch(displayError);
});

// const BASE_URL = 'https://randomuser.me/api';

// /* shorter way to write this
//   fetch(BASE_URL)
//    //return the response.json where the promise is pending
//   .then((res)=> {
//       return res.json()
//     })
//   //caputure that in a data
//   .then(displayUser)
//   .catch(displayError)

// */
// // create a function to display dom elements from the api response
// /*can destructure the response */
// const displayUser =({results}) =>{
//     console.log(results)
//     ;
//     // const { title,first,last,email}=person[0]
//     const { title,first,last } = person.name
//     const fullName =`${title} ${first} ${last}`
//     const { email ,picture} = person;

//     const section =document.createElement('section');
//     section.classList.add('card');

//     const image=document.createElement('img');
//     image.setAttribute('src',picture.large);
//     image.setAttribute('alt',fullName);

//     section.append(image);

//     const h2 = document.createElement('h2')
//     h2.textContent = fullName
//     section.append(h2);
//     const p=document.createElement('p');
//     p.textContent=email
//     document.querySelector('.people').append(section)

//   }

// /* regular display funciton
// const displayUser =(data) =>{
//   console.log(data)
// }*/

// // create a function to display errors from the api response
// const displayError =(error) =>{
//    const section=document.querySelector('section.error')
//    section.style.display='block';

//    const p=document.createElement('p')
//    p.textContent="went wrong";

//    const eMessage=document.createElement('p')
//    eMessage.textContent=error;
//    section.append(p,eMessage);
//   }

//   /* Fetch data from base url using fetch and promises*/

//   const button=document.querySelector('button');
//   button.addEventListener('click',() =>{

//     const people=document.querySelector('.people');
//     people.innerHTML=''
//     fetch(BASE_URL)
//     //return the response.json where the promise is pending
//    .then((res)=> {
//        return res.json()
//      })
//    //caputure that in a data
//    .then((result)=> {
//        displayUser(result)
//    })
//    .catch(err=>{
//        console.log(err)
//    });
//   });
