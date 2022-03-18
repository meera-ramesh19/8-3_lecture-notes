// The array below stores data for a todo list application.

const exampleTodos = require('./todo-data.js');

/**
 * percentComplete
 *
 * Should throw an error if there are no todos
 *
 * @param {Object[]} todos
 * @returns {Number || Error} - a number between 0 and 100 indicating the percent of tasks that have been completed
 */
function percentComplete(todos, id) {
  if (!todos.length) throw 'todos is empty';
  let ids = todos.reduce((acc, val) => {
    val.status.complete ? (acc += 1) : acc;

    return acc / todos.length;
  }, 0);
  return `${Math.floor(ids * 100)}%`;
}
console.log(percentComplete(exampleTodos, 'd9rwm45'));
console.log(percentComplete([]));
/**
 * isTodoDueOn
 *
 * write a function with two parameters (todos and date) and checks if any item is due on that date.
 * If no date is provided, the value of the date parameter should default to "1/1/1970".
 *
 * @param {Object[]} todos
 * @param {String} date - formatted like "1/1/1970"
 * @s {Boolean} - indicates whether any task is due on the provided date
 *
 *  => ex: isTodoDueOn(exampleTodos, "3/11/2022") // => true
 *  => ex: isTodoDueOn(exampleTodos) // => false (since no todo in exampleToDos is due on 1/1/1970)
 */
// function isTodoDueOn(todos, dueDate) {
//   //   import 'moment' from moment;

//   // let isoDate = "2021-09-19T05:30:00.000Z";

//   // let newDate =  moment.utc(isoDate).format('MM/DD/YY');
//   // let date=new Date(dueDate)
//   // function convertUTCDateToLocalDate(date) {
//   //   var newDate = new Date(
//   //     date.getTime() + date.getTimezoneOffset() * 60 * 1000
//   //   );

//   //   var offset = date.getTimezoneOffset() / 60;
//   //   var hours = date.getHours();

//   //   newDate.setHours(hours - offset);

//   //   return newDate;
//   // }
//   // var date = convertUTCDateToLocalDate(new Date(dueDate));
//   // console.log(date.toLocaleString());
//   let result = todos.find((todo) => {
//     let str = todo.status.due;
//     let strings = new Date(todo.status.due);
//     let found = strings.toString();
//     // console.log(found);
//     let reversed = dueDate.split('/').reverse();

//     let dueDateFound = `${reversed[0]}-${reversed[2]}-${reversed[1]}`;
//     console.log(str, dueDateFound);
//     console.log(new Date(dueDateFound).getTime() === new Date(str).getTime());
//     // let found = new Date(dueDateFound);
//     // console.log(found);
//     let newfounds = new Date(dueDate).toString();
//     let dues = newfounds.toString();
//     // let newfound = Date.parse(new Date(dueDate));
//     // console.log('new found==', newfounds, 'found=', found);
//     // console.log(newfounds.valueOf() === found.valueOf());
//     // console.log(newfound.toString() === found.toString());
//   });
//   //console.log('result=', result);
// }
function isTodoDueOn(todos, dueDate = '1/1/1970') {
  // toptal.com/software/definitive-guide-to-datetime-manipulation
  const parts = dueDate.split('/');
  const userDate = parts[2] + '-' + parts[0] + '-' + parts[1];
  // const userEnteredDate = new Date(userDate);
  // console.log(userEnteredDate.toLocaleDateString('en-US'));
  let todoDueDate = '';
  let result = todos.find((todo) => {
    todoDueDate = todo.status.due;
    let todoDates = todo.status.due.substr(0, 10);
    const todoparts = todoDates.split('-');
    const todoDate = todoparts[0] + '-' + todoparts[1] + '-' + todoparts[2];
    // let dateFromDB = new Date(todoDueDate);
    // console.log(userDate, todoDate);
    let g1 = new Date(userDate);
    let g2 = new Date(todoDate);
    let isSame
    if (g1.getTime() < g2.getTime()) isSame= 'false';
    else if (g1.getTime < g2.getTime()) isSame= 'false';
    else isSame= 'true';
    //console.log(dateFromDB.toLocaleDateString('en-US'));
    return isSame
  });
  return result
}
 console.log(isTodoDueOn(exampleTodos, '3/11/2022'));
 console.log(isTodoDueOn(exampleTodos));
