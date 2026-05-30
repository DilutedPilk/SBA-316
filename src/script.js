const navBar = document.querySelector('nav');
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.justifyContent = "space-between";

const main = document.querySelector('main');

const logo = document.createElement('img');
logo.id = "logo";
logo.src = "images/placeholder-logo-3492933240.png";
logo.style.width = "150px"
logo.style.objectFit = "cover";
navBar.appendChild(logo);

let navContents = document.createElement('div');
navBar.appendChild(navContents);

let login = document.createElement('button');
login.textContent = "Log In";
login.style.height = "30px";
login.style.marginRight = "15px";
navBar.appendChild(login);

let topImage = document.createElement("div");
topImage.id = "topImage";
main.appendChild(topImage);

let mask = document.createElement('img');
mask.id = "mask";
mask.src = "./images/pexels-sabeel-ahammed-15010-68357.jpg";
mask.style.width = "100%";
topImage.appendChild(mask);

const content = document.createElement('div');
content.style.margin = "10px";
main.appendChild(content);

let title = document.createElement('h1');
title.textContent = "Test";
content.appendChild(title);
content.appendChild(document.createElement('hr'));

for (let i = 1; i <= 4; i++){
    let loremTitle = document.createElement('h3');
    loremTitle.textContent = "Placeholder Title";
    loremTitle.style.textDecoration = "underline";
    loremTitle.style.textAlign = "center";

    let lorem = document.createElement('div');
    lorem.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    content.appendChild(loremTitle)
    content.appendChild(lorem);
    content.appendChild(document.createElement('hr'));
}

