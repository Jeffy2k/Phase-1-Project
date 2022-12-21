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
      <p id = "aboutDetails">Recipehub is a trusted resource for home cooks that offers a large variety of recipes spread across different mealtypes.Recipehub provides information on the ingredients and well outlined step by step instructions on how to prepare different meals.Over the years, since recipehub was started by Jeff Maina as, home cooking blog, it has drawn thousands of food enthusiasts from across the globe.</p>
    </div>
    <div id = "aboutPic">
    </div>
  </div>
  <div id = "contacts">
    <div id = "mainContact">
      <div class = "contactChild" id = "numbers">
        <i id="call" class="material-icons">call</i>
        <h2 class = "numH2">Talk to us</h2>
        <p style = "width:500px;margin:auto;margin-top:1em" >Interested in reaching our team?Just pick up your phone and chat with a member of our support team</p>
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
  console.log("clicked ");
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
 <span style="display: inline-flex">
  <div onclick = 'fetchByFirstLetter("a")' id="letters"><h6> A </h6></div>
  <div onclick = 'fetchByFirstLetter("b")' id="letters"><h6> B </h6></div>
  <div onclick = 'fetchByFirstLetter("c")' id="letters"><h6> C </h6></div>
  <div onclick = 'fetchByFirstLetter("d")' id="letters"><h6> D </h6></div>
  <div onclick = 'fetchByFirstLetter("e")' id="letters"><h6> E </h6></div>
  <div onclick = 'fetchByFirstLetter("f")' id="letters"><h6> F </h6></div>
  <div onclick = 'fetchByFirstLetter("g")' id="letters"><h6> G </h6></div>
  <div onclick = 'fetchByFirstLetter("h")' id="letters"><h6> H </h6></div>
  <div onclick = 'fetchByFirstLetter("i")' id="letters"><h6> I </h6></div>
  <div onclick = 'fetchByFirstLetter("j")' id="letters"><h6> J </h6></div>
  <div onclick = 'fetchByFirstLetter("k")' id="letters"><h6> K </h6></div>
  <div onclick = 'fetchByFirstLetter("l")' id="letters"><h6> L </h6></div>
  <div onclick = 'fetchByFirstLetter("m")' id="letters"><h6> M </h6></div>
  <div onclick = 'fetchByFirstLetter("n")' id="letters"><h6> N </h6></div>
  <div onclick = 'fetchByFirstLetter("o")' id="letters"><h6> O </h6></div>
  <div onclick = 'fetchByFirstLetter("p")' id="letters"><h6> P </h6></div>
  <div onclick = 'fetchByFirstLetter("q")' id="letters"><h6> Q </h6></div>
  <div onclick = 'fetchByFirstLetter("r")' id="letters"><h6> R </h6></div>
  <div onclick = 'fetchByFirstLetter("s")' id="letters"><h6> S </h6></div>
  <div onclick = 'fetchByFirstLetter("t")' id="letters"><h6> T </h6></div>
  <div onclick = 'fetchByFirstLetter("u")' id="letters"><h6> U </h6></div>
  <div onclick = 'fetchByFirstLetter("v")' id="letters"><h6> V </h6></div>
  <div onclick = 'fetchByFirstLetter("w")' id="letters"><h6> W </h6></div>
  <div onclick = 'fetchByFirstLetter("x")' id="letters"><h6> X </h6></div>
  <div onclick = 'fetchByFirstLetter("y")' id="letters"><h6> Y </h6></div>
  <div onclick = 'fetchByFirstLetter("Z")' id="letters"><h6> Z </h6></div>
 </span>
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

//fetches recipes by first letter
function fetchByFirstLetter(letter){
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
.then((response)=>response.json())
.then((data) => {
  appendMenu(data)
  appendLetterRecipes(data)
  let firstObj = data.meals
  appendLetterMealCard(firstObj[0])
})
}

//appendes recipes searched by first letter
function appendLetterRecipes(data){
let obj = data.meals
obj.forEach((element) => {
  let titles = document.createElement("div");
  let z = Math.floor(Math.random() * 5) + 1
  titles.id = "menuu";
  titles.innerHTML = `
    <span>
     <img src="${element.strMealThumb}" id = "menuPic"/>
    </span>
    <span style = "position:relative;width:350px">
    <h3 id = "menuuH3">${element.strMeal}</h3>
    <span style = "position:absolute;bottom:0">
      <span class = "menuuIcons">
      <i id="menuFav" class="material-icons">grade</i>
      <h6 class = "likesNum">${z}</h6>
      </span>
      <span class = "menuuIcons">
      <i id="menuVis" class="material-icons">visibility</i>
      <h6>${z * 78}</h6>
      </span>
     </ span>
    </span>
      `;
  titles.addEventListener("click", () => {
    appendLetterMealCard(element);
  });
  document.querySelector(".listColumn").appendChild(titles);
});
}
function appendLetterMealCard(obj){
  let detailcard = document.getElementById("mealCard");
  detailcard.classList.remove("fadeIn2");
  detailcard.classList.add("mealCard");
  detailcard.innerHTML = `
      <div>
        <img id= 'img' src="${obj.strMealThumb}" alt="">
      </div>
      <div style ='padding-top:3em;padding-bottom:3em;'>
      <div id="ingredients">
          <h2>Ingredients</h2>
      </div>
      <span style="display:inline-flex">
        <button id="dir">Directions</button>
        <button id="fav2"><i class="material-icons" id = "iconfav2">favorite</i></button>
        <h6 id = "totalLikes">89</h6>
      </span>
      <h2 id="facts">Nutritional Facts</h2>
      <div id="nuitrition">
          <div class="nut">
          <h3 id="foodgroup">Calories</h3>
          <span id="quantity">89</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Proteins</h3>
          <span id="quantity">89</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Fat</h3>
          <span id="quantity">89g</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Carbohydrates</h3>
          <span id="quantity">89g</span>
        </div>
      </div>
      </div>
  `;
  let likeBtn = document.getElementById("fav2");
  likeBtn.addEventListener("click", () => {
    let x = document.getElementById("totalLikes").textContent
    x += 1;
    document.getElementById("totalLikes").textContent = x;
  });
  let btn = document.getElementById("dir");
  btn.addEventListener("click", () => {
    detailcard.classList.remove("mealCard");
    detailcard.innerHTML = "";
    detailcard.innerHTML = `
    <img id="backarrow2" src="./images/left-arrow.png"></img>
    <h2 class = "dirHead">DIRECTIONS</h2>
    <div id = "dirBox">
    </div>
    <div id = "commentBox">
      <h1>Add a comment</h1>
    <span style = "display: inline-flex">
      <textarea class="form-control" placeholder="Add a comment or pic..." rows="4"></textarea>
      <label for="files" class="btn"><i class="material-icons" id = "post">photo_camera</i></label>
      <button class = "send">Post</button>
      <input id="files" style="visibility:hidden;" type="file">
    </span>
    <div id = "moreComments">
      <h6>View Comments</h6>
      <i class="material-icons" id = "arrowDown">keyboard_arrow_down</i>
    </div>
    <div id = 'commentSection' class = "commSection">
     <i class="material-icons" id = "arrowUp">keyboard_arrow_up</i>
    <div class = "userComment">
    </div>
    <div class = "randomComment">
     <h6  id = "actCom"></h6>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/b0/4d/13/b04d13dbb49d01206b2c4825046aa466.jpg"/>
        <span>
          <span style = "display:inline-flex"><h5 id = "comName">gerald.</h4><h6 id = "time"><i>1 hr ago</i></h6></span>
          <h6 id = "actCom">Amazing😍</h6>
        <span class = "votesCont" ">
          <img id = "upVote1" src = "./images/up-arrow.png">
          <h6 id = "voteUp1" class = "actVote1">82</h6>
          <img id = "downVote1" src = "./images/down-arrow.png">
          <h6 id = "voteDown1" class = "actVote2">3</h6>
        </span>
        </span>
      </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i0.wp.com/trapital.co/wp-content/uploads/2022/06/kendrick-lamar-heart.jpg?w=1200&ssl=1"/>
         <span>
          <span style = "display:inline-flex"><h5 id = "comName">Ace</h4><h6 id = "time"><i>5 hrs ago</i></h6></span>
          <h6 id = "actCom">Awesome!</h6>
        <span class = "votesCont"">
          <img id = "upVote2" src = "./images/up-arrow.png">
          <h6 id = "voteUp2" class = "actVote1">76</h6>
          <img id = "downVote2" src = "./images/down-arrow.png">
          <h6 id = "voteDown2" class = "actVote2" >1</h6>
        </span>
        </span>
       </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/50/a8/bd/50a8bdca9971873b79f6f63852212c26.jpg"/>
        <span>
          <span style = "display:inline-flex"><h5 id = "comName">glow_wworm2</h4><h6 id = "time"><i>2 months ago</i></h6></span>
          <h6 id = "actCom">NOOOOOO!!😭😭</h6>
          <img id = "userPic" src = "https://i.pinimg.com/564x/5e/85/58/5e85581c74a38590db8b35e6d3407bfb.jpg"></img>
          <br>
          <span class = "votesCont">
          <img id = "upVote3" src = "./images/up-arrow.png">
          <h6 id = "voteUp3" class = "actVote1">101</h6>
          <img id = "downVote3" src = "./images/down-arrow.png">
          <h6 id = "voteDown3" class = "actVote2">9</h6>
          </span>
        </span>
        </span>
   </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/5f/dc/8d/5fdc8d797aec3c06f0f0be933779b84d.jpg"/>
        <span>
        <span style = "display:inline-flex"><h5 id = "comName">the_Return_of_Bruno</h4><h6 id = "time"><i>2 months ago</i></h6></span>
          <h6 id = "actCom">C'mon😭😭</h6>
          <img id = "userPic" src = "https://i.pinimg.com/564x/a9/bc/51/a9bc51de59e7f79b39cba8235f8071c6.jpg"></img>
          <br>
          <span class = "votesCont">
            <img id = "upVote4" src = "./images/up-arrow.png">
            <h6 id = "voteUp4" class = "actVote1">190</h6>
            <img id = "downVote4" src = "./images/down-arrow.png">
            <h6 id = "voteDown4" class = "actVote2">17</h6>
          </span>
        </span>
      </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/b2/f1/01/b2f101003bd626231e5ef7fd210705c2.jpg"/>
       <span>
        <span style = "display:inline-flex"><h5 id = "comName">the8thsense</h4><h6 id = "time"><i>5 hrs ago</i></h6></span>
        <h6 id = "actCom">The finals was rigged</h6>
      <span class = "votesCont"">
        <img id = "upVote5" src = "./images/up-arrow.png">
        <h6 id = "voteUp5" class = "actVote1">3</h6>
        <img id = "downVote5" src = "./images/down-arrow.png">
        <h6 id = "voteDown5" class = "actVote2">320</h6>
      </span>
      </span>
     </span>
  </div>
  </div>
  </div>
    `;
    document.getElementById("upVote1").addEventListener("click",()=>{
     let upVotes =  parseInt(document.getElementById("voteUp1").textContent);
     upVotes += 1;
     document.getElementById("voteUp1").textContent = upVotes
    })
    document.getElementById("downVote1").addEventListener("click",()=>{
      let downVotes =  parseInt(document.getElementById("voteDown1").textContent)
      downVotes += 1;
      document.getElementById("voteDown1").textContent = downVotes
     })
     document.getElementById("upVote2").addEventListener("click",()=>{
      let upVotes =  parseInt(document.getElementById("voteUp2").textContent);
      upVotes += 1;
      document.getElementById("voteUp2").textContent = upVotes
     })
     document.getElementById("downVote2").addEventListener("click",()=>{
       let downVotes =  parseInt(document.getElementById("voteDown2").textContent)
       downVotes += 1;
       document.getElementById("voteDown2").textContent = downVotes
      })
    document.getElementById("upVote3").addEventListener("click",()=>{
    let upVotes =  parseInt(document.getElementById("voteUp3").textContent);
    upVotes += 1;
    document.getElementById("voteUp3").textContent = upVotes
    })
    document.getElementById("downVote3").addEventListener("click",()=>{
      let downVotes =  parseInt(document.getElementById("voteDown3").textContent)
      downVotes += 1;
      document.getElementById("voteDown3").textContent = downVotes
    })
    document.getElementById("upVote4").addEventListener("click",()=>{
      let upVotes =  parseInt(document.getElementById("voteUp4").textContent);
      upVotes += 1;
      document.getElementById("voteUp4").textContent = upVotes
      })
      document.getElementById("downVote1").addEventListener("click",()=>{
        let downVotes = parseInt(document.getElementById("voteDown4").textContent)
        downVotes += 1;
        document.getElementById("voteDown4").textContent = downVotes
      })
      document.getElementById("upVote5").addEventListener("click",()=>{
        let upVotes =  parseInt(document.getElementById("voteUp5").textContent);
        upVotes += 1;
        document.getElementById("voteUp5").textContent = upVotes
        })
        document.getElementById("downVote5").addEventListener("click",()=>{
          let downVotes = parseInt(document.getElementById("voteDown5").textContent)
          downVotes += 1;
          document.getElementById("voteDown5").textContent = downVotes
        })
        document.querySelector(".send").addEventListener("click", () => {
          let userComment = document.querySelector(".userComment");
          let value = document.querySelector(".form-control").value;
          let value2 = document.querySelector("#files").value;
          if(value !== "" || value2 !== "") {
          userComment.innerHTML = `
         <div class="randomComment">
          <span id="commentSlot">
            <img id = "comImg" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
            <span>
              <span style = "display:inline-flex"><h5 id = "comName">You</h4><h6 id = "time"><i>just now</i></h6>
              <i class="material-icons" id = "cancel">close</i>
              </span>
              <h6 id = "actCom">${value}</h6>
              <img id = "userPic" src = "${value2}"></img>
            <span class = "votesCont" ">
              <img id = "upVote6" src = "./images/up-arrow.png">
              <h6 id = "voteUp6" class = "actVote1">0</h6>
              <img id = "downVote6" src = "./images/down-arrow.png">
              <h6 id = "voteDown6" class = "actVote2">0</h6>
            </span>
            </span>
          </span>
         </span>
         </div>
          `;
          document.getElementById("upVote6").addEventListener("click",()=>{
          let upVotes = parseInt(document.getElementById("voteUp6").textContent);
          upVotes += 1;
          document.getElementById("voteUp6").textContent = upVotes
          })
          document.getElementById("downVote6").addEventListener("click",()=>{
          let downVotes = parseInt(document.getElementById("voteDown6").textContent)
          downVotes += 1;
          document.getElementById("voteDown6").textContent = downVotes
            })
          }
          else if (value === "" && value2 === ""){
            console.log("error")
          }
        });

    document.getElementById("moreComments").addEventListener("click", () => {
      document.getElementById("commentSection").classList.remove("commSection");
      // document.getElementById('commentSection').classList.add('commentSection');
    });
    document.getElementById("arrowUp").addEventListener("click", () => {
      document.getElementById("commentSection").classList.add("commSection");
    });
    document.getElementById("backarrow2").addEventListener("click", () => {
      detailcard.innerHTML = "";
      appendLetterMealCard(obj);
    });
    detailcard.classList.add("fadeIn2");
      let directions = document.createElement("p");
      directions.id = "directions";
      directions.innerHTML = obj.strInstructions;
      document.getElementById("dirBox").appendChild(directions);
  });
    let ingDiv = document.createElement("div");
    ingDiv.id = "ingDiv"
    ingDiv.innerHTML =`
    <h6>${obj.strMeasure1} ${obj.strIngredient1}</h6>
    <h6>${obj.strMeasure2} ${obj.strIngredient2}</h6>
    <h6>${obj.strMeasure3} ${obj.strIngredient3}</h6>
    <h6>${obj.strMeasure4} ${obj.strIngredient4}</h6>
    <h6>${obj.strMeasure5} ${obj.strIngredient5}</h6>
    <h6>${obj.strMeasure6} ${obj.strIngredient6}</h6>
    <h6>${obj.strMeasure7} ${obj.strIngredient7}</h6>
    <h6>${obj.strMeasure8} ${obj.strIngredient8}</h6>
    <h6>${obj.strMeasure9} ${obj.strIngredient9}</h6>
    <h6>${obj.strMeasure10} ${obj.strIngredient10}</h6>
    `
    document.getElementById("ingredients").appendChild(ingDiv);
}


