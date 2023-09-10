const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const profile = document.getElementById('profile');

searchBtn.addEventListener('click', () => {
    const username = searchInput.value.trim();

    if (username !== '') {
        fetchUserProfile(username)
            .then((data) => {
                if (data.message === 'Not Found') {
                    displayError('User not found');
                } else {
                    displayUserProfile(data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                displayError('An error occurred while fetching data.');
            });
    }
});

function fetchUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json());
}

function displayUserProfile(user) {
    const html = `
        <div class="data">
            <img src="${user.avatar_url}" alt="${user.login}" width="100">
            <h2>${user.login}</h2>
            <p>Name: ${user.name || 'N/A'}</p>
            <p>Location: ${user.location || 'N/A'}</p>
            <p>Followers: ${user.followers}</p>
            <p>Following: ${user.following}</p>
            <p>Public Repos: ${user.public_repos}</p>
            <a href="${user.html_url}" target="_blank">View Profile</a>
        </div>
         `;
    profile.innerHTML = html;
}

function displayError(message) {
    profile.innerHTML = `<p class="error">${message}</p>`;
}
