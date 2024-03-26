// Code your solutions in this file
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // Function to count down from a given number to zero
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }