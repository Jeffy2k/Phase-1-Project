let body = document.querySelector("body");

//Appends login page
function appendLoginPage() {
  body.classList.add("login");
  body.innerHTML = `
    <div id="box">
        <div id="image">
          <img src="" alt="" />
        </div>
        <div id="replace">
          <div id="info">
            <h2 id="h2">Recipehub</h2>
            <h3 style = "font-size:1.5em">Login</h3>
            <h3 id="h3">Welcome to recipehub</h3>
            <h4 id="error"></h4>
          </div>
        <div class="container">
          <form id="submission">
            <div id="input-icons">
              <div id="inside">
                <i id="person"class="material-icons">person</i>
                <input type="text" id="fname" placeholder="Name"/>
              </div>
              <div id="icon-inside">
                <i id="email" class="material-icons">mail</i>
                <input type="email" id="email" placeholder="Email.." />
             </div> 
             <div id="icon-inside">
               <i id="pass"class="material-icons">lock</i>
               <input type="number" id="password" placeholder="password" /> 
             </div>
             <div id="check">
               <label class="checkbox">
                 Remember me
                 <input type="checkbox" id="mark" />
                 <span class="checkmark"><a href="#">Forgot Password?</a></span>
               </label>
             </div>
              <br />
              <br />
             <button id="btn">Login</button>
           </div>
          </form>
        </div>
      </div>
    </div>
    `;
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name !== "" && email !== "" && password !== "") {
      document.getElementById("replace").classList.add("waiting");
      setTimeout(() => {
        welcomeMessage(name);
      }, 2000);
      setTimeout(() => {
        homePage();
      }, 6000);
    } else if (name === "" || email === "" || password === "") {
      document.getElementById("error").innerHTML = "*please fill out all areas";
    }
  });
}
appendLoginPage();

//Appends welcome message.
function welcomeMessage(name) {
  document.getElementById("replace");
  replace.innerHTML = "";
  replace.innerHTML = `
    <div class = "fadeIn">
      <br>
      <br> 
      <h1 id="message">Welcome  ${name}</h1>
      <i id="done" class="material-icons" style="font-size:150px">done</i>
    </div>
    `;
}

//Appends the Home Page
function homePage() {
  let body = document.querySelector("body");
  body.classList.remove("login");
  body.classList.add("homePage");
  body.innerHTML = `
  <div id="header">
    <nav>
        <ul>
          <li id="first">
          <a onclick = "returnHome()" href="#">Home</a>
          </li>
          <li id="second">
              <a onclick = "menuPage()" href="#">Recipes</a>
          </li>
          <li id="third">
              <a href="#aboutBox">About Us</a>
          </li>
          <li id="last">
              <a href="#contacts">Contact Us</a>
          </li>
        </ul>
    </nav>
    <div id="webname">
      <h2>Recipehub</h2>
    </div>
    <h3 id = "slogan">Cook . Eat . Repeat</h3>
  </div>
  <div id = "work">
    <h1 id="offer">What we offer :</h1>
    <div class = "offerContent"  id="offerCont">
      <h3 id = "services">A variety of Recipes</h3>
      <div class="leftBtnCont"><button id="leftBtn"><<</button></div>
      <div class="rightBtnCont"><button id="rightBtn">>></button></div>
    </div>
  </div>
  <div id = "aboutBox">
    <div id = "about">
      <h1 id = "aboutTitle">About Us</h1>
      <p id = "aboutDetails">Recipehub is a trusted resource for home cooks that offers a large variety of recipes spread across different mealtypes.Recipehub provides information on the ingredients and well outlined step by step instructions on how to prepare different meals.Over the years since recipehub was started by Rick Sanchez as home cooking blog it has drawn thousands of food enthusiasts across the globe.</p>
    </div>
    <div id = "aboutPic">
    </div>
  </div>
  <div id = "contacts">
    <div id = "mainContact">
      <div class = "contactChild" id = "numbers">
        <i id="call" class="material-icons">call</i>
        <h2 class = "numH2">Talk to us</h2>
        <p style = "width:500px;margin:auto;margin-top:1em" >Interested in reaching our team?Just pick up your phone an chat with a member of our support team</p>
        <br>
        <h2 id = "tellNo"> +254712345678</h2>
        <br>
        <br>
      </div>
      <div class = "contactChild" id = "socialplatforms">
        <i id="call" class="material-icons">forum</i>
        <p style = "width:500px;margin:auto;margin-top:1em" >You can also reach us through;</p>
        <span class="mail" id = "mail1" style = "display:inline-flex"><img class ="social" src = "./images/gmail.png"><h5>recipehub@gmail.com</h5></span>
        <br>
        <span class="mail" style = "display:inline-flex"><img class ="social" src = "./images/instagram.png"><h5>_recipe.hub</h5></span>
        <br>
        <span class="mail" style = "display:inline-flex"><img class ="social" src = "./images/facebook.png"><h5>recipe.hub</h5></span>
        <br>
        <span class="mail" style = "display:inline-flex"><img  class ="social" src = "./images/twitter.png"><h5>recipe.hub</h5></span>
      </div>
  </div>
  </div>
  `;
  // document.getElementsByClassName('return').addEventListener('click',()=>{
  //   console.log('clicked');
  // })
  document.getElementById("rightBtn").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("offerCont").classList.remove("offerContent");
    document.getElementById("offerCont").classList.add("offerContent2");
    document.getElementById("services").innerText = "Step by step Instructions";
  });
  document.getElementById("leftBtn").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("offerCont").classList.remove("offerContent2");
    document.getElementById("offerCont").classList.add("offerContent");
    document.getElementById("services").innerText = "A variety of Recipes";
  });
}

