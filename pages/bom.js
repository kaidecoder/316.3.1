// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//The Selectors
let mainEl = document.querySelector("main");
let topMenuEl = document.querySelector("#top-menu");
let subMenuEl = document.querySelector("#sub-menu");

//The selections
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
topMenuEl.style.height = "100%";
subMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
topMenuEl.classList.add("flex-around");
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Build the submenu
let subA;
function buildSubmenu() {
  subMenuEl.innerHTML = "";
  menuLinks.forEach((link) => {
    if (link.subLinks) {
      sublinks = link.subLinks;
      console.log(sublinks);
      sublinks.forEach((link) => {
        console.log(link);
        subA = document.createElement("a");
        subA.href = link.href;
        subA.textContent = link.text;
        console.log(link.text);
        subMenuEl.appendChild(subA);
      });
    }
  });
}

//create the links
let aEl;
menuLinks.forEach((link) => {
  aEl = document.createElement("a");
  aEl.href = link.href;
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

//The event listeners
const topMenuLinks = document.querySelectorAll("a");
const subMenuLinks = document.querySelectorAll("a");
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
      return;
    } else if (link === e.target) {
      if (!link.classList.contains("active")) {
        if (link.text === "about") {
          return;
        } else {
          subMenuEl.style.top = "100%";
          if (e.target) {
            buildSubmenu();
          }
        }
        link.classList.toggle("active");
      } else {
        subMenuEl.style.top = "0%";
        link.classList.remove("active");
      }
    }
  });
});

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("a")) {
    return;
  }
  console.log(subA);

  subMenuEl.style.top = "0";
  
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  mainEl.replaceChild(
    `<h1>${e.target.textContent}</h1>`,
    mainEl.firstElementChild,
  );
});
