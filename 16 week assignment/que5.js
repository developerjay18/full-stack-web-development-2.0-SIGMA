// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.

const isValid = (url) => {
  let regex = new RegExp(/^(http|https):\/\/[\w\d\s\S]+?\.[\w]+$/i);

  return regex.test(url) ? 'Valid URL' : 'Not a valid URL';
};

// test-case
[
  'www.example.com',
  'http://invalid_url',
  'https://invalid@url.com',
  'ftp://ftp.example.net',
  'http://www.example.com',
  'https://my-site123.net',
  'http://www.openai.com',
  'https://stackoverflow.com',
  'https://en.wikipedia.org',
].map((url) => {
  console.log(isValid(url));
});
