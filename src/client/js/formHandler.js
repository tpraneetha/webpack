import { validate } from "./validate";
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
export function weatherGenerator(e) {
  e.preventDefault()
  const urlEntered = document.getElementById("url").value;
  if (validate(urlEntered)) {
    postData("http://localhost:8081/addWeather", {
      text: urlEntered
    })
  } else {
    alert('enter correct url')
  }
}
//ui update
const updateUI = response => {
  document.getElementById("results").innerText = "Agreement: " + response.agreement +
    "Subjectivity: " + response.subjectivity +
    "Confidence: " + response.confidence +
    "Irony: " + response.irony;
}