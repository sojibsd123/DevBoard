
  function updateClock() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const timeString = `${day}, ${date} ${month} ${year}`;
    document.getElementById("clock").innerHTML = timeString;
  }
setInterval(updateClock, 1000);

function addTask() {
  const count = 5;
  const completebtns = document.querySelectorAll('.outline-none');
if (completebtns.length < count) {
  // Add more elements to the completebtns array

}
for (let i = 0; i < completebtns.length; i++) {
  completebtns[i].addEventListener('click', function (event) {
    this.parentNode.style.textDecoration = 'line-through';
    event.target.disabled = true;
  });
}
}


function cBColor() {
  // Generate a random hex color
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

document.getElementById('date').innerText = cTime();
function cTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  console.log(currentDateTime);
}
function showAlert() {
  var myText = "Board Updated Successfully";
  alert (myText);
}



function clearDivHistory(divId) {
  const divElement = document.getElementById(divId);

  if (divElement) {
    divElement.innerHTML = '';
    console.log(`History of div with ID '${divId}' cleared.`);

  } else {
    console.error(`Div with ID '${divId}' not found.`);
  }
}

function addfinished() {
  const newDiv = document.createElement('div');
  newDiv.className = 'finished';
  newDiv.innerHTML = 'Finished';
  const finishedDiv = document.getElementById('finished');
  finishedDiv.appendChild(newDiv);
}