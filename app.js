    //create an alert box
    window.alert("This page is for employees only!")

//set the background color of the reservation header div
const rsvp = document.getElementById("rsvpHeader");
rsvp.style.background = "#1a0000";

//set the background color of the reservation list
const rsvpNames = document.getElementById("rsvpList");
rsvpNames.style.background = "gray";

//set the background color for the second div with reservation info
const rsvpInfo = document.getElementById("secondDiv");
rsvpInfo.style.background = "gray";

//set background color for the third div
const birthdayDiv = document.getElementById("thirdDiv");
birthdayDiv.style.background = "gray";

//set background color for form div




//create an h1 for the reservation div
let rsvpH1 = document.createElement('h1');
rsvpH1.textContent = `Reservations as of ${new Date()}`;
let rsvpDiv = document.getElementById("rsvpHeader");
//append the element to the div
rsvpDiv.appendChild(rsvpH1);

//cache an element using querySelector
const myNav = document.getElementById("navBar");
myNav.style.color = "#cc0000";

//items to be added to the list of reservations
const rsvpPeople = ["Amy", "Michelle", "Jamie"]

const rdocfrag = document.createDocumentFragment();
for (let x in rsvpPeople){
    const li = document.createElement('li');
    li.textContent = rsvpPeople[x];
    rdocfrag.appendChild(li);
}

//people to add to rsvp List
document.getElementById('myRsvpList').appendChild(rdocfrag);

//Modify the text of two elements upon user interaction
let rsvpDisplayInfo = document.getElementById("clickable1");
let rsvpDisplayInfo2 = document.getElementById("clickable2");
//dates to be shwon when clicking on a name with a reservation
let rsvpdate1 = 'May 30, 2024 at 8:00 PM';
let rsvpdate2 = 'May 30, 2024 at 9:00 PM';
let rsvpdate3 = 'May 31, 2024 at 4:00 PM';

rsvpDisplayInfo.addEventListener("click", displayInfo);
rsvpDisplayInfo2.addEventListener("click", displayInfo2);

function displayInfo() {
    document.getElementById("clickable1").textContent = `Reservation Date: ${rsvpdate1}`;
}

function displayInfo2() {
    document.getElementById("clickable2").textContent = `Reservation Date: ${rsvpdate2}`;
}

//let the mouse become a pointer when clicking on a name from the reservation list
document.getElementById("myRsvpList").style.cursor = "pointer";


//creating a function for the button that will allow a person to enter their name for a reservation
function signup(){
    let name
    let person = prompt("What is the name of the guest?", "Who is reserving a table?")
    if (person == null || person == ""){
        name = "The process has been Cancelled.";
    } else{
    

        let names = document.createElement('p');
        names.textContent = `${person} has been scheduled for a reservation.`;
        let namesDiv = document.getElementById("namesList");
        namesDiv.appendChild(names)

    }}
    document.getElementById("namesList").innerHTML= name;
     //create an h1 for the reservation div





