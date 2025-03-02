document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const postForm = document.getElementById('postForm');
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');
    const postsSection = document.getElementById('postsSection');
    
    let isLoggedIn = false;

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle login logic here
            isLoggedIn = true;
            alert('Logged in successfully!');
            window.location.href = "index.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle signup logic here
            alert('Signed up successfully!');
            window.location.href = "login.html";
        });
    }

    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!isLoggedIn) {
                alert('You must be logged in to post.');
                window.location.href = "login.html";
                return;
            }
            const content = document.getElementById('postContent').value;
            const file = document.getElementById('postFile').files[0];
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<p>${content}</p>`;
            if (file) {
                const fileElement = document.createElement('p');
                fileElement.innerHTML = `File: ${file.name}`;
                postElement.appendChild(fileElement);
            }
            document.getElementById('postsList').appendChild(postElement);
            postForm.reset();
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            isLoggedIn = false;
            alert('Logged out successfully!');
            window.location.href = "index.html";
        });
    }

    if (window.location.pathname.endsWith('index.html')) {
        if (isLoggedIn) {
            postsSection.style.display = 'block';
            loginLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            postsSection.style.display = 'none';
            loginLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }
});