function highlight() {
    // Select all <strong> elements
    const boldWords = document.getElementsByTagName('strong');
    
    // Change the color of each <strong> element to green
    for (let word of boldWords) {
        word.style.color = 'green';
    }
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.getElementsByTagName('strong');
    
    // Change the color of each <strong> element back to black
    for (let word of boldWords) {
        word.style.color = 'black';
    }
}