//get value of individual sections.
function getValue(meal) {
  fetch("https://jeffy2k.github.io/jeffy2k.project.github.io/server/meals.json")
    .then((resp) => resp.json())
    .then((result) => {
      let data = result[`${meal}`]
      appendMenu(data);
      menuTitles(data, meal);
      appendFirstMeal(data[0])
    });
}
// //Appends Meals Page
function appendMenu(obj) {
  document.getElementById("mainArea")
  let top1 = document.getElementById("top1");
  top1.innerHTML = "";
  let top = document.getElementById("top");
  top.innerHTML = `
<img id="backarrow" src="./images/arrow.png"></img>
`;
  top.addEventListener("click", () => {
    let mainArea = document.getElementById("mainArea");
    mainArea.innerHTML = "";
    menuPage();
  });
  let dataArea = document.getElementById("mainArea");
  dataArea.innerHTML = "";
  dataArea.innerHTML = `
    <div class="row">
      <div class="listColumn">
      </div>
      <div class="detailsColumn">
          <div id="mealCard">
          </div>
      </div>
    </div>`;
}

//Appends Individual Titles of Meals
function menuTitles(obj, meal) {
  obj.forEach((element) => {
    let titles = document.createElement("div");
    let x =( element.rating/20)
    let z = Math.round(x * 10) / 10
    titles.id = "menuu";
    titles.innerHTML = `
      <span>
       <img src="${element.image}" id = "menuPic"/>
      </span>
      <span style = "position:relative;width:350px">
      <h3 id = "menuuH3">${element.name}</h3>
      <span style = "position:absolute;bottom:0">
        <span class = "menuuIcons">
        <i id="menuFav" class="material-icons">grade</i>
        <h6 class = "likesNum">${z}</h6>
        </span>
        <span class = "menuuIcons">
        <i id="menuVis" class="material-icons">visibility</i>
        <h6>${element.rating * 78}</h6>
        </span>
       </ span>
      </span>
        `;
    titles.addEventListener("click", () => {
      const i = element.id;
      appendMealCard(obj[i - 1], element.rating);
    });
    document.querySelector(".listColumn").appendChild(titles);
  });
  document.getElementById("webname").innerHTML = `${meal}`;
  document.getElementById("webname").style.color = "#FF69B4";
  let firstObj = obj[0];
  appendMealCard(firstObj);
}

