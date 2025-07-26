const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all fields!');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.value.match(emailPattern)) {
    alert('Please enter a valid email address!');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});

