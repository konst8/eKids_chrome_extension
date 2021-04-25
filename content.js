let storage = chrome.storage.local;

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
    console.log('message', message);
    setPageColor(message.color);
  } 
);

storage.get(
  null,
  (items) => {
    console.log('storageItems', items);
    if (typeof items.color === 'string') {
      setPageColor(items.color);
    }
  }
);