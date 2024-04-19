document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Display confirmation message
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p>Thank you, ${fullName}!</p>
        <p>Your booking for ${date} at ${time} has been confirmed.</p>
        <p>We have sent a confirmation email to ${email}.</p>
    ;
});