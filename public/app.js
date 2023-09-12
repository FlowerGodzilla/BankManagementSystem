// JavaScript code for handling server interactions

// User login function
function login(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === 'Welcome to Your Dashboard') {
            window.location.href = '/dashboard';
        }
    });
}

// User sign up function
function signup(event) {
    event.preventDefault();
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var branch = document.getElementById("branch").value;
    var netAmount = document.getElementById("netAmount").value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, branch, netAmount })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
}

// Admin login function
function adminLogin(event) {
    event.preventDefault();
    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;

    fetch('/admin-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === 'Welcome, Admin') {
            window.location.href = '/admin-dashboard';
        }
    });
}

// Admin actions
function removeUser() {
    var username = prompt("Enter the username to remove:");
    if (username !== null) {
        fetch('/remove-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        });
    }
}

function editBalance() {
    var username = prompt("Enter the username to edit bank balance:");
    if (username !== null) {
        var balance = prompt("Enter the new bank balance:");
        if (balance !== null && !isNaN(balance)) {
            fetch('/edit-balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, balance })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
        } else {
            alert("Invalid input. Please enter a number.");
        }
    }
}
