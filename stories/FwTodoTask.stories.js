import { html } from 'lit-html';
import '../src/fw-todo-task.js';

export default {
  title: 'Components / Todo',
  component: 'fw-todo-task',
  argTypes: {},
};

function Template({ title, finished }) {
  return html`
    <fw-todo-task .title=${title} .finished=${finished}> </fw-todo-task>
  `;
}

export const TodoTask = Template.bind({});
TodoTask.args = {
  title: 'My app',
  isDone: false,
};
