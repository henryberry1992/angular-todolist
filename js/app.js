var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: true},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
}
TodoCtrl.prototype.submit=function(stuff)
{
  var something ={text:this.stuff, done:false};
  this.todos.push(something);
}

TodoCtrl.prototype.delete=function()
{
  for(var i =0; i<this.todos.length;i++)
  {
    if(this.todos[i].done===true)
    {
      this.todos.splice(i,1);
    }
  }
}
app.controller('TodoCtrl', TodoCtrl);

