console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
});
});
console.log('After');

function getUser(id, callback ) {
    setTimeout(() => {
        console.log('Reading a user from db..');
        callback({ id: id, gitHubUsername: 'biju'});
}, 2000);
}

function getRepositories(username,callback) {
    setTimeout(() => {
        console.log('Reading a user from db..');
        callback (['repo1','repo2','repo3']);
}, 2000);
}