import "./styles.css";
const api_url = "https://codeforces.com/api/contest.list";

// Defining async function
//const handle = "omkar_2003";
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  // console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

function hideloader() {
  document.getElementById("loading1").style.display = "none";
  document.getElementById("loading2").style.display = "none";
}

function show(data) {
  let tab1 = `<thead>
  <tr>
    <th>Name</th>
    <th>Start's at</th>
    <th>Duration</th>
    <th>Action</th>
  </tr>
</thead>`;
  let tab2 = `<thead>
  <tr>
    <th>Name</th>
    <th>Contest Date</th>
    <th>Duration</th>
    <th>Action</th>
  </tr>
</thead>`;
  //codeforces.com/api/user.friends

  // Loop to access all rows

  for (var i = 0; i < data.result.length; i++) {
    //const contestId = data.result[i].id;
    const starttime = new Date(
      data.result[i].startTimeSeconds * 1000
    ).toLocaleString();
    if (data.result[i].phase === "BEFORE") {
      //var starttime = (data.result[i].startTimeSeconds * 1000).toLocaleString();
      tab1 += `
      <tbody>
      <tr>
    <td>${data.result[i].name} </td>
    <td>${starttime} </td>
    <td>${data.result[i].durationSeconds / (60 * 60)} Hours</td>
    <td><button onclick="window.location.href='https://codeforces.com/contests/'+${
      data.result[i].id
    }">Enter</button></td>		
  </tr>
  </tbody>`;
    } else {
      tab2 += `
      <tbody>
      <tr>
      <td>${data.result[i].name} </td>
      <td>${starttime}</td>
      <td>${Math.floor(data.result[i].durationSeconds / (60 * 60))} Hours</td>
      <td><button onclick="window.location.href='https://codeforces.com/contests/'+${
        data.result[i].id
      }">Participate Virtually</button></td>			
  </tr>
  </tbody>`;
    }
  }

  // Setting innerHTML as tab variable
  document.getElementById("upcoming").innerHTML = tab1;
  document.getElementById("finished").innerHTML = tab2;
}
