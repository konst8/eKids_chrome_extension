document.addEventListener('DOMContentLoaded', () => {

  let addHeading = (color) => {
    let allElements = document.querySelectorAll('*');
    let h3 = document.createElement('h3');
    h3.innerHTML = color;
    h3.style.color = color;
    h3.style.cursor = 'pointer';
    h3.addEventListener(
      'click',
      event => {
        let color = event.target.style.color;
        allElements.forEach(
          element => {
            element.style.backgroundColor = color;
          }
        );
      }
    );
    document.body.append(h3);
  };

  addHeading('orange');
  addHeading('red');  
  addHeading('blue');  
  addHeading('green');

  let colors = [
    'red',
    'blue',
    'green',
    'orange',
  ];

  let colorizeAllWithDelay = () => {
    colors.forEach(
      (color, index) => {
        setTimeout(
          () => {
            document.body.style.backgroundColor = color;
          },
          2000 * (index + 1)
        );
      }
    );
  };

  let addColorAllButton = () => {
    let button = document.createElement('button');
    button.innerHTML = 'All colors with delay';
    button.addEventListener('click', colorizeAllWithDelay);
    document.body.append(button);
  };

  addColorAllButton();

});

