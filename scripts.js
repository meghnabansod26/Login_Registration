let registeredUsers = [];

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && password) {
        const user = {
            name: name,
            email: email,
            password: password
        };
        registeredUsers.push(user);
        console.log('Registration successful for:', name);
        alert('Registration successful');

        showLoginForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (user) {
        console.log('Login successful with email:', email);
        alert('Login successful');
    } else {
        alert('Invalid email or password.');
    }
}

function showLoginForm() {
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
}
