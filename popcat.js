/*

*/
var rapidClick = new KeyboardEvent(
  'keydown',
  { key: 'a' }
);
var clck = 0;
var interval = setInterval(function () {
  clck += 1;
  if (clck === 1000) {
    clearInterval(interval);
  } else {
    document.dispatchEvent(rapidClick);
  }
}, 100);