    //create an alert box
    window.alert("This page is for The Foodie employees only!")

    //create an h1 for the reservation div
    let rsvpH1 = document.createElement('h1');
    rsvpH1.textContent = `${new Date()}`;
    let rsvpDiv = document.getElementById("rsvpHeader");
    //append the element to the div
    rsvpDiv.appendChild(rsvpH1);
    document.getElementById("rsvpHeader").style.textAlign = "center";
    //changing the font for the h1 in the reservation div
    rsvpDiv.style.fontFamily = "Gruppo";
    rsvpDiv.style.fontSize = "10px";
    rsvpDiv.style.fontWeight = "100";

    
    

    //centering the buttons
    const myBookingBtn = document.getElementById("bookingBtn");
    myBookingBtn.style.marginLeft = "695px";
    myBookingBtn.style.marginTop = "240px";
    myBookingBtn.style.padding = "40px";


    //changing the font for the buttons
    const myButton = document.querySelector("#myBtn");
    myButton.style.fontFamily = "Gruppo";
    const myButton2 = document.querySelector("#myBtn2");
    myButton2.style.fontFamily = "Gruppo";
    //removing the underline from the button that links to the form page
    const myFormBtn = document.getElementById("formBtn");
    myFormBtn.style.textDecoration = "none";
    myFormBtn.style.paddingLeft = "295px";
    myFormBtn.style.paddingRight = "350px"
    myFormBtn.style.marginTop = "80px";
    //making the cursor turn into a pointer for the buttons
    document.getElementById("bookingBtn").style.cursor = "pointer";
    



//set the background color of the reservation list
const rsvpNames = document.getElementById("rsvpList");
rsvpNames.style.background = "black";
rsvpNames.style.borderRadius = "15px";
rsvpNames.style.height = "400px";
//adding a background picture
rsvpNames.style.backgroundImage = "url(https://www.onlygfx.com/wp-content/uploads/2017/12/vip-stamp-4-1024x653.png)";
rsvpNames.style.backgroundPosition = "center";
//making the picture inside the reservation list div transaprent
const vipTPic = document.getElementById("transparentPic");
rsvpNames.style.opacity = "60%";


//adding a hover function that will make the reservation list div light up
document.querySelector("#rsvpList").addEventListener("mouseover", lightUpDiv);
document.querySelector("#rsvpList").addEventListener("mouseout", darkenDivAgain)


//creating a function for the element above to create a hover effect
//change of style when a user interacts with the element
function lightUpDiv(){
    document.getElementById("rsvpList").style.opacity = "100%";
}

function darkenDivAgain(){
    document.getElementById("rsvpList").style.opacity = "60%";
}




//changing the font for the list of names
const fontForNames = document.getElementById("myRsvpList");
fontForNames.style.fontFamily = "Gruppo";



//set the background color for the second div with reservation info
const rsvpInfo = document.getElementById("secondDiv");
rsvpInfo.style.background = "#80808090";
rsvpInfo.style.borderRadius = "15px";
rsvpInfo.style.alignItems = "center";
rsvpInfo.style.backgroundImage = "url(https://images.ctfassets.net/8edxnwlq2x0m/619fsIdwAsQeWnA18sKmF8/e13a264fec1a506ce4642aa5bcdc4725/image__88___1___1_.jpg)";
rsvpInfo.style.backgroundSize = "cover";
rsvpInfo.style.height = "400px"

//center heading for second div
document.getElementById("secondDivHdr").style.textAlign = "center";
document.getElementById("secondDivHdr").style.fontFamily = "Gruppo";
document.getElementById("secondDivHdr").style.paddingTop = "40px"

//set background color for the third div
const birthdayDiv = document.getElementById("thirdDiv");
birthdayDiv.style.background = "#80808090";
birthdayDiv.style.borderRadius = "15px";
//adding a gif to the third div
birthdayDiv.style.backgroundImage = "url(https://i.makeagif.com/media/3-14-2017/7u8fRx.gif)"
//center heading for third div
document.getElementById("thirdDivHdr").style.textAlign = "center";
//changing the font for the 3rd div
document.getElementById("thirdDivHdr").style.fontFamily = "Gruppo";


//set text for nav heading
const myNavH1 = document.getElementById("navH1");
//align nav heading to the center
document.getElementById("navH1").style.textAlign = "center";
//change the color to red
myNavH1.style.color = "#cc0000";


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



