// Problem: Write function sum that works like this: sum(a)(b) == a+b.
function sum(a) {
  return function(b) {
    return a + b;
  }
}

// Driver code
console.log(sum(1)(2) == 3);
console.log(sum(5)(-1) == 4);


// Problem: https://javascript.info/task/make-army
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooterNum = i;
    let shooter = function() {
      console.log(shooterNum);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
army[0]();
army[1]();
army[2]();
