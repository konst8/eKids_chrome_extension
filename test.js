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

  // addHeading('orange');
  // addHeading('red');  
  // addHeading('blue');  
  // addHeading('green');

  let colors = [
    'orange',
    'red',
    'blue',
    'green',
  ];

  colors.forEach(
    (color) => {
      addHeading(color);
    }
  );

  // Set timeout
  let myFunc = () => {
    console.log('zzz');
  }


  setTimeout(
    myFunc, // function to call
    2000, // delay in miliseconds
  );

});
