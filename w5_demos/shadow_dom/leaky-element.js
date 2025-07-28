class LeakyBox extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
      //TODO: add a style in the innerHTML to override paragraph's color
      this.innerHTML = 
      `<style> p {color: green} </style>
      <p>This should be styled independently, but is it?</p> `;
    }
  }
  customElements.define('leaky-box', LeakyBox);