// Create a new element and put it
// after the main heading.

let heading2 = document.createElement('h2');
heading2.innerHTML = 'Hello Planet!!!';
document.querySelector('h1').after(heading2);
