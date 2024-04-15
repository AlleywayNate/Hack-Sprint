// Sample data for friends and posts
const friends = ["Alice", "Bob", "Charlie", "David", "Emma"];
const posts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"];

// Function to generate random friends
function generateRandomFriends() {
    const friendsList = document.getElementById('friends-list');

    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = friend;
        friendsList.appendChild(listItem);
    });
}

// Function to generate random posts
function generateRandomPosts() {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = post;
        postsContainer.appendChild(postElement);
    });
}

// Call the functions to generate random friends and posts when the page loads
window.onload = function() {
    generateRandomFriends();
    generateRandomPosts();
};
