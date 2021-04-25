document.addEventListener('DOMContentLoaded', () => {

  // Create object

  let obj = {
    key1: 'val1',
    key2: 'val2',
    key3: {
      a: 'a',
      b: 'b',
    }
  }

  // Get object value

  obj.key1; // 'val1'


  // Get deep object value

  obj.key3.a // 'a'

  // Use unsupported symbols in object keys

  let obj = {
    'key-1': 'val1',
    key2: 'val2',
  }

  // Get an item with unsupported key

  obj[key-1]; // 'val1'

});
