// Promises
let p1 = new Promise((resolve, reject) => {
  let x = 10;
  resolve(x);
});

console.log(p1);
p1.then((response)=> {
  console.log('What I got ', response);
  return 'My Age is ' + response;
}).then(secondResponse => {
  console.log('In second response: ', secondResponse);
})
