//TODO 2: Import the CSS
import { getNetflixShowCSS } from './netflix-show-css.js';

class NetflixShow extends HTMLElement {
    constructor() {
      super();
      this.watchlisted = false;
    }
  
    connectedCallback() {
      const title = this.getAttribute("title") || "Untitled";
      const genre = this.getAttribute("genre") || "Unknown Genre";
      const image = this.getAttribute("image") || "";
  
      //TODO 3: Create and apply <style> using getNetflixShowCSS()
                    
      //TODO 4: Set innerHTML of the component with structure:
        // `<div class="show-card">
        //     <span class="badge">WATCHLISTED</span>
        //     <img src="..." alt="...">
        //     <div class="info">
        //         <div class="title">...</div>
        //         <div class="genre">...</div>
        //     </div>
        // </div>`;
  
      //TODO 5: Add click listener on `.show-card` that calls this.doSomething()
    }
  
    doSomething() {
      //TODO 6: Toggle the watchlisted status of card and classlist to drive css behavior
      
      //TODO 7: Dispatch a CustomEvent called "watchlist-toggle" with { bubbles: true }
    }

  }
  
  console.log("netflix-show element defined");
  
  //TODO 1: Register the custom element with the custom tag
