function appendLoginPage() {
  let body = document.querySelector("body");
  body.innerHTML = `
<div id="box">
    <div id="image">
      <img src="" alt="" />
    </div>
    <div>
      <div id="info">
        <h2 id="h2">Recipehub</h2>
        <h4 id="h4">Welcome to recipehub</h4>
      </div>
        <div class="container">
          <form id="submission">
            <div id="input-icons">
              <div id="inside">
                <i id="person"class="material-icons">person</i>
                <input type="text"id="fname"name="animalname"placeholder="Name"/>
              </div>
              <div id="icon-inside">
                <i id="email" class="material-icons">mail</i>
                <input type="email" id="imageurl" placeholder="Email.." />
             </div> 
             <div id="icon-inside">
               <i id="pass"class="material-icons">lock</i>
               <input type="number" id="password" placeholder="password" /> 
             </div>
        <div id="check">
            <label class="checkbox"
                 >Remember me
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
body.classList.add('login');
}
appendLoginPage()
