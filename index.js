document.getElementById('date').innerHTML = Date();

function showAbout() {
  document.getElementById('allinfo').style.visibility = "hidden";
  alert("working");
  document.getElementById('about').style.visibility = "visible"
}


function showWork() {
  document.getElementById('allinfo').style.visibility = "visible";
  document.getElementById('about').style.visibility = "hidden"
}


document.getElementById('nav-about').addEventListener("click", showAbout);
document.getElementById('nav-work').addEventListener("click", showWork);

// function myFunction() {
//     alert('It was clicked');
// }
// document.getElementById('nav-about').addEventListener('click', myFunction, false);
