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
  }
);