//appending individual recipes when the title is clicked
function appendMealCard(obj) {
  let detailcard = document.getElementById("mealCard");
  detailcard.classList.remove("fadeIn2");
  detailcard.classList.add("mealCard");
  detailcard.innerHTML = `
      <div>
        <img id= 'img'src="${obj.image}" alt="">
      </div>
      <div style ='padding-top:3em;padding-bottom:3em;'>
      <div id="ingredients">
          <h2>Ingredients</h2>
      </div>
      <span style="display:inline-flex">
        <button id="dir">Directions</button>
        <button id="fav2"><i class="material-icons" id = "iconfav2">favorite</i></button>
        <h6 id = "totalLikes">${obj.rating}</h6>
      </span>
      <h2 id="facts">Nutritional Facts</h2>
      <div id="nuitrition">
          <div class="nut">
          <h3 id="foodgroup">Calories</h3>
          <span id="quantity">${obj.Calories}</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Proteins</h3>
          <span id="quantity">${obj.Protein} g</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Fat</h3>
          <span id="quantity">${obj.Fat}g</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Carbohydrates</h3>
          <span id="quantity">${obj.Carbohydrates} g</span>
        </div>
      </div>
      </div>
  `;
  let likeBtn = document.getElementById("fav2");
  likeBtn.addEventListener("click", () => {
    obj.rating += 1;
    document.getElementById("totalLikes").textContent = obj.rating;
  });
  let btn = document.getElementById("dir");
  btn.addEventListener("click", () => {
    detailcard.classList.remove("mealCard");
    detailcard.innerHTML = "";
    detailcard.innerHTML = `
    <img id="backarrow2" src="./images/left-arrow.png"></img>
    <h2 class = "dirHead">DIRECTIONS</h2>
    <div>
    <ol id = "dirBox">
    </ol>
    </div>
    <div id = "commentBox">
      <h1>Add a comment</h1>
    <span style = "display: inline-flex">
      <textarea class="form-control" placeholder="Add a comment or pic..." rows="4"></textarea>
      <label for="files" class="btn"><i class="material-icons" id = "post">photo_camera</i></label>
      <button class = "send">Post</button>
      <input id="files" style="visibility:hidden;" type="file">
    </span>
    <div id = "moreComments">
      <h6>View Comments</h6>
      <i class="material-icons" id = "arrowDown">keyboard_arrow_down</i>
    </div>
    <div id = 'commentSection' class = "commSection">
     <i class="material-icons" id = "arrowUp">keyboard_arrow_up</i>
    <div class = "userComment">
    </div>
    <div class = "randomComment">
     <h6  id = "actCom"></h6>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/b0/4d/13/b04d13dbb49d01206b2c4825046aa466.jpg"/>
        <span>
          <span style = "display:inline-flex"><h5 id = "comName">gerald.</h4><h6 id = "time"><i>1 hr ago</i></h6></span>
          <h6 id = "actCom">Amazing😍</h6>
        <span class = "votesCont" ">
          <img id = "upVote1" src = "./images/up-arrow.png">
          <h6 id = "voteUp1" class = "actVote1">82</h6>
          <img id = "downVote1" src = "./images/down-arrow.png">
          <h6 id = "voteDown1" class = "actVote2">3</h6>
        </span>
        </span>
      </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i0.wp.com/trapital.co/wp-content/uploads/2022/06/kendrick-lamar-heart.jpg?w=1200&ssl=1"/>
         <span>
          <span style = "display:inline-flex"><h5 id = "comName">Ace</h4><h6 id = "time"><i>5 hrs ago</i></h6></span>
          <h6 id = "actCom">Awesome!</h6>
        <span class = "votesCont"">
          <img id = "upVote2" src = "./images/up-arrow.png">
          <h6 id = "voteUp2" class = "actVote1">76</h6>
          <img id = "downVote2" src = "./images/down-arrow.png">
          <h6 id = "voteDown2" class = "actVote2" >1</h6>
        </span>
        </span>
       </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/50/a8/bd/50a8bdca9971873b79f6f63852212c26.jpg"/>
        <span>
          <span style = "display:inline-flex"><h5 id = "comName">glow_wworm2</h4><h6 id = "time"><i>2 months ago</i></h6></span>
          <h6 id = "actCom">NOOOOOO!!😭😭</h6>
          <img id = "userPic" src = "https://i.pinimg.com/564x/5e/85/58/5e85581c74a38590db8b35e6d3407bfb.jpg"></img>
          <br>
          <span class = "votesCont">
          <img id = "upVote3" src = "./images/up-arrow.png">
          <h6 id = "voteUp3" class = "actVote1">101</h6>
          <img id = "downVote3" src = "./images/down-arrow.png">
          <h6 id = "voteDown3" class = "actVote2">9</h6>
          </span>
        </span>
        </span>
   </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/5f/dc/8d/5fdc8d797aec3c06f0f0be933779b84d.jpg"/>
        <span>
        <span style = "display:inline-flex"><h5 id = "comName">the_Return_of_Bruno</h4><h6 id = "time"><i>2 months ago</i></h6></span>
          <h6 id = "actCom">C'mon😭😭</h6>
          <img id = "userPic" src = "https://i.pinimg.com/564x/a9/bc/51/a9bc51de59e7f79b39cba8235f8071c6.jpg"></img>
          <br>
          <span class = "votesCont">
            <img id = "upVote4" src = "./images/up-arrow.png">
            <h6 id = "voteUp4" class = "actVote1">190</h6>
            <img id = "downVote4" src = "./images/down-arrow.png">
            <h6 id = "voteDown4" class = "actVote2">17</h6>
          </span>
        </span>
      </span>
    </div>
    <div class = "randomComment">
      <span id="commentSlot">
        <img id = "comImg" src = "https://i.pinimg.com/564x/b2/f1/01/b2f101003bd626231e5ef7fd210705c2.jpg"/>
       <span>
        <span style = "display:inline-flex"><h5 id = "comName">the8thsense</h4><h6 id = "time"><i>5 hrs ago</i></h6></span>
        <h6 id = "actCom">The finals was rigged</h6>
      <span class = "votesCont"">
        <img id = "upVote5" src = "./images/up-arrow.png">
        <h6 id = "voteUp5" class = "actVote1">3</h6>
        <img id = "downVote5" src = "./images/down-arrow.png">
        <h6 id = "voteDown5" class = "actVote2">320</h6>
      </span>
      </span>
     </span>
  </div>
  </div>
  </div>
    `;
    document.getElementById("upVote1").addEventListener("click",()=>{
     let upVotes =  parseInt(document.getElementById("voteUp1").textContent);
     upVotes += 1;
     document.getElementById("voteUp1").textContent = upVotes
    })
    document.getElementById("downVote1").addEventListener("click",()=>{
      let downVotes =  parseInt(document.getElementById("voteDown1").textContent)
      downVotes += 1;
      document.getElementById("voteDown1").textContent = downVotes
     })
     document.getElementById("upVote2").addEventListener("click",()=>{
      let upVotes =  parseInt(document.getElementById("voteUp2").textContent);
      upVotes += 1;
      document.getElementById("voteUp2").textContent = upVotes
     })
     document.getElementById("downVote2").addEventListener("click",()=>{
       let downVotes =  parseInt(document.getElementById("voteDown2").textContent)
       downVotes += 1;
       document.getElementById("voteDown2").textContent = downVotes
      })
    document.getElementById("upVote3").addEventListener("click",()=>{
    let upVotes =  parseInt(document.getElementById("voteUp3").textContent);
    upVotes += 1;
    document.getElementById("voteUp3").textContent = upVotes
    })
    document.getElementById("downVote3").addEventListener("click",()=>{
      let downVotes =  parseInt(document.getElementById("voteDown3").textContent)
      downVotes += 1;
      document.getElementById("voteDown3").textContent = downVotes
    })
    document.getElementById("upVote4").addEventListener("click",()=>{
      let upVotes =  parseInt(document.getElementById("voteUp4").textContent);
      upVotes += 1;
      document.getElementById("voteUp4").textContent = upVotes
      })
      document.getElementById("downVote1").addEventListener("click",()=>{
        let downVotes = parseInt(document.getElementById("voteDown4").textContent)
        downVotes += 1;
        document.getElementById("voteDown4").textContent = downVotes
      })
      document.getElementById("upVote5").addEventListener("click",()=>{
        let upVotes =  parseInt(document.getElementById("voteUp5").textContent);
        upVotes += 1;
        document.getElementById("voteUp5").textContent = upVotes
        })
        document.getElementById("downVote5").addEventListener("click",()=>{
          let downVotes = parseInt(document.getElementById("voteDown5").textContent)
          downVotes += 1;
          document.getElementById("voteDown5").textContent = downVotes
        })
        document.querySelector(".send").addEventListener("click", () => {
          let userComment = document.querySelector(".userComment");
          let value = document.querySelector(".form-control").value;
          let value2 = document.querySelector("#files").value;
          if(value !== "" || value2 !== "") {
          userComment.innerHTML = `
         <div class="randomComment">
          <span id="commentSlot">
            <img id = "comImg" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
            <span>
              <span style = "display:inline-flex"><h5 id = "comName">You</h4><h6 id = "time"><i>just now</i></h6></span>
              <h6 id = "actCom">${value}</h6>
              <img id = "userPic" src = "${value2}"></img>
            <span class = "votesCont" ">
              <img id = "upVote6" src = "./images/up-arrow.png">
              <h6 id = "voteUp6" class = "actVote1">0</h6>
              <img id = "downVote6" src = "./images/down-arrow.png">
              <h6 id = "voteDown6" class = "actVote2">0</h6>
            </span>
            </span>
          </span>
         </span>
         </div>
          `;
          document.getElementById("upVote6").addEventListener("click",()=>{
          let upVotes = parseInt(document.getElementById("voteUp6").textContent);
          upVotes += 1;
          document.getElementById("voteUp6").textContent = upVotes
          })
          document.getElementById("downVote6").addEventListener("click",()=>{
          let downVotes = parseInt(document.getElementById("voteDown6").textContent)
          downVotes += 1;
          document.getElementById("voteDown6").textContent = downVotes
            })
          }
          else if (value === "" && value2 === ""){
            console.log("error")
          }
        });

    document.getElementById("moreComments").addEventListener("click", () => {
      document.getElementById("commentSection").classList.remove("commSection");
      // document.getElementById('commentSection').classList.add('commentSection');
    });
    document.getElementById("arrowUp").addEventListener("click", () => {
      document.getElementById("commentSection").classList.add("commSection");
    });
    document.getElementById("backarrow2").addEventListener("click", () => {
      detailcard.innerHTML = "";
      appendMealCard(obj);
    });
    detailcard.classList.add("fadeIn2");
    let directions = obj.directions;

    directions.forEach((item) => {
      let li = document.createElement("li");
      li.id = "directions";
      li.innerHTML = item.direction;
      document.getElementById("dirBox").appendChild(li);
    });
  });
  let ingredients = obj.ingredients;
  ingredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item.ingredient;
    document.getElementById("ingredients").appendChild(li);
  });
}

