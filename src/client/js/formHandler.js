const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&units=metric&appid=19ba431c3fea44c4469111d60f7c2d18";
//date
const date = new Date();
const newDate =
  date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
//event listener
// document.getElementById("generate").addEventListener("click", weatherGenerator);
export function weatherGenerator(e) {
  e.preventDefault()
  const zip = document.getElementById("zip").value;
  postData("http://localhost:8081/addWeather", {
    text: zip
  })
}
/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    //boilerplate
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    //Body data type must match Content-Type
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    console.log(newData);
    updateUI(newData)
  } catch (error) {
    console.log("error", error);
  }
};
/* Function to GET Project Data */
const getData = async (url = "") => {
  const request = await fetch(url);
  try {
    const getData = await request.json();
    console.log(getData);
  } catch (error) {
    console.log("error", error);
  }
};
//ui update
const updateUI = async response => {
  document.getElementById("results").innerText = "Agreement: " + response.agreement +
    "Subjectivity: " + response.subjectivity +
    "Confidence: " + response.confidence +
    "Irony: " + response.irony;
};
    // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)
//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }
