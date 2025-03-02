document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('signupSection').style.display = 'none';
});

document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('signupSection').style.display = 'block';
    document.getElementById('loginSection').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert('Logged in successfully!');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
    alert('Signed up successfully!');
});

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const content = document.getElementById('postContent').value;
    const postElement = document.createElement('div');
    postElement.textContent = content;
    document.getElementById('postsList').appendChild(postElement);
    document.getElementById('postForm').reset();
});

document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoUrl').value;
    const videoElement = document.createElement('div');
    videoElement.innerHTML = `<h3>${title}</h3><video src="${url}" controls></video>`;
    document.getElementById('videosList').appendChild(videoElement);
    document.getElementById('videoForm').reset();
});