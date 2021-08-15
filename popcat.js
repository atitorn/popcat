/*

*/
var rapidClick = new KeyboardEvent(
  'keydown',
  { key: 'a' }
);
var clck = 0;
var interval = setInterval(function () {
  clck += 1;
  if (clck === 1000) { // increase number here to increase click no.
    clearInterval(interval);
  } else {
    document.dispatchEvent(rapidClick);
  }
}, 100);  // increase click speed by reducing this number