//fetching for videos
function searchVideos(){
  let value = document.getElementById("itemSearch").value
  const apiKey = "a32d9d62bbb9423b8a1343680d766ab4"
  fetch(`https://api.spoonacular.com/food/videos/search?query=${value}&apiKey=${apiKey}`)
 .then((res)=>res.json())
 .then((data)=> appendVideos(data.videos))

 }


//appending Videos
function appendVideos(obj){
let top = document.getElementById("top")
top.innerHTML =`
<img id="backarrow" src="./images/arrow.png"></img>
`
top.addEventListener("click",()=>{
let mainArea = document.getElementById("mainArea")
mainArea.innerHTML = '';
menuPage()
})
 let main = document.getElementById('mainArea');
 main.innerHTML = '';
 obj.forEach((item)=>{
   let viewsInHrs = ((item.length -(item.length%60))/60)
   let viewsInMins = (item.length%60)
     let video = document.createElement('div');
     video.id = "video"
     video.innerHTML = `
     <div>
     <iframe id = "iframe" src="https://www.youtube.com/embed/${item.youTubeId}" frameborder="0" allowfullscreen></iframe>
     </div>
     <div id = "videoInfo">
      <h3 id = "videoTitle">${item.title}</h3>
      <h4 id = "videoLength"><span style = "color:black">${viewsInHrs}</span> hrs <span style = "color:black">${viewsInMins}</span> mins</h4>
      <h4 id = "videoViews">Views : ${item.views}</h4>
     </div>
     `
     main.appendChild(video)
   })
}

