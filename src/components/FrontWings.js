import { LitElement, html, css } from 'lit-element';
import { TodoService } from '../services/todo.service.js';
import { openWcLogo } from '../common/open-wc-logo.js';
import './fw-todo-task.js';
import './fw-footer.js';

export class FrontWings extends LitElement {
  static get properties() {
    return {
      todos: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--front-wings-background-color, #e0e9f5);
      }

      main {
        flex-grow: 1;
      }

      h1 {
        color: #313336;
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

      .card {
        border-radius: 5px;
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
        color: #3c3f42;
      }

      .card__header a {
        font-size: 14px;
        color: #333333;
        font-weight: 700;
      }

      .card__content {
        background-color: white;
      }

      button {
        background: white;
        border: 0;
        border-radius: 5px;
        color: #6b6f75;
        cursor: pointer;
        font: 24px/1.5 sans-serif;
        margin: 1.5em auto;
        padding: 0.5em 1em;
        -webkit-tap-highlight-color: transparent;
        &,
        span {
          display: block;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = `FrontWings Todo's`;
    this.todos = [];
  }

  async __fetchTodo() {
    this.todos = await TodoService.getTodoList();
  }

  connectedCallback() {
    super.connectedCallback();
    this.__fetchTodo();
  }

  async __addTodo() {
    await TodoService.addTodoItem({
      isDone: false,
      title: 'New Todo',
    });

    this.requestUpdate();
  }

  // eslint-disable-next-line class-methods-use-this
  __filterBy(filter) {
    this.todos = TodoService.filterBy(filter);
    this.requestUpdate();
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <section class="card">
          <div class="card__header">
            <h2>Todo Type</h2>
            <div>
              <a href="#" @click=${() => this.__filterBy('all')}>All</a>
              <a href="#" @click=${() => this.__filterBy('active')}>Active</a>
              <a href="#" @click=${() => this.__filterBy('isDone')}>Done</a>
            </div>
          </div>
          <div className="card__content">
            ${this.todos.length > 0
              ? this.todos.map(
                  ({ isDone, title }) => html`
                    <fw-todo-task
                      ?isDone=${isDone}
                      title=${title}
                    ></fw-todo-task>
                  `
                )
              : html`<div class="logo">${openWcLogo}</div>`}
          </div>
        </section>
        <div>
          <button @click=${this.__addTodo}>Add Todo</button>
        </div>
      </main>

      <fw-footer></fw-footer>
    `;
  }
}
