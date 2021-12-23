const backClick = () =>{
  console.log("backClick");
}
const menuClick = () =>{
  console.log("menuClick");
}
const followClick = () =>{
  console.log("followClick");
}
const messageClick = () =>{
  console.log("messageClick");
}
const otherUsersClick = () =>{
  console.log("otherUsersClick");
}
function elementBuilder(tag,className,id,onclick) {
  let element = document.createElement(tag);
  if (className) {
    element.setAttribute("class",className);
  }
  if (id) {
    element.setAttribute("id",id);
  }
  if (onclick) {
    element.setAttribute("onclick",onclick);
  }
  return element;
}
// nav
let barMenu = `<svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>`
document.body.appendChild(elementBuilder("div","","container"));
document.getElementById("container").appendChild(elementBuilder("nav"));
document.querySelector("nav").appendChild(elementBuilder("button","","","backClick()"));
document.querySelector("nav button:first-child").appendChild(elementBuilder("i","fa fa-angle-left backBtn"))
document.querySelector("nav").appendChild(elementBuilder("div","","profileNameBox"));
document.getElementById("profileNameBox").appendChild(elementBuilder("h1"));
document.querySelector("#profileNameBox h1").innerHTML = "instagram";
document.getElementById("profileNameBox").appendChild(elementBuilder("img"));
document.querySelector("#profileNameBox img").src = "./images/blueTick.png";
document.querySelector("#profileNameBox img").style.width = "40";
document.querySelector("nav").appendChild(elementBuilder("button","","","menuClick()"));
document.querySelector("nav button:last-child").innerHTML = barMenu;
//profileBox
document.getElementById("container").appendChild(elementBuilder("div","profileBox"));
document.querySelector(".profileBox").appendChild(elementBuilder("div","profileDetails"));
document.querySelector(".profileDetails").appendChild(elementBuilder("div","","profileImgBox"));
document.getElementById("profileImgBox").appendChild(elementBuilder("img"));
document.querySelector("#profileImgBox img").src = "./images/profile-instagram.jpg";
document.querySelector("#profileImgBox img").style.width = "145";
document.querySelector(".profileDetails").appendChild(elementBuilder("div","countBox"));
document.querySelector(".countBox").appendChild(elementBuilder("div","profileStatistics"));
document.querySelector(".profileStatistics:first-child").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics span:first-child").innerHTML = "6,386";
document.querySelector(".profileStatistics:first-child").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics span:last-child").innerHTML = "Posts";
document.querySelector(".countBox").appendChild(elementBuilder("div","profileStatistics"));
document.querySelector(".profileStatistics:nth-child(2)").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics:nth-child(2) span:first-child").innerHTML = "350 M";
document.querySelector(".profileStatistics:nth-child(2)").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics:nth-child(2) span:last-child").innerHTML = "Followers";
document.querySelector(".countBox").appendChild(elementBuilder("div","profileStatistics"));
document.querySelector(".profileStatistics:last-child").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics:last-child span:first-child").innerHTML = "101";
document.querySelector(".profileStatistics:last-child").appendChild(elementBuilder("span"));
document.querySelector(".profileStatistics:last-child span:last-child").innerHTML = "Following";
//bio
document.getElementById("container").appendChild(elementBuilder("section","bioBox"));
document.querySelector(".bioBox").appendChild(elementBuilder("h1"));
document.querySelector(".bioBox h1").innerHTML = "instagram";
document.querySelector(".bioBox").appendChild(elementBuilder("p"));
document.querySelector(".bioBox p").innerHTML = "Bringing you closer to the people and things you<br>love. ❤️";
document.querySelector(".bioBox").appendChild(elementBuilder("a"));
document.querySelector(".bioBox a").innerHTML = "www.facebook.com/covidsupport";
document.querySelector(".bioBox a").href = "https://www.facebook.com/community_help/?page_source=fb_marketing_covid_mar_campaign";
//action buttons
document.getElementById("container").appendChild(elementBuilder("div","actionBox"));
document.querySelector(".actionBox").appendChild(elementBuilder("button","","followBtn","followClick()"));
document.getElementById("followBtn").innerHTML = "Follow";
document.querySelector(".actionBox").appendChild(elementBuilder("button","","messageBtn","messageClick()"));
document.getElementById("messageBtn").innerHTML = "Message";
document.querySelector(".actionBox").appendChild(elementBuilder("button","","otherUsersBtn","otherUsersClick()"));
document.getElementById("otherUsersBtn").appendChild(elementBuilder("i","fa fa-angle-down",""));