//adding flex and space around to the nav links
const myNavLinks = document.getElementById("navLinks");
myNavLinks.style.display = 'flex';
myNavLinks.style.justifyContent = 'space-evenly';
//removing the link bulletpoints
myNavLinks.style.listStyleType = "none";
//adding some space to the bottom
myNavLinks.style.paddingBottom = "40px";
//moving the links to line up with the nav logo
myNavLinks.style.marginTop = "-60px";

//adding some space to the top of the vip header
const vipheadr = document.getElementById("vipHeading");
vipheadr.style.paddingTop = "60px";
vipheadr.style.fontFamily = "Tangerine";
vipheadr.style.fontSize = "50px";



//changing the link colors
const navLinkColor1 = document.getElementById("link1");
navLinkColor1.style.color = "white";
//removing the underline
const linkOne = document.getElementById("link1");
linkOne.style.textDecoration = "none";
//changing the link color
const navLinkColor2 = document.getElementById("link2");
navLinkColor2.style.color = "white";
//removing the underline
const linkTwo = document.getElementById("link2");
linkTwo.style.textDecoration = "none";
//changing the link color
const navLinkColor3 = document.getElementById("link3");
navLinkColor3.style.color = "white";
//removing the underline
const linkThree = document.getElementById("link3");
linkThree.style.textDecoration = "none";

//changing the font for the links
linkOne.style.fontFamily = "Gruppo";
linkTwo.style.fontFamily = "Gruppo";
linkThree.style.fontFamily = "Gruppo"

// caching nav link elements using querySelector and adding an event listener for mouseover
document.querySelector("#link1").addEventListener("mouseover", navMouseOver)
document.querySelector("#link2").addEventListener("mouseover", navMouseOver2)
document.querySelector("#link3").addEventListener("mouseover", navMouseOver3)

//using querySelector to cache link elements again and add an event listener for mouseout
document.querySelector("#link1").addEventListener("mouseout", navMouseOut)
document.querySelector("#link2").addEventListener("mouseout", navMouseOut2)
document.querySelector("#link3").addEventListener("mouseout", navMouseOut3)


//creating a function for the element above to create a hover effect
function navMouseOver(){
    document.getElementById("link1").style.color = "#cc0000";
}

function navMouseOver2(){
    document.getElementById("link2").style.color = "#cc0000";
}

function navMouseOver3(){
    document.getElementById("link3").style.color = "#cc0000";
}


function navMouseOut(){
    document.getElementById("link1").style.color = "white";
}

function navMouseOut2(){
    document.getElementById("link2").style.color = "white";
}

function navMouseOut3(){
    document.getElementById("link3").style.color = "white";
}




//Modify the text of two elements upon user interaction
let rsvpDisplayInfo = document.getElementById("clickable1");
let rsvpDisplayInfo2 = document.getElementById("clickable2");
//dates to be shwon when clicking on a name with a reservation
let rsvpdate1 = 'June 10, 2024 at 8:00 PM';
let rsvpdate2 = 'July 4, 2024 at 5:00 PM';

//adding an event listener to listen for a click on the variables i created to grab two elements
rsvpDisplayInfo.addEventListener("click", displayInfo);
rsvpDisplayInfo2.addEventListener("click", displayInfo2);

//creating a function for the event listener
function displayInfo() {
    document.getElementById("clickable1").textContent = `Jasmine's Reservation Date: ${rsvpdate1}. *Has special requests. See notes in calendar.`;
}
//creating a function for the event listener
function displayInfo2() {
    document.getElementById("clickable2").textContent = `George's Reservation Date: ${rsvpdate2}`;
}

//let the mouse become a pointer when clicking on a name from the reservation list
document.getElementById("rsvpList").style.cursor = "pointer";


//creating a function for the button that will allow a person to enter their name for a reservation
function signup(){
    let name
    let person = prompt("What is the name of the guest?", "Who is reserving a table?")
    if (person == null || person == ""){
        name = "Cancelled.";
    } else{
    

        let names = document.createElement('p');
        names.textContent = `${person} has been scheduled for a reservation.`;
        let namesDiv = document.getElementById("namesList");
        namesDiv.appendChild(names)

    }}
    document.getElementById("namesList").innerHTML= name;