//return home page
function returnHome() {
   console.log("clicked ")
  document.querySelector("body").innerHTML = "";
  return homePage();
}

//Appends the Menu Page
function menuPage() {
  let body = document.querySelector("body");
  body.innerHTML = "";
  body.classList.add("menuPage");
  body.innerHTML = `
  <div id="header">

  <nav>
    <ul>

        <li id="first">
        <a onclick = "returnHome()" href="#">Home</a>
        </li>
        <li id="second">
        <a onclick = "menuPage()" href="#">Recipes</a>
        </li>
        <li id="third">
            <a onclick = "returnHome()" href="#aboutBox">About Us</a>
        </li>
        <li id="last">
            <a onclick = "returnHome()" href="#contacts">Contact Us</a>
        </li>
    </ul>
</nav>

<div id="webname">
  <h2>Recipes</h2>
</div>
</div>
<div id="topContainer">
 <div id="top1">
 <span style="display: inline-flex">
  <input type="search" id = "itemSearch"></input>
  <i id="searchIcon" class="material-icons">search</i>
  <button onclick="fetchFoodByIngredients()" id="btnSearch">Search by ingredients</button>
  <button onclick="searchVideos()" id="btnSearch2">Search Video</button>
 </span>
 </div>
 <div id="top">
 </div>
</div>
<div id = "mainArea">
</div>
  `;
  let mainArea = document.getElementById("mainArea");
  mainArea.innerHTML = `
<div class="grid-container">
    <div onclick = 'getValue("breakfast")'class="grid-item">
        <div class = "pic" id="breakfast1" >
            <h3 id="label">Breakfast</h3>
        </div>
    </div>
    <!-- <div onclick = 'getValue()' class="grid-item">
        <div class = "pic"  id="lunch1" >
        <h3 id="label">Lunch</h3>
        </div>
    </div>   -->
    <div onclick = 'getValue("burgers")' class="grid-item">
        <div class = "pic" id="burgers1" >
        <h3 id="label">burgers</h3>
    </div>
    </div>
    <div onclick = 'getValue("icecream")' class="grid-item">
        <div class = "pic"  id="icecream1" >
        <h3 id="label">Icecream</h3>
    </div>
    </div>
    <div onclick = 'getValue("drinks")' class="grid-item">
        <div class = "pic"  id="drinks1" >
        <h3 id ="label">Drinks</h3>
    </div>
    </div>
  </div>
`;
}
