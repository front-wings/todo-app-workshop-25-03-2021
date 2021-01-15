import { html } from 'lit-html';
import '../src/front-wings.js';

export default {
  title: 'Pages / Index',
  component: 'front-wings',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <front-wings
      style="--front-wings-background-color: ${backgroundColor || '#eee'}"
      .title=${title}
    >
    </front-wings>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
