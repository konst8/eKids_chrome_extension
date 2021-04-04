document.addEventListener(
  'DOMContentLoaded',
  () => {

    let sendColor = (color) => {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id, 
            {color},
          );
        }
      );
    };

    let createHeading = (color) => {
      let h3 = document.createElement('h3');
      h3.innerHTML = color;
      h3.style.color = color;
      h3.style.cursor = 'pointer';
      h3.addEventListener(
        'click',
        event => {
          let color = event.target.style.color;
          sendColor(color);
        }
      );
      return h3;
    };

    let h3green = createHeading('green');
    let h3orange = createHeading('orange');
    let h3blue = createHeading('blue');
    let h3red = createHeading('red');
    
    document.body.prepend(h3green);
    document.body.prepend(h3orange);
    document.body.prepend(h3blue);
    document.body.prepend(h3red);

  }
);
