// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [https://isonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

// fetch-data function
const fetchData = (api) => {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

// test-case
fetchData('https://jsonplaceholder.typicode.com/todos/1');
