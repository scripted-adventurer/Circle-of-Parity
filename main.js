function randomOrder(list) {
  // treats the list as a circular sequence and randomly picks a new node to start
  // from, preserving the original order
  let newStart = Math.floor(Math.random() * list.length);
  let newList = list.slice(newStart);
  newList = newList.concat(list.slice(0, newStart));
  return newList;
}

function plotPoints(teamList) {
  // plots the elements of the list equidistantly around the diameter of a circle
  let container = document.getElementById('drawing-box');
  container.innerHTML = '';
  // set the center point and dimensions of the output circle
  let circleX = 250;
  let circleY = 250;
  let circleRadius = 200;
  let totalTeams = teamList.length;
  for (teamIndex = 0; teamIndex < totalTeams; teamIndex++) {
    let teamPoint = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    teamPoint.innerHTML = teamList[teamIndex];
    // the below formula calculates each point's offset from the circle's center
    let xOffset = Math.round(circleRadius * Math.cos((2 * Math.PI * teamIndex) / 
      totalTeams));
    let yOffset = Math.round(circleRadius * Math.sin((2 * Math.PI * teamIndex) /
      totalTeams));
    teamPoint.setAttribute('x', circleX + xOffset);
    teamPoint.setAttribute('y', circleY + yOffset);
    teamPoint.setAttribute('fill', '#FFFFFF');
    container.appendChild(teamPoint);
  }
}

function writeError() {
  let container = document.getElementById('container');
  container.innerHTML = 'No circle of parity is available for the current settings.';
}

function findCircle() {
  let year = document.getElementById('select-year').value;
  let graph = new Graph(year);
  graph.findStart();
  graph.findPath();
  let path = graph.getPath();
  if (path != '') {
    path = randomOrder(path);
    plotPoints(path);
  }
  else {
    writeError();
  }
}

function submitButton() {
  document.getElementById('submit-button').addEventListener('click', findCircle);
}

window.addEventListener('load', submitButton);