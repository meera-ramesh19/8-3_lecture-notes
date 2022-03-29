let count = 0;
const span = document.querySelector('h1 span');
const section=document.querySelector('section')
console.log(section)


const getCount =() =>{
 const buttons =document.querySelectorAll('button')
 buttons.forEach((button)=>{
     button.addEventListener('click',()=>{

     })

 })
}

   section.addEventListener('click', getCount)
