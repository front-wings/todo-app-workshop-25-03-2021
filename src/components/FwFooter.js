import { css, html, LitElement } from 'lit-element';

export class FwFooter extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        p {
          font-size: calc(12px + 0.5vmin);
          align-items: center;
        }

        a {
          margin-left: 5px;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.msg = undefined;
  }

  render() {
    const { msg } = this;

    return html`
      <p>${msg ? html`${msg}` : html` copyright 2021 FrontWings `}</p>
    `;
  }
}
