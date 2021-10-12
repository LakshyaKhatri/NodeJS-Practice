// Problem: https://javascript.info/task/hello-object

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


// Problem: https://javascript.info/task/is-empty

function isEmpty(obj) {
  for(key in obj) {
    // if loop starts then there's a key in the object
    return false;
  }
  return true;
}

let schedule = {};
console.log( isEmpty(schedule) );
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );

// Problem: https://javascript.info/task/sum-object
function sumAll(obj) {
  let sum = 0;
  for(key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

sumAll(salaries)

// Problem: https://javascript.info/task/multiply-numeric
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= 2
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
