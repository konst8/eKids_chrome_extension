let setPageColor = (color) => {
  let allElements = document.querySelectorAll('*');
  allElements.forEach(
    element => {
      element.style.backgroundColor = color;
    }
  );
};

chrome.runtime.onMessage.addListener(
  (message) => {
    setPageColor(message.color);

    // Home Work

    // Colorize the page with TimeOut (use all 4 colors)

  } 
);
