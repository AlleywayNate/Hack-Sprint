// Array of random friend names
const friends = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];

// Function to generate random friends
function generateRandomFriends() {
    const friendsList = document.getElementById('friends-list');

    // Clear existing friends
    friendsList.innerHTML = '';

    // Generate random friends
    for (let i = 0; i < 3; i++) {
        // Randomly select a friend from the array
        const randomIndex = Math.floor(Math.random() * friends.length);
        const friend = friends[randomIndex];

        // Create list item for the friend
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="fake_friend_profile_${i + 1}.html">${friend}</a>`;
        friendsList.appendChild(listItem);
    }
}

// Call the function to generate random friends when the page loads
window.onload = generateRandomFriends;
