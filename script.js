function submitContact(event) {

    event.preventDefault();

    const name = document.getElementById('name').value;

    document.getElementById('confirmation').innerText = `Thank you, ${name}! Your message has been sent successfully 😊.`;

    document.getElementById('name').value = '';

    document.getElementById('email').value = '';

    document.getElementById('message').value = '';

}