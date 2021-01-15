const DELAY = 2000;
const todos = [
  { isDone: false, title: 'Hello Todos' },
  { isDone: false, title: 'More Todos' },
  { isDone: false, title: 'even more Toodos' },
  { isDone: true, title: 'create Todo App' },
];

const waitForIt = async it =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(it);
    }, DELAY);
  });

export const TodoService = {
  getTodoList: () => waitForIt(todos),
  addTodoItem: item => {
    todos.push(item);
  },
  filterBy: filter =>
    filter === 'all' ? todos : todos.filter(todo => todo[filter]),
  markAsDone: title => {
    const idx = todos.findIndex(it => it.title === title);
    todos[idx] = { ...todos[idx], isDone: true };
  },
};
