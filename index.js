const barMenu = `<svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>`;
let containerChildren = [];
const container = React.createElement(
  "div",
  {
    id: "container",
    key: 1,
  },
  containerChildren
);
ReactDOM.render(container, document.getElementById("root"));
ReactDOM.render(containerChildren, document.getElementById("container"));
//nav
const navChildren = [];
const navBtn1 = React.createElement(
  "button",
  {
    onClick: () => {
      console.log("backClick");
    },
    key: 2,
  },
  React.createElement("i", {
    className: "fa fa-angle-left backBtn",
  })
);
navChildren.push(navBtn1);
const profileNameBox = React.createElement(
  "div",
  {
    id: "profileNameBox",
    key: 3,
  },
  React.createElement("h2", null, "instagram")
);
navChildren.push(profileNameBox);
const navBtn2 = React.createElement("button", {
  onClick: () => {
    console.log("menuClick");
  },
  id: "navBtn2",
  key: 4,
});
navChildren.push(navBtn2);
const nav = React.createElement("nav", {}, navChildren);
ReactDOM.render(nav, document.getElementById("container"));
document.querySelector("#navBtn2").innerHTML = barMenu;
// profileBox
profileBoxChildren = [];
const profileBox = React.createElement(
  "div",
  {
    className: "profileBox",
    key: 5,
  },
  profileBoxChildren
);
profileDetailsChildren = [];
const profileDetails = React.createElement(
  "div",
  {
    className: "profileDetails",
    key: 6,
  },
  profileDetailsChildren
);
const profileImgBox = React.createElement(
  "div",
  {
    id: "profileImgBox",
    key: 7,
  },
  React.createElement("img", {
    src: "./images/profile-instagram.jpg",
    width: "145",
    key: 8,
  })
);
countBoxChildren = [];
const countBox = React.createElement(
  "div",
  {
    className: "countBox",
    key: 9,
  },
  countBoxChildren,
  countBoxChildren,
  countBoxChildren
);
const profileStatistics = React.createElement(
  "div",
  {
    className: "profileStatistics",
    key: 10,
  },
  React.createElement("span"),
  React.createElement("span")
);

profileBoxChildren.push(profileDetails);
profileDetailsChildren.push(profileImgBox);
profileDetailsChildren.push(countBox);
countBoxChildren.push(profileStatistics);
containerChildren.push(nav);
containerChildren.push(profileBox);
ReactDOM.render(containerChildren, document.getElementById("container"));
document.querySelector(".profileStatistics span:first-child").innerHTML =
  "6,386";
document.querySelector(".profileStatistics span:last-child").innerHTML =
  "Posts";
document.querySelector(
  ".profileStatistics:nth-child(2) span:first-child"
).innerHTML = "350 M";
document.querySelector(
  ".profileStatistics:nth-child(2) span:last-child"
).innerHTML = "Followers";
document.querySelector(
  ".profileStatistics:last-child span:first-child"
).innerHTML = "101";
document.querySelector(
  ".profileStatistics:last-child span:last-child"
).innerHTML = "Following";
//bio
const bioBox = React.createElement(
  "section",
  {
    className: "bioBox",
    key: 11,
  },
  React.createElement("h3", null, "instagram"),
  React.createElement(
    "p",
    null,
    "Bringing you closer to the people and things you love. ❤️"
  ),
  React.createElement(
    "a",
    {
      href: "https://www.facebook.com/community_help/?page_source=fb_marketing_covid_mar_campaign",
      key: 10,
    },
    "www.facebook.com/covidsupport"
  )
);
containerChildren = [];
containerChildren.push(nav, profileBox, bioBox);
ReactDOM.render(containerChildren, document.getElementById("container"));
ReactDOM.render(container, document.getElementById("root"));
//actions buttons
const actionBox = React.createElement(
  "div",
  {
    className: "actionBox",
    key: 12,
  },
  React.createElement(
    "button",
    {
      id: "followBtn",
      onClick: () => {
        console.log("followClick");
      },
    },
    "Follow"
  ),
  React.createElement(
    "button",
    {
      id: "messageBtn",
      onClick: () => {
        console.log("messageClick");
      },
    },
    "Message"
  ),
  React.createElement(
    "button",
    {
      id: "otherUsersBtn",
      onClick: () => {
        console.log("otherUsersClick");
      },
    },
    React.createElement("i", {
      className: "fa fa-angle-down",
    })
  )
);
containerChildren = [];
containerChildren.push(nav, profileBox, bioBox, actionBox);
ReactDOM.render(containerChildren, document.getElementById("container"));
ReactDOM.render(container, document.getElementById("root"));
