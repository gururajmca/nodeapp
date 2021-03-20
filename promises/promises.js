// Promises
const rand = () => Math.floor(Math.random() * 10) + 1;

let p1 = new Promise((resolve, reject) => {
  let x = 10;
  let num = rand();
  setTimeout(resolve, 1500, num); // Handle this in then()
  // reject('failed to resolve the promuise');
});


p1.then((response)=> {
  console.log('What I got ', response);
  return response * 2;
}).then(secondResponse => {
  console.log('In second response: ', secondResponse);
}).catch((err) => {
  console.log('Something went wrong: ', err);
});
