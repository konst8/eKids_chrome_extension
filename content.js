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
    // console.log('message from popup', message);
    setPageColor(message.color);
  }
);
