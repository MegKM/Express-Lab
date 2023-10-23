const todos = [
    {todo: 'Look at Dog', link: "a href=look"},
    {todo: 'Pat Dog', link: "a href=pat"},
    {todo: 'Feed dog', link: "a href=feed"},
    {todo: 'Dogs are the best', link: "a href=bestDog"}
  ];

  module.exports = {
    getAll: function(){
        return todos;
    }
  };