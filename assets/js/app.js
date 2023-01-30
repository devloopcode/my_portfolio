/****** SHOW MENU ******/
const nav_menu = document.getElementById("nav-menu");
const nav_toggle = document.getElementById("nav-toggle");
const nav__close = document.getElementById("nav-close");

if (nav_toggle) {
  nav_toggle.addEventListener("click", () => {
    nav_menu.classList.add("show-menu");
  });
}

if (nav__close) {
  nav__close.addEventListener("click", () => {
    nav_menu.classList.remove("show-menu");
  });
}

const nav_link = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const nav_menu = document.getElementById("nav-menu");
  nav_menu.classList.remove("show-menu");
};

nav_link.forEach((link) => link.addEventListener("click", linkAction));

/****** ACCORDION ******/

const skills__content = document.getElementsByClassName("skills__content");
const skills__header = document.querySelectorAll(".skills__header");

const toggleSkills = (index) => {
  let item__class = Array.from(skills__content);

  if (index === 0) {
    if (item__class[0].className === "skills__content skills__open") {
      item__class[0].className = "skills__content skills__close";
    } else if (item__class[0].className === "skills__content skills__close") {
      item__class[0].className = "skills__content skills__open";
    }
  } else {
    if (item__class[1].className === "skills__content skills__close") {
      item__class[1].className = "skills__content skills__open";
    } else if (item__class[1].className === "skills__content skills__open") {
      item__class[1].className = "skills__content skills__close";
    }
  }
};

skills__header.forEach((item, index) =>
  item.addEventListener("click", () => toggleSkills(index))
);

/****** MODAL ******/
const modal_views = document.querySelectorAll(".services__modal");
const modal_btns = document.querySelectorAll(".services__button");
const modal_closes = document.querySelectorAll(".services__modal__close");

let showModal = (target) => {
  modal_views[target].classList.add("active__modal");
};

let hiddeModal = () => {
  modal_views.forEach((modal) => modal.classList.remove("active__modal"));
};

modal_btns.forEach((btn, index) => {
  btn.addEventListener("click", () => showModal(index));
});

modal_closes.forEach((item) => {
  item.addEventListener("click", () => {
    modal_views.forEach((item) => {
      item.classList.remove("active__modal");
    });
  });
});

modal_views[0].addEventListener("click", () => {
  hiddeModal();
});

modal_views[1].addEventListener("click", () => {
  hiddeModal();
});

/****** COPYRIGHT ******/
const copy = document.getElementById("copy");
const year = new Date().getFullYear();
copy.innerHTML = `Copyrights &#169; ${year}. All rights reserved`;

/****** SCROLL UP ******/
const scrollUp = () => {
  const scroll__up = document.getElementById("scroll__up");
  if (this.scrollY >= 560) {
    scroll__up.classList.add("show__scroll");
  } else {
    scroll__up.classList.remove("show__scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/****** ACTIVE LINK ******/
const sections = document.querySelectorAll("section[id]");
const nav__links = document.querySelectorAll(".nav__link");

const active = () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  nav__links.forEach((li) => {
    let target = li.href + "";
    li.classList.remove("active-link");
    console.log(target.split("#")[2] === current);
    if (target.split("#")[1] === current) {
      li.classList.add("active-link");
    }
  });
};

window.addEventListener("scroll", active);

/****** CHANGE BACKGROUND HEADER ******/
const hanldeHeader = () => {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", hanldeHeader);

/****** DARK MODE / LIGHT MODE ******/
const theme_btn = document.getElementById("theme-button");
const dark_theme = "dark-theme";
const icon_theme = "uil-sun";

const selected_theme = localStorage.getItem("selected_theme");
const selected_icon = localStorage.getItem("selected_icon");

const getCurrentTheme = () =>
  document.body.classList.contains(dark_theme) ? "dark" : "light";

const getCurrentIcon = () =>
  theme_btn.classList.contains(icon_theme) ? "uil-moon" : "uil-sun";

if (selected_theme) {
  document.body.classList[selected_theme === "dark" ? "add" : "remove"](
    dark_theme
  );

  theme_btn.classList[selected_icon === "uil-moon" ? "add" : "remove"](
    icon_theme
  );
}

theme_btn.addEventListener("click", () => {
  document.body.classList.toggle(dark_theme);
  theme_btn.classList.toggle(icon_theme);

  localStorage.setItem("selected_theme", getCurrentTheme());
  localStorage.setItem("selected_icon", getCurrentIcon());
});
