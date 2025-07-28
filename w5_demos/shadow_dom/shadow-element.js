class LeakyBox extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
          <style>
            p {
              color: green;
            }
          </style>
          <p>This style is protected!</p>
        `;
        this.shadowRoot.appendChild(wrapper);
    }
  }
  customElements.define('leaky-box', LeakyBox);