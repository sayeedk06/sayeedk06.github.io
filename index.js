document.getElementById('date').innerHTML = Date();

function showAbout() {
  document.getElementById('allinfo').style.visibility = "hidden";
  document.getElementById('about').style.visibility = "visible";
}


function showWork() {
  document.getElementById('allinfo').style.visibility = "visible";
  document.getElementById('about').style.visibility = "hidden";
}

function getFunky() {
document.getElementById('research').style.backgroundColor = "#edf8fa";
document.getElementById('course').style.backgroundColor = "#e8fcfc";
document.getElementById('awards').style.backgroundColor = "#f5f6ff";

document.getElementById('research').classList.add("funky");
document.getElementById('course').classList.add("funky");
document.getElementById('awards').classList.add("funky");
document.getElementsByClassName('jumbotron')[0].style.backgroundColor = "violet";

}

document.getElementById('nav-about').addEventListener("click", showAbout);
document.getElementById('nav-work').addEventListener("click", showWork);
document.querySelector('button').addEventListener("click", getFunky);

// function myFunction() {
//     alert('It was clicked');
// }
// document.getElementById('nav-about').addEventListener('click', myFunction, false);
