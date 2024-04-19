document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('complaintForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const complaint = formData.get('complaint');

        // Here you can handle the submission of the form, like sending the data to your server

        alert('Thank you for your complaint. We will get back to you soon.');
        form.reset();
    });
});
