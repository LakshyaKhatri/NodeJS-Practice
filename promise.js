// Problem: https://javascript.info/task/delay-promise
function delay(ms) {
  return new Promise( resolve => setTimeout(resolve, ms));
}

// Driver Code
delay(3000).then(() => console.log('runs after 3 seconds'));
