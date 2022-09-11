/**
 * Front End Interview Questions: Promises
 *
 * Q: What are Promises and why might you use them?
 *
 * Bonus Resource: https://jsonplaceholder.typicode.com/
 */

async function getPost() {
  console.log(1);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((data) => data.json())
  // .then((json) => console.log(2))
  // .catch((error) =>  console.log(e));

  console.log(3);
}

getPost();
