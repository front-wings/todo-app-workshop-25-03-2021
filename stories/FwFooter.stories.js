// TODO: update story with footer args
import { html } from 'lit-html';
import '../src/fw-footer.js';

export default {
  title: 'Components / Footer',
  component: 'fw-footer',
  argTypes: {},
};

function Template() {
  return html`<fw-footer></fw-footer>`;
}

export const Footer = Template.bind({});
Footer.args = {};
