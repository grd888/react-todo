var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  }
};

// [
//   {
//     id: uuid(),
//     text: 'Walk the dog',
//     completed: false
//   },
//   {
//     id: uuid(),
//     text: 'Clean the yard',
//     completed: true
//   },
//   {
//     id: uuid(),
//     text: 'Feed the cat',
//     completed: true
//   },
//   {
//     id: uuid(),
//     text: 'Wash the car',
//     completed: false
//   }
// ]
