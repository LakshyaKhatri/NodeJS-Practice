// Problem: https://javascript.info/task/spy-decorator
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  };

  wrapper.calls = [];
  return wrapper;
}


// Driver code
function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


//==============================================================================
// Problem: https://javascript.info/task/delay                                //
//==============================================================================
function delay(f, ms) {
  return function(...args) {
    setTimeout(f, ms, ...args);
  };
}


// Driver code
function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms


//==============================================================================
// Problem: https://javascript.info/task/debounce                             //
//==============================================================================
function debounce(f, ms) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), ms);
  };
}


// Driver code
let debounced_f = debounce(console.log, 1000);

setTimeout( () => debounced_f("b"), 200);
setTimeout( () => debounced_f("c"), 500);
debounced_f("a");
