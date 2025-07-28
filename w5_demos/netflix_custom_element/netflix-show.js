//TODO 2: Import the CSS
import { getNetflixShowCSS } from './netflix-show-css.js';

class NetflixShow extends HTMLElement {
    constructor() {
      super();
      this.watchlisted = false;
    }
  
    connectedCallback() {
      const id = this.getAttribute("id") || "";
      const title = this.getAttribute("title") || "Untitled";
      const genre = this.getAttribute("genre") || "Unknown Genre";
      const image = this.getAttribute("image") || "";
  
      //TODO 3: Create and apply <style> using getNetflixShowCSS()
      const style = document.createElement("style");
      style.textContent = getNetflixShowCSS();
      this.appendChild(style);

      //TODO 4: Set innerHTML of the component with structure:
      this.innerHTML +=`<div class="show-card" id="${id}">
            <span class="badge">WATCHLISTED</span>
            <img src="${image}" alt="${image}">
            <div class="info">
                <div class="title">${title}</div>
                <div class="genre">${title}</div>
            </div>
        </div>`;
  
      //TODO 5: Add click listener on `.show-card` that calls this.doSomething()
      this.querySelector('.show-card').addEventListener("click", () => { this.doSomething(); });
    }
  
    doSomething() {
      //TODO 6: Toggle the watchlisted status of card and classlist to drive css behavior
      this.watchlisted = !this.watchlisted;
      this.querySelector('.show-card').classList.toggle("watchlisted", this.watchlisted);

      //TODO 7: Dispatch a CustomEvent called "watchlist-toggle" with { bubbles: true }
      const event =  new CustomEvent("watchlist-toggle", {
        bubbles: true
      });
      this.dispatchEvent(event);
    }

  }
  
  console.log("netflix-show element defined");
  
  //TODO 1: Register the custom element with the custom tag
  customElements.define("netflix-show", NetflixShow);