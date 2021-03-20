let heading2 = document.createElement('h2');
heading2.innerHTML = 'Hello Planet!!!';

heading2.style.cursor = 'pointer';

heading2.addEventListener(
  'click',
  (event) => {
    console.log('event info', event);
    let allElements = document.querySelectorAll('*');
    allElements.forEach(
      element => {
        element.style.backgroundColor = 'orange';
      }
    );
  }
);

document.querySelector('h1').after(heading2);
