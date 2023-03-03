document.getElementById('sign-in').addEventListener('click', function () {
    const emailVerify = document.getElementById('email-input');
    emailValue = emailVerify.value;

    const passwordVerify = document.getElementById('password-input');
    passwordValue = passwordVerify.value;

    if (emailValue === 'abc@computer.com' && passwordValue === '123456') {
        window.location.href = 'bank.html';
    }
    else {
        alert("You are not a valid user")
    }

});
