//const URL = "https://www.mandenderkoder.com/CA2/api/person/"
const URL = "http://localhost:8080/jpareststarter/api/person/"

function getPersonsByHobby(hobby) {
    return fetch(URL + "hobby/" + hobby)
        .then(res => res.json()
        )
   
}

function getPersonsByCity(city) {
    return fetch(URL + "city/" + city)
        .then(res => res.json())
}

function getPersonByPhone(phoneNumber) {
    return fetch(URL + "personphone/" + phoneNumber)
        .then(res => res.json())
}

function getPeopleCountByHobby(hobby) {
    return fetch(URL + "personcount/" + hobby)
     e   .then(res => res.json())
}

function getAllZipCodes(){
    return fetch(URL + "zip")
    .then(res => res.json())
}


function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(URL + "add", options)
        .then(handleHttpErrors)
}

function editUser(person) {
    const options = makeOptions("PUT", person)
    return fetch(URL + "edit/" + user.id, options)
        .then(handleHttpErrors)
}

const personFacade = {
    getPersonsByHobby,
    getPeopleCountByHobby,
    getPersonsByCity,
    addPerson,
    getPersonByPhone,
    getPeopleCountByHobby,
    getAllZipCodes,
    editUser
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

export default personFacade;

