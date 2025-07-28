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
  
      //TODO: fetch show metadata (watchlisted status) from localStorage
      this.watchlisted = localStorage.getItem(`watchlist_${id}`) === "true";
      
      const style = document.createElement("style");
      style.textContent = getNetflixShowCSS();
      this.innerHTML = '';
      this.appendChild(style);
      this.innerHTML += `
                    <div class="show-card $" id="${id}">
                        <span class="badge">WATCHLISTED</span>
                        <img src="${image}" alt="${image}">
                        <div class="info">
                            <div class="title">${title}</div>
                            <div class="genre">${genre}</div>
                        </div>
                    </div>
                    `;
      //TODO: change classList to show the badge
      if (this.watchlisted) {
        this.querySelector(".show-card").classList.add("watchlisted");
      }
      
      this.querySelector('.show-card').addEventListener('click', () => this.doSomething());
    }
  
    doSomething() {
      this.watchlisted = !this.watchlisted;
      this.querySelector('.show-card').classList.toggle("watchlisted", this.watchlisted);

      //TODO: set show metadata (watchlisted status) to localStorage
      const id = this.getAttribute("id");
      localStorage.setItem(`watchlist_${id}`, this.watchlisted);
      
      const event = new CustomEvent('watchlist-toggle', {
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }
  
  console.log("netflix-show element defined");
  customElements.define("netflix-show", NetflixShow);