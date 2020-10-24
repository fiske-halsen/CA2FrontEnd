import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "./personFacade";
import personFacade from "./personFacade";

document.getElementById("all-content").style.display = "block";

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

/* JS For Exercise-2 below */

/* JS For Exercise-3 below */


function fetchPersonsToTableByHobby() {
  document.getElementById("error").innerText = "";
  let hobbyName = document.getElementById("hobby").value;

  personFacade.getPersonsByHobby(hobbyName).
  then(persons => {
     
  const personRows = persons.all.map(person => 
    `<tr>
  <td>${person.id}</td>
  <td>${person.fName}</td>
  <td>${person.lName}</td>
  <td>${person.email}</td>
  <td>${person.street}</td>
  <td>${person.zip}</td>
  <td>${person.city}</td>
  <td>${person.hobbies.map(hobby =>  hobby.name).join(",")}</td>
  <td>${person.phones.map(phone => phone.number).join(",")}</td>

  </tr>`
    );

    const personRowsAsString = personRows.join("");
    document.getElementById("allPersonRows").innerHTML = personRowsAsString;
   
  }).catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerText = e.msg)
    }
    else { console.log("Network error"); }
  });
}

function fetchPersonsToTableByCity(){
  document.getElementById("error").innerText = "";
  let cityName = document.getElementById("city").value;

  personFacade.getPersonsByCity(cityName)
  .then(persons => {
     
  const personRows = persons.all.map(person => 
  `<tr>
  <td>${person.id}</td>
  <td>${person.fName}</td>
  <td>${person.lName}</td>
  <td>${person.email}</td>
  <td>${person.street}</td>
  <td>${person.zip}</td>
  <td>${person.city}</td>
  <td>${person.hobbies.map(hobby => hobby.name).join(" ,")}</td>
  <td>${person.phones.map(phone => phone.number).join(" ,")}</td>

  </tr>`
    );

    const personRowsAsString = personRows.join("");
    document.getElementById("allPersonRows").innerHTML = personRowsAsString;
   
  }).catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerText = e.msg)
    }
    else { console.log("Network error"); }
  });


}
function fetchPersonsCountToTableByHobby() {
  document.getElementById("error").innerText = "";
  let hobbyName = document.getElementById("hobbycount").value;

  personFacade.getPeopleCountByHobby(hobbyName)
  .then(x => {
     
  let counter = x.count

    document.getElementById("count").innerText = "Count: " + counter;
  }).catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerText = e.msg)
    }
    else { console.log("Network error"); }
  });
}

function fetchAllZipCodes() {
 
  var result = ""

  personFacade.getAllZipCodes()
  .then(x => {
     
  x.forEach(z =>{
    return result += `${z} <br>`  
  })

    document.getElementById("ziptag").innerHTML = result;
  }).catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerText = e.msg)
    }
    else { console.log("Network error"); }
  });
}


function fetchPersonToTableByPhone(){
  let phoneNumber = document.getElementById("phone").value;
  document.getElementById("error").innerText = "";
  personFacade.getPersonByPhone(phoneNumber)
  .then(person => {
     
  const personRows =
  `<tr>
  <td>${person.id}</td>
  <td>${person.fName}</td>
  <td>${person.lName}</td>
  <td>${person.email}</td>
  <td>${person.street}</td>
  <td>${person.zip}</td>
  <td>${person.city}</td>
  <td>${person.hobbies.map(hobby => hobby.name).join(" ,")}</td>
  <td>${person.phones.map(phone => phone.number).join(" ,")}</td>

  </tr>`
    

    const personRowsAsString = personRows;
    document.getElementById("allPersonRows").innerHTML = personRowsAsString;
   
  }).catch(err => {
    if (err.status) {
      err.fullError.then(e => document.getElementById("error").innerText = e.msg)
    }
    else { console.log("Network error"); }
  });
  


}

function editPerson(){
  document.getElementById("error").innerText = "";
  let id = document.getElementById("editid").value;
  let fName = document.getElementById("editfname").value;
  let lName = document.getElementById("editlname").value;
  let email = document.getElementById("editemail").value;
  let street = document.getElementById("editstreet").value;
  let zip = document.getElementById("editzip").value;

const person = {
  id,
  fName, 
  lName,
  email,
  street,
  zip
}
personFacade.editPerson(person)
.then(user => JSON.stringify(user))
.catch(err => {
  if (err.status) {
    err.fullError.then(e => document.getElementById("error").innerText = e.msg)
  }
  else { console.log("Network error"); }
});
}

function addPerson(){

  let hobbies = []
  let phones = []
  let fName = document.getElementById("addfname").value;
  let lName = document.getElementById("addlname").value;
  let email = document.getElementById("addemail").value;
  let street = document.getElementById("addstreet").value;
  let zip = document.getElementById("addzip").value;
  let hobbyName = document.getElementById("addhobby").value;
  let hobbyDescription = document.getElementById("addhobbydescription").value;
  let phoneNumber = document.getElementById("addphone").value;
  let phoneDescription = document.getElementById("addphonedescription").value;

const person = {
  fName, 
  lName,
  email,
  street,
  zip,
  hobbies : [
    {
      "name": hobbyName,
      "description": hobbyDescription
    
  }],
  phones : [
    {
      "number": phoneNumber,
      "description": phoneDescription
  }]
  
}
personFacade.addPerson(person)
.then(user => JSON.stringify(user))
.catch(err => {
  if (err.status) {
    err.fullError.then(e => document.getElementById("error").innerText = e.msg)
  }
  else { console.log("Network error"); }
})
}



document.getElementById("submitphone").addEventListener("click", (event) => {
  event.preventDefault();
  fetchPersonToTableByPhone()
});

document.getElementById("submitcity").addEventListener("click", (event) => {
  event.preventDefault();
  fetchPersonsToTableByCity()
});


document.getElementById("submithobby").addEventListener("click", (event) => {
  event.preventDefault();
  fetchPersonsToTableByHobby()
});

document.getElementById("submithobbycount").addEventListener("click", (event) => {
  event.preventDefault();
  fetchPersonsCountToTableByHobby()
});

document.getElementById("submitzip").addEventListener("click", (event) => {
  event.preventDefault();
  fetchAllZipCodes()
});

document.getElementById("submitedit").addEventListener("click", (event) => {
  event.preventDefault();
  editPerson()
});

document.getElementById("submitadd").addEventListener("click", (event) => {
  event.preventDefault();
  addPerson()
});
/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none";
  document.getElementById("ex3_html").style = "display:none";
  document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex3":
      hideAllShowOne("ex3_html");
      break;
    default:
      hideAllShowOne("about_html");
      break;
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");