/**
 * allRelatedItemsComplete
 *
 * write a function with two parameters (todos and id), that checks if EVERY todo item related to the given id is complete.
 * If no todo item matches the id provided, your function should throw an error with a helpful error message.
 *
 * @param {Object[]} todos
 * @param {String} id
 * @returns {Boolean || Error} - indicates whether all todos related to the given id have been completed
 *
 *   => ex: allRelatedItemsComplete(exampleTodos, "ba9tyk4") // => true
 *   => ex: allRelatedItemsComplete(exampleTodos, "ehw49g0") // => false
 *   => ex: allRelatedItemsComplete(exampleTodos, "zbacasq") // ERROR
 */
// function allRelatedItemsComplete(todos, id) {
//   let todoItem = todos.find((todo) => todo.id === id);
//   if (!todoItem) {
//     throw 'Could not ind todo item with id:${id}';
//   }

//   return todoItem.relatedTo.every((relatedId) => {
//     let relatedToDoItem = todos.find((todo) => todo.id === relatedId);
//     // console.log(relatedToDoItem.status.complete)
//     return relatedToDoItem.status.complete;
//   });
// }
function allRelatedItemsComplete(todos, id) {
  let todoItem = todos.find((todo) => todo.id === id);
  if (!todoItem) {
    throw 'Could not ind todo item with id:${id}';
  }
  // console.log(todoItem);
  // let filtered = todos.filter((todo) => {
  //   return todo.id === id;
  // });
  // console.log(filtered[0].relatedTo);
  let idstatus = todos.filter((todo) => {
    let completed = todos.find((tod) => tod.id === todoItem.relatedTo);
    console.log(completed);
  });
  return idstatus;
  // let result = idstatus.map((todo) => todo.status.complete);
  // console.log(result);
}

// console.log(allRelatedItemsComplete(exampleTodos, 'ba9tyk4')); // => true
// console.log(allRelatedItemsComplete(exampleTodos, 'ehw49g0')); // => false
// allRelatedItemsComplete(exampleTodos, 'zbacasq'); // ERROR
/**
 * getStatuses
 *
 * write a function that returns a list of todo item descriptions and statuses.
 *
 * @param {Object[]} todos
 * @returns {String[]} - array of strings that have a task description and status
 *
 *   => example: getStatuses(exampleTodos) // => ["Chop vegetables: COMPLETE", "Make dinner: INCOMPLETE", ..., "Fold clothes: COMPLETE"]
 */
function getStatuses(todos) {
  let completed = todos.map((todo) => {
    let desc = todo.description;
    let statusid = todo.status.complete ? 'COMPLETE' : 'INCOMPLETE';

    return `${desc}: ${statusid}`;
  });
  console.log(completed);
}
// console.log(getStatuses(exampleTodos));
/**
 * getIncompleteDescriptions
 *
 * write a function that returns a list of todo item descriptions, just for the incomplete tasks.
 *
 * @param {Object[]} todos
 * @returns {String[]} - array of todo item descriptions
 *
 *   => ex: getIncompleteDescriptions(exampleTodos) // => ["Make dinner", "Clean bedroom", "Sweep floor"]
 */

function getIncompleteDescriptions(todos) {
  return todos
    .filter((todo) => !todo.status.complete)
    .map((todo) => todo.description);
}
// console.log(getIncompleteDescriptions(exampleTodos));

// Now it's your turn! Don't stop here:
// come up with additional practice problems based on the todo list that will help you practice higher order array methods, error handling, and ES6 syntax
// If you find yourself getting stuck, try to think about features or statistics you would like a todo list application to implement.


