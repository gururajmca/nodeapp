const url = 'https://jsonplaceholder.typicode.com/users';
let h = new Headers();
h.append('Accept', 'application/json');
const req = new Request(url, {
  method: 'GET',
  headers: h,
  mode: 'cors'
});
fetch(req)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('BAD Request headers');
      }
    })
    .then(json => {
        console.log('Users list ', json);
        let appendText = document.getElementById('output');
        appendText.textContent = JSON.stringify(json);
    })
    .catch((err) => {
        console.log('Error:', err.message);
    });

let todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};
fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => {
        let appendText = document.getElementById('user');
        appendText.textContent = JSON.stringify(json);
      });
