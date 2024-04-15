// Add event listener for click on the start button
document.getElementById('startButton').addEventListener('click', function() {
    // Remove the "hidden" class from the first clue section
    document.getElementById('clue1').classList.remove('hidden');
});

// Add event listener for click on the swift button
document.getElementById('swiftButton').addEventListener('click', function() {
    // Remove the "hidden" class from the swift secret paragraph
    document.getElementById('swiftSecret').classList.remove('hidden');
    // Remove the "hidden" class from the second clue section
    document.getElementById('clue2').classList.remove('hidden');
});

// Add event listener for click on the leo button
document.getElementById('leoButton').addEventListener('click', function() {
    // Remove the "hidden" class from the leo secret paragraph
    document.getElementById('leoSecret').classList.remove('hidden');
    // Remove the "hidden" class from the conclusion section
    document.getElementById('conclusion').classList.remove('hidden');
});
