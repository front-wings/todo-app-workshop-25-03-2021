import { html, fixture, expect } from '@open-wc/testing';

import '../src/front-wings.js';

describe('FrontWings', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<front-wings></front-wings>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal("FrontWings Todo's");
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
