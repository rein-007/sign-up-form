document.getElementById('sign-up-form').addEventListener('input', function () {
    validateForm();
});

function validateForm() {
    const createAccount = document.getElementById('create-account');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const passwordValidate = document.getElementById('password-validate');

    if (password!=confirmPassword) {
        passwordValidate.textContent = '*Password do not match';
        createAccount.classList.remove('enabled');
        createAccount.disabled = true;
    } else {
        passwordValidate.textContent = '';
        createAccount.classList.add('enabled');
        createAccount.disabled = false;
    }
}