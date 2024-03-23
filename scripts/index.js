/* My original solution
let username = document.querySelector('.nav__username');
username.innerHTML = 'Kayla Lemus'
console.log(username);

let profile = document.querySelector('.profile-card__title');
profile.innerHTML = 'Kayla Lemus, Teacher'
console.log(profile);

// direct change of 
document.querySelector('.profile__pic').src = "../../assets/images/nonbinary.png";
*/

const username = "Kayla Lemus";
const jobtitle = "Coding Teacher";
const profilepic = "./assets/images/nonbinary.png"

const usernameElems = document.querySelectorAll(".data-username");
const jobTitleElem = document.querySelector(".data-jobtitle");
const profilePicElems = document.querySelectorAll(".data-profilepic")

for (let use of usernameElems) {
    use.innerHTML = username;
}

jobTitleElem.innerHTML = jobtitle;

for (let pro of profilePicElems) {
    pro.src = profilepic
}