  function capsLock(){
  
     let str=''
     for(let i=0;i<messages.length;i++){
       str=str+' '+messages[i].toUpperCase()
     }
    return str
  }

  const argsList=process.argv
  const messages=argsList.slice(2)
  let result=capsLock(messages)
  console.log(result)