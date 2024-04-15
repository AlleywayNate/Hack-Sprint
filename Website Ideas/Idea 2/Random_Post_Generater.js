// Define an array of random posts
const posts = [
    { title: "Post 1", content: "Content for post 1" },
    { title: "Post 2", content: "Content for post 2" },
    { title: "Post 3", content: "Content for post 3" },
    { title: "Post 4", content: "Content for post 4" },
    { title: "Post 5", content: "Content for post 5" }
    // Add more posts as needed
];

// Function to generate random posts
function generateRandomPosts() {
    const postsContainer = document.getElementById('posts-container');

    // Clear existing posts
    postsContainer.innerHTML = '';

    // Generate random post indexes
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    // Append random posts to the posts container
    randomIndexes.forEach(index => {
        const post = posts[index];
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Call the function to generate random posts when the page loads
window.onload = generateRandomPosts;
