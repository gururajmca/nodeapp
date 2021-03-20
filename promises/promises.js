// Promises
let p1 = new Promise((resolve, reject) => {
  let x = 10;
  // resolve(x); // Handle this in then()
  reject('failed to resolve the promuise');
});

console.log(p1);
p1.then((response)=> {
  console.log('What I got ', response);
  return 'My Age is ' + response;
}).then(secondResponse => {
  console.log('In second response: ', secondResponse);
}).catch((err) => {
  console.log('Something went wrong: ', err);
});
