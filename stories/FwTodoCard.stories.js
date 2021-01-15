import { html } from 'lit-html';
import { openWcLogo } from '../src/open-wc-logo.js';

export default {
  title: 'Components / Todo',
  component: 'fw-todo-card',
  argTypes: {},
};

function Template({ todos }) {
  return html`
    <style>
      .card {
        border-radius: 25px;
        box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.48);
      }

      .card__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem 0.1rem;
      }

      .card__header h2 {
        font-size: 18px;
        color: #6b6f75;
      }

      .card__header a {
        font-size: 14px;
        color: #e0adb8;
        font-weight: 700;
      }

      .logo {
        display: flex;
        padding: 2rem;
      }

      .logo > svg {
        --size: 100px;
        margin: auto;
        animation: app-logo-spin infinite 20s linear;
        height: var(--size);
        width: var(--size);
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    </style>
    <section class="card">
      <div class="card__header">
        <h2>Todo Type</h2>
        <div>
          <a href="#" @click=${this.__filterBy}>Active</a>
          <a href="#" @click=${this.__filterBy}>Done</a>
          <a href="#" @click=${this.__filterBy}>Archive</a>
        </div>
      </div>
      <div className="card__content">
        ${todos.length <= 0
          ? html`<fw-todo-task title=${todos[0].title}></fw-todo-task>`
          : html`<div class="logo">${openWcLogo}</div>`}
      </div>
    </section>
  `;
}

export const TodoCard = Template.bind({});
TodoCard.args = {
  todos: [{ isDone: false, title: 'Some Todo' }],
};
