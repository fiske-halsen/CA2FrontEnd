import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./personFacade"
import personFacade from "./personFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */
function fetchUsersToTableByHobby() {

let hobbyName = document.getElementById("hobby").value()


 personFacade.getPersonsByHobby(hobbyName)
    .then(person => {

      const personRows = person.map(person => `<tr>
  <td>${person.id}</td>
  <td>${person.fName}</td>
  <td>${person.lName}</td>
  <td>${person.email}</td>
  <td>${person.street}</td>
  <td>${person.zip}</td>
  <td>${person.city}</td>
  <td>${person.hobbies}</td>
  <td>${person.phones}</td>

  </tr>`)

      const personRowsAsString = personRows.join("")
      document.getElementById("allUserRows").innerHTML = personRowsAsString;

    }).catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerText = e.msg)
      }
      else { console.log("Network error"); }
    });
}










/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