//fetching food by ingredients
function fetchFoodByIngredients(){
  let value = document.getElementById("itemSearch").value
  const apiKey = "a32d9d62bbb9423b8a1343680d766ab4"
  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${value}&apiKey=${apiKey}`)
 .then((res)=>res.json())
 .then((data)=>{
   appendMenu()
   fetchedFood(data)
   appendFetchedMealCard(data[0])
    })
}
//function append food fetched by ingredients
function fetchedFood(data){
data.forEach((element)=>{
    let titles = document.createElement("div");
          titles.addEventListener("click", () => {
            console.log('clicked')
            let i = data.indexOf(data.find((item)=>{return item.title === `${element.title}`}));
            appendFetchedMealCard(data[i]);
            });
            let x =  Math.floor(Math.random() * (100 - 90) + 90)
            let z = Math.floor(Math.random() * 5) + 1
          titles.id = "fetchedByIngredients";
          titles.innerHTML = `
          <span>
          <img src="${element.image}" id = "menuPic"/>
         </span>
         <span style = "position:relative;width:350px">
         <h3 id = "menuuH3">${element.title}</h3>
         <span style = "position:absolute;bottom:0">
           <span class = "menuuIcons">
           <i id="menuFav" class="material-icons">grade</i>
           <h6 class = "likesNum">${z}</h6>
           </span>
           <span class = "menuuIcons">
           <i id="menuVis" class="material-icons">visibility</i>
           <h6>${z*78}</h6>
           </span>
          </ span>
         </span>
            `;
            document.querySelector(".listColumn").appendChild(titles);
})
}
//function append individual meal card
function appendFetchedMealCard(obj) {
  let z = Math.floor(Math.random() * (250 - 150) + 150)
  let x = Math.floor(Math.random() * (30 - 10) + 10)
  let detailcard = document.getElementById("mealCard");
  detailcard.classList.remove("fadeIn2");
  detailcard.classList.add("mealCard");
      detailcard.innerHTML = `
      <div>
      <img id= 'img'src="${obj.image}" alt="">
      </div>
      <div style ='padding-top:3em;padding-bottom:3em;'>
      <div id="ingredients">
          <h2>Ingredients</h2>
      </div>
      <span style="display:inline-flex">
        <button id="fav2"><i class="material-icons" id = "iconfav2">favorite</i></button>
        <h6 id = "totalLikes">${x}</h6>
      </span>
      <h2 id="facts">Nutritional Facts</h2>
      <div id="nuitrition">
          <div class="nut">
          <h3 id="foodgroup">Calories</h3>
          <span id="quantity">${z}</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Proteins</h3>
          <span id="quantity">${x} g</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Fat</h3>
          <span id="quantity">${x}g</span>
        </div>
        <div class="nut">
          <h3 id="foodgroup">Carbohydrates</h3>
          <span id="quantity">${x} g</span>
        </div>
      </div>
      </div>
  `;

  let likeBtn = document.getElementById("fav2");
  likeBtn.addEventListener("click", () => {
   let value = parseInt(document.getElementById("totalLikes").textContent);
   value += 1;
    document.getElementById("totalLikes").textContent = value;
  });

  let ingredients = obj.missedIngredients;
  let usedIngredients = obj.usedIngredients;
  ingredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item.original;
    document.getElementById("ingredients").appendChild(li);
  });
    usedIngredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item.original;
    document.getElementById("ingredients").appendChild(li);
  });
}


