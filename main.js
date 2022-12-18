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
