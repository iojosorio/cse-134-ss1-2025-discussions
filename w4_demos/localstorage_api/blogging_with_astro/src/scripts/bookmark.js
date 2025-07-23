document.addEventListener("DOMContentLoaded", () => {
    //get reference to the bookmark button element
    const btn = document.getElementsByClassName("bookmarkBtn")[0];
    if (!btn)
        return;
    const key = btn.dataset.id;

    //load button's current state and display button text accordingly
    let storedVal = localStorage.getItem(key);
    if(storedVal === null){
      const defaultVal = JSON.stringify({isBookmarked: false});
      localStorage.setItem(key, defaultVal);
      storedVal = defaultVal;
    }
    const currState = JSON.parse(storedVal).isBookmarked;
    displayButtonText(currState);

    //Toggle state on click and display button text accordingly
    btn.addEventListener("click", () => {
      const newState = !currState; 
      const newVal = JSON.stringify({isBookmarked: newState});
      localStorage.setItem(key, newVal);
      displayButtonText(newState);
    });
  
    //method to display different text based on state "isBookmarked"
    function displayButtonText(isBookmarked) {
      btn.textContent = isBookmarked ? "✅ Bookmarked" : "🔖 Bookmark";
    }

    //TODO: Store bookmark's status in localStorage for persistence upon reload
});