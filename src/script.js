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

dropdown.lastElementChild.style.position = "fixed"
dropdown.lastElementChild.style.height = "30px";
dropdown.lastElementChild.style.width = "210px";
dropdown.lastElementChild.style.padding = "5px";
dropdown.lastElementChild.style.top = "0"
dropdown.lastElementChild.style.right = "0"

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
changeDiv.textContent = "Please log in to gain access. (Hint: program has the username and password logged)"
changeDiv.style.textAlign = 'center';
content.appendChild(changeDiv);

const gif = document.createElement("img");
gif.src = "./images/smugtola-dancing.gif";
gif.style.display = 'block';
gif.style.marginLeft = "auto"
gif.style.marginRight = "auto"
gif.style.width = "100px"

// ----------------------------------------------->> Login credentials

const user = { username: "dilutedpilk", password: "SBA_316" };
localStorage.clear();
localStorage.setItem(`account`, JSON.stringify(user))

// ----------------------------------------------->> Random div

const frag = document.createDocumentFragment();
frag.appendChild(gif);
frag.appendChild(document.createElement('hr'));
frag.appendChild(document.createTextNode('One question before logging out.'));
frag.appendChild(document.createElement('p'));
frag.lastElementChild.textContent = "What genre of games do you like?";
frag.appendChild(document.createElement('br'))
frag.appendChild(document.createElement('div'))
frag.lastElementChild.id = "genreButtons"


const genreList = [
    "survival",
    "sci-fi",
    "horror",
    "puzzle",
    "creature collector",
    "simulator",
    "RPG",
    "metroidvania",
    "FPS"
]

// ----------------------------------------------->> Event listeners

navBar.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === login && login.classList != 'active') {
        login.classList.add('active')
        dropdown.style.top = "8%"
        dropdown.lastElementChild.style.top = "16%"
    } else if (e.target !== login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0"
        dropdown.lastElementChild.style.top = "0"
    } else if (e.target === login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0";
        dropdown.lastElementChild.style.top = "0";
    }
});

main.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target !== login && login.classList == 'active') {
        login.classList.remove('active');
        dropdown.style.top = "0";
        dropdown.lastElementChild.style.top = "0";
    }
});

dropdown.addEventListener('click', (e) => {

    const username = dropdown.firstElementChild;
    const pass = username.nextElementSibling;
    const value = JSON.parse(localStorage.getItem("account"));
    const submitButton = dropdown.lastElementChild;

    if (e.target === submitButton) {
        if (username.value.toLowerCase() === value.username && pass.value === value.password) {
            if (content.id != "shown") {
                alert("Success!");
                content.firstElementChild.textContent = "You are logged in.";
                content.lastElementChild.textContent = "You can now see the rest of the page!";
                content.appendChild(frag);
                for (let i = 0; i < genreList.length; i++) {
                    let genreButton = document.createElement('button');
                    genreButton.textContent = genreList[i];
                    genreButton.style.margin = '5px'
                    content.lastElementChild.appendChild(genreButton);
                }
                content.id = "shown"
            }
        } else {
            alert("Username and/or password are incorrect. Please try again.");
        }
    }

});

content.addEventListener('click', (e) => {

    const buttonDiv = content.lastElementChild
    const genreButtons = buttonDiv.querySelectorAll('button');

    for (let i = 0; i < genreButtons.length; i++) {
        if (e.target === genreButtons[i]) {
            alert(`You chose ${genreButtons[i].textContent}!`)
        }
    }
})
