const form = document.querySelector('.login-form');

const onSubmit = event => {
    event.preventDefault();
    const options = {
        Email: event.currentTarget.elements.email.value.trim(),
        Password: event.currentTarget.elements.password.value.trim(),
    };
    if (!options.Email || !options.Password) return alert('All fields must be completed!');
    console.log(options);
    form.reset();
};

form.addEventListener('submit', onSubmit);