    //create an alert box
    window.alert("This page is for employees only!")

    //create an h1 for the reservation div
    let rsvpH1 = document.createElement('h1');
    rsvpH1.textContent = `${new Date()}`;
    let rsvpDiv = document.getElementById("rsvpHeader");
    //append the element to the div
    rsvpDiv.appendChild(rsvpH1);
    document.getElementById("rsvpHeader").style.textAlign = "center";
    
    



//set the background color of the reservation list
const rsvpNames = document.getElementById("rsvpList");
rsvpNames.style.background = "#80808090";
rsvpNames.style.borderRadius = "15px"


//set the background color for the second div with reservation info
const rsvpInfo = document.getElementById("secondDiv");
rsvpInfo.style.background = "#80808090";
rsvpInfo.style.borderRadius = "15px"
//center heading for second div
document.getElementById("secondDivHdr").style.textAlign = "center";

//set background color for the third div
const birthdayDiv = document.getElementById("thirdDiv");
birthdayDiv.style.background = "#80808090";
birthdayDiv.style.borderRadius = "15px"
//center heading for third div
document.getElementById("thirdDivHdr").style.textAlign = "center";

//set text for nav heading
const myNavH1 = document.getElementById("navH1");
//align nav heading to the center
document.getElementById("navH1").style.textAlign = "center";
//change the color to red
myNavH1.style.color = "#cc0000";


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

//changing the width of the div that holds the list of names of people with reservations



//Modify the text of two elements upon user interaction
let rsvpDisplayInfo = document.getElementById("clickable1");
let rsvpDisplayInfo2 = document.getElementById("clickable2");
//dates to be shwon when clicking on a name with a reservation
let rsvpdate1 = 'May 31, 2024 at 8:00 PM';
let rsvpdate2 = 'June 1, 2024 at 5:00 PM';

//adding an event listener to listen for a click on the 
//variabled i created to grab two elements
rsvpDisplayInfo.addEventListener("click", displayInfo);
rsvpDisplayInfo2.addEventListener("click", displayInfo2);

//creating a function for the event listener
function displayInfo() {
    document.getElementById("clickable1").textContent = `Reservation Date: ${rsvpdate1}`;
}
//creating a function for the event listener
function displayInfo2() {
    document.getElementById("clickable2").textContent = `Reservation Date: ${rsvpdate2}`;
}

//let the mouse become a pointer when clicking on a name from the reservation list
document.getElementById("rsvpList").style.cursor = "pointer";


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






