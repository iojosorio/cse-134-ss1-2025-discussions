//CSS for our custom component, no need to do anything here!
export function getNetflixShowCSS() {
    return `
      .show-card {
        background-color: #222;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
        text-align: left;
        cursor: pointer;
        position: relative;
        transition: transform 0.2s ease;
        max-width: 200px;
      }
  
      .show-card:hover { transform: scale(1.05); }
  
      .show-card img {
        width: 100%;
        display: block;
      }
  
      .info {
        padding: 10px;
      }
  
      .title {
        font-weight: bold;
        font-size: 1rem;
        color: #fff;
      }
  
      .genre {
        font-size: 0.85rem;
        color: #bbb;
      }
  
      .badge {
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: red;
        color: white;
        padding: 4px 8px;
        font-size: 0.75rem;
        font-weight: bold;
        border-radius: 5px;
        display: none;
      }
  
      .watchlisted .badge {
        display: block;
      }
    `;
  }