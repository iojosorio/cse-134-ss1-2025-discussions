// TODO 1: Add event listener to form submit overriding default behavior (don't refresh)
document.getElementById('newsletter-form').addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    if(email === null || interest === null){
        alert('Both fields are required');
    }

    const confirmationBox = document.getElementById('confirmation');
    confirmationBox.innerHTML = `<p>You have signed up using ${email} to received updates about <strong>${interest}</strong>.</p>`
    confirmationBox.style.backgroundColor = "lightblue";
    confirmationBox.hidden = false;

    this.reset();    
})
// TODO 2: Read the values of email and interest from the form fields

// TODO 3: Add basic checks to ensure both fields are filled (since they're required)

// TODO 4: Display a confirmation message using the values

// TODO 5: Reset the form after submit