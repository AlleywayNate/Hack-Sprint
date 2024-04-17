const initialContent = document.querySelector('.initial-content');
const itemsContainer = document.querySelector('.items-container');
const textContainer = document.getElementById('text-container');

let page = 1;

function fetchItems() {
  // Simulating fetching data from an API
  fetch(`https://example.com/api/items?page=${page}`)
    .then(response => response.json())
    .then(data => {
      // Append new items to the container
      data.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.textContent = item.title; // Assuming item has a 'title' property
        itemsContainer.appendChild(newItem);
      });
      page++; // Increment page number for next fetch
    })
    .catch(error => console.error('Error fetching items:', error));
}

// Initial fetch
fetchItems();

// Add event listener for scrolling
window.addEventListener('scroll', () => {
  // If scrolled to bottom, fetch more items
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchItems();
  }

  // Change background darkness based on scroll position
  const scrollPercentage = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
  const darkness = Math.min(scrollPercentage / 100, 0.9); // Limit darkness to 90%
  document.body.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
});

// Hide initial content when scrolling starts
window.addEventListener('scroll', () => {
  initialContent.style.opacity = '0';
  initialContent.style.transition = 'opacity 0.5s ease-out';
});

function generateRandomText() {
  // Array of words to generate text from

  const words = ["L̵̢͔̰͍͔̦̩̜͖̉̀ó̸̯̖̯̙̻̃̃̈̐́̉̋̅r̵̨̧̛̲̤̳̙̮͔̉͌͠ę̶̲̖̩̤̞̆̑͊m̶̢̞̮͍̞̰̞̳̏", "ȋ̵̬̹̽͝p̵͍͊̔̏̈́s̸̱̠̳͎̞̳̮̗̈́͑̃̑̇͠u̵͔̠̠͚̣̘̫̠͝m̷̺͑̑̇͑͑̃͐̕", "d̷̢̹̼̯̱̬̞̱̲̗̿͛͆̃̂ò̴̩̙̝̘̲̥̬̄͑̀͆̾̈́̑̕̚ļ̴̛̙̖͚͖̰̠̬̯̏̆͗͋͊̚o̶̡̦̪̘̥̞͎̠͑͆̂̑̔́͒̚r̴̫͚̫̭̮͉͍̉̇̒̌͝͠", "s̸̨̯̼͉͎̬̺̅̌̂̀̀̃̌̾͛͜͠i̶̩̼̖̰̻̙̥̋͒̓͝ț̴̢̪̈́͋̄̑̀̐̾̾̿", "ȧ̷̜͓̦̦̦̓̕ͅm̸̮̮̲̟͔̞͍̋͗͘e̴͙̟͈̭̺͌̐̓͌ṫ̶̠̘̯̻̭͕̳͆̑͌̚", "c̴͈̤̺͓̘͇̤͋̓̎͐͐̍͛̃ͅớ̸̡͖͕̣̘̹͖̓̓́͗̕n̵͉̤̮̰̠̤̖̺̾̈̔͛̌͘͝s̶̡̢̨̛͔̖̥̰̰̅̆͘̚e̵̹̥͙͖̯͔̻̞̜̔̌c̵̢̬̹̜̬͔͉̉͜ẗ̵̥̻̮̰́̄͑̌ĕ̵̩͍͍̩͉̱͇t̷̠͇͕̳́̇̀͂̔͒͑͘ü̷̡̨͚̪̪̗̼͔̈́ŗ̵͍͇̳͚̟̤̦̬͛͂̅̒", "a̸͎̠͈̥̳̯̰͙̜͆̌͊̋̓̊͛̿̕͠ď̶̢̮̮͈̫̤̫̽͆͑̈̇́̀͘͜ͅi̷̧͎̱̻̾͂p̶̧͑͛i̸̝͚̩̹̖̳̎̃̓ś̸̖̽̑̚͝c̴̹͎̞̖̙̣̅͆̅̈́̚͘͠͝í̵̢̧̡̖̻̜̮̌͐͝n̶̢̛̬̣͈̖̦̩̪̬͐̾͗̈́͠g̵͖̣͇̟̬͈̯̦͐̓̐͝", "e̴͔̙̫̲͎̹̿͐̈͆̓͜l̶̼̝̼̣͓͓̲̥̐̆̀̇̃̚i̴͔͇̦͆́͋̈́̋̽͘͜͝t̷̢̹̻̭̅̂̏̽̚͝.̵͇̜̱͉̌͂̀̈́̍̆̽̇̓̿", "S̶̛̫̬̦͇͚̅͑̔̀̀ȇ̶̝̹͒d̵̰̞̙̰͉̘͕̠̔͑̎̚", "d̶͎̘͈̭̙̝̰̬̽͗͆͂̈́̾̚͝͠ͅõ̸̖̆͛͊̈́̀̅̑̓́", "ẻ̷̩̲̬͓̘̤͔̹̜̅̈́̌̎̀̓̍̈́͜ĩ̶͙̳͉̅͛͊ͅų̷̱̠͍̯͈̰̬͚͋̚͜š̶̛̳͔̮̰̑̈́̋͊̄̓̇m̵̠̈́̄̏̎̄̂̈̕ỏ̷̰̞̝͇̭̻́͑͗̂̓̂̈́̔̀d̷̞̦̣͚̠̹̠̓̑̒͛́͛͠",
  
 ];

  // Generate random text by selecting random words from the array
  let newText = '';
  for (let i = 0; i < 100; i++) { // Adjust the number of iterations to control the length of text
    const randomIndex = Math.floor(Math.random() * words.length);
    newText += words[randomIndex] + ' ';
  }

  return newText;
}

function appendInfiniteText() {
  const newText = generateRandomText();
  textContainer.innerHTML += `<p>${newText}</p>`;

  // Scroll to the bottom of the container
  textContainer.scrollTop = textContainer.scrollHeight;
}

// Append text every second
setInterval(appendInfiniteText, 1000);
