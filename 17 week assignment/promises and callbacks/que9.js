// 9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.

const fetchData = (api) => {
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Please check your internet connection');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('Error occured');
      console.log(err);

      // displays error on web
      let paragraph = document.createElement('p');
      paragraph.textContent =
        'An error is occuring while displaying data on web.';
      document.body.append(paragraph);
    });
};

// test-case
fetchData('https://jsonplaceholder.typicode.com/posts/123456789');
