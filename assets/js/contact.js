const home = "Home";
const about = "About";
const contact_us = "Contact Us";
const name_lastname = "Lerato Mahume";
const title_par = "- Brain Unlocked";
const line1 = "191 Lioncresent str";
const line2 = "Eastbank";
const line3 = "Alexandra";
const line4 = "Gauteng";
const contacts = "Cellphone : +27 68 658 7464/+27 78 097 2632";
const email = "Email : mahumelerato@gmail.com";
const labels = ["First Name", "Last Name", "Country", "Email", "Subject"];
const options = ["South-Africa", "Canada", "USA"];

document.title = "Contact form";
document.getElementById("home").innerHTML = home;
document.getElementById("about").innerHTML = about;
document.getElementById("contact").innerHTML = contact_us;
document.getElementById("brain").innerHTML = "Brain";
document.getElementById("unlocked").innerHTML = "Unlocked";
for (i = 0; i < labels.length; i++) {
  document.getElementsByTagName("label")[i].innerHTML = labels[i];
}

for (i = 0; i < options.length; i++) {
  document.getElementsByTagName("option")[i].innerHTML = options[i];
}

document.getElementById("line-1").innerHTML = line1;
document.getElementById("line-2").innerHTML = line2;
document.getElementById("line-3").innerHTML = line3;
document.getElementById("line-4").innerHTML = line4;
document.getElementById("cell-phone").innerHTML = contacts;
document.getElementById("email").innerHTML = email;
document.getElementById("contact-header").innerHTML = "Contacts";
document.getElementById("address-title").innerHTML = "Address";
