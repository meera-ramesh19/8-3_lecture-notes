import { Component } from 'react';

function Hello() {
    const name = "Jimmy";
    return <h1> Hello {name}! </h1>
}
export default Hello;

//  const Hello extends Component {
//   constructor() {
//       super()
//       this.name = "Jimmy"
//   }
//    render(){
//     return <h1> Hello {this.name}!</h1>
//   }
//  }
  
// export default Hello;
  




function BookList(){
    const titles = ["moby dick", "the great gatsby", "of mice and men"]
  
    return (
      <ul className="book-titles">
        {titles.map(title => <li>{title}</li>)}
      </ul>
    )
  }
export default BookList;


import { Component } from 'react';
class Card extends Component {
    constructor(cardTitle,author,songTitle,description){
        super()
        this.cardTitle = "Song Info"
        this.author = "Andrew Bird"
        this.songTitle = "Danse Caribe"
        this.description = "A wonderful song off of the album 'Break it yourself'"
    }
    render(){
    return (
      <div className="card">
        <h1 className="card-title" >{this.cardTitle}</h1>
        <h2 className="author-title" > {this.author} - {this.context}{this.songTitle}</h2>
        <p> {this.description} </p>
      </div>
    )
    }
  }
  
  export default Card;
