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
                    console.log(data);
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
        <div class="profileSection">
            <img src="${user.avatar_url}" alt="${user.login}" width="100">
            <p>${user.name}
            <span><a href="${user.html_url}" target="_blank"> @${user.login ||'N/A'}</a></span></p>
            <h5 class="join">Joined : ${new Date(user.created_at).toLocaleDateString()}</h5>
        </div>
        <div class="userDetails">
        <div class="item-1"><p>Followers${user.followers}</p> </div>
        <div class="item-1"><p>Following:${user.following}</p> </div>
        <div class="item-1"><p>Public Repos:${user.public_repos}</p> </div>
        </div>
     </div>
         `;
    profile.innerHTML = html;
}

function displayError(message) {
    profile.innerHTML = `<p class="error">${message}</p>`;
}
