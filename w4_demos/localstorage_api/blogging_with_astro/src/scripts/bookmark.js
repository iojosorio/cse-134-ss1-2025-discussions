document.addEventListener("DOMContentLoaded", () => {
    //get reference to the bookmark button element
    const btn = document.getElementsByClassName("bookmarkBtn")[0];
    if (!btn)
        return;

    //load button's current state and display button text accordingly
    const currState = false;
    displayButtonText(currState);

    //Toggle state on click and display button text accordingly
    btn.addEventListener("click", () => {
      const newState = !currState; 
      displayButtonText(newState);
    });
  
    //method to display different text based on state "isBookmarked"
    function displayButtonText(isBookmarked) {
      btn.textContent = isBookmarked ? "✅ Bookmarked" : "🔖 Bookmark";
    }

    //TODO: Store bookmark's status in localStorage for persistence upon reload
});