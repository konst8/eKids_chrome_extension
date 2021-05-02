let storage = chrome.storage.local;
let host = window.location.hostname;


let setPageColor = (color) => {
  let styleTag = document.createElement('style');
  styleTag.classList.add('ekids-chrome-ext');
  styleTag.innerHTML = `
    body { 
      background: ${color} !important;
    }
    body * {
      background: transparent !important; 
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
      setPageColor('transparent');
      storage.remove(host);
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