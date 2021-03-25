import { css, html, LitElement } from "lit-element";
import { TodoService } from "../services/todo.service.js";

export class FwTodoTask extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      isDone: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        .todo-task {
          color: #6b6f75;
          border: 1px solid #e4edf7;
          align-items: center;
          background-color: white;
          display: flex;
          padding: 0.75em 1.5em;
        }

        .todo-task__label {
          font-size: 18px;
          font-weight: bold;
          width: 100%;
        }

        .fw-checkbox-container {
          width: 22px;
          height: 22px;
          position: relative;
          display: block;
          margin-right: 1rem;
        }

        #checkbox {
          width: 1rem;
          height: 1rem;
          position: absolute;
          left: 0;
          opacity: 0;
          cursor: pointer;
          z-index: 1;
        }

        .fw-checkbox {
          position: absolute;
          top: 0;
          left: 0;
          width: 1rem;
          height: 1rem;
          border: 0.2rem solid #e0e9f5;
          border-radius: 5px;
          transition: border-color 0.5s;
        }

        .fw-checkbox::after {
          content: "✔";
          color: var(--checkbox-color, #50498f);
          font-size: 1rem;
          opacity: 0;
          display: block;
          height: 1rem;
        }

        #checkbox:hover ~ .fw-checkbox {
          border-color: #bfd4de;
        }

        #checkbox:checked ~ .fw-checkbox::after {
          opacity: 1;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.title = undefined;
    this.isDone = false;
  }

  __markAsDone() {
    TodoService.markAsDone(this.title);
  }

  render() {
    const { __markAsDone, isDone, title } = this;

    return html`
      <div class="todo-task">
        <div class="fw-checkbox-container">
          <input
            id="checkbox"
            type="checkbox"
            .checked=${isDone}
            @click=${__markAsDone}
          />
          <div class="fw-checkbox"></div>
        </div>
        <label class="todo-task__label" for="checkbox">${title}</label>
      </div>
    `;
  }
}
