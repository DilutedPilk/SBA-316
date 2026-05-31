// ----------------------------------------------->> Navigation bar

const navBar = document.getElementById('topNav');
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.top = "0"
navBar.style.justifyContent = "space-between";

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

let dropdown = document.getElementById("dropdown");
dropdown.style.position = "fixed"
dropdown.style.height = "50px";
dropdown.style.width = "200px";
dropdown.style.padding = "5px";
dropdown.style.top = "0"
dropdown.style.right = "0"

// ----------------------------------------------->> Main content

const main = document.querySelector('main');

let topImage = document.createElement("div");
topImage.style.marginTop = "50px" 
main.appendChild(topImage);

let mask = document.createElement('img');
mask.id = "mask";
mask.src = "./images/pexels-sabeel-ahammed-15010-68357.jpg";
mask.style.width = "100%";
topImage.appendChild(mask);

const content = document.createElement('div');
content.style.margin = "10px";
content.id = "content"
main.appendChild(content);

const title = document.createElement('h1');
title.id = "title";
title.textContent = "SBA 316";
content.appendChild(title);
content.appendChild(document.createElement('hr'));

const changeDiv = document.createElement('div')
content.appendChild(changeDiv)

// ----------------------------------------------->> Login credentials

const arr = [
    {username: 'Diluted'}
]

// ----------------------------------------------->> Event listeners

navBar.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === login && login.classList != 'active') {
        login.classList.add('active')
        dropdown.style.top = "8%"
    } else if (e.target !== login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0"
    } else if (e.target === login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0"
    }
})

main.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target !== login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0"
    }
})

dropdown.addEventListener('submit', (e) =>{

})
