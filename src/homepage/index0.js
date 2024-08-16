const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get("name");
console.log(user);

const api_url = "https://codeforces.com/api/user.info?handles=" + user;

async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
}
// Calling that async function
//getapi(api_url);
