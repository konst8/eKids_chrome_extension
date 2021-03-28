document.addEventListener('DOMContentLoaded', () => {

  let allElements = document.querySelectorAll('*');
  let headings = document.querySelectorAll('h3');
  let heading2 = document.createElement('h2');

  heading2.innerHTML = 'Hello Planet!!!';
  
  heading2.style.cursor = 'pointer';
  
  heading2.addEventListener(
    'click',
    (event) => {
      allElements.forEach(
        element => {
          element.style.backgroundColor = 'orange';
        }
      );
    }
  );
  
  document.querySelector('h1').after(heading2);

  // Change background color of all elements on
  // clicking h3 heading.

  headings.forEach(heading => {
    heading.addEventListener(
      'click',
      event => {
        let color = event.target.style.color;
        allElements.forEach(
          element => {
            element.style.backgroundColor = color;
          }
        );
      }
    )
  });

});
