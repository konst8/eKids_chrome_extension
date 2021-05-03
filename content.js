let storage = chrome.storage.local;
let host = window.location.hostname;


let setPageColor = (color) => {
  let styleTag = document.createElement('style');
  styleTag.innerHTML = `
    body {
      color: ${color.text} !important;
      background-color: ${color.background} !important;
      border-color: ${color.text} !important;
    }
    body [class],
    body * {
      box-shadow: none !important;
      color: ${color.text} !important;
      background-color: transparent !important; 
      border-color: ${color.text} !important;
    }
    body img {
      filter: grayscale(100%);
    }
  `;
  document.head.append(styleTag);
};

let saveColorInStorage = (host, color) => {
  storage.set({[host]: color});
}

chrome.runtime.onMessage.addListener(
  (message) => {
    console.log('message', message);
    if (message.color !== '') {
      setPageColor(message.color);
      saveColorInStorage(host, message.color);
    } else {
      storage.remove(host);
      window.location.reload();
    }
  } 
);

storage.get(
  null,
  (items) => {
    console.log('storageItems', items);
    if (typeof items[host] !== 'undefined') {
      setPageColor(items[host]);
    }
  }
);