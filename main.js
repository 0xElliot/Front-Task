// Login
function login() {
    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(username.trim()==="" || pass.trim()===""){
      alert("enter username and password");
      return false;
    }

    if(username === "admin" && pass === "adminpass"){
      setCookie("loggedUser", username, 3);
      window.location.href = "notes.html";
    } else {
      alert("invalid username or pass");
      return false;
    }
  };


// Set Cookie
function setCookie(name, value, dateToLive){
    const date = new Date();
    date.setTime(date.getTime() + dateToLive * 24 * 60 * 60 * 1000 );
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}


// get Cookie
function getCookie(name){
    const decodecookie = decodeURIComponent(document.cookie);
    const arrayOfCookie = decodecookie.split("; ");
    let result = null;

    arrayOfCookie.forEach((cookie) =>{
        // serch about Cookies
        if (cookie.indexOf(name) === 0) {
            result = cookie.substring(name.length + 1);
        }
    });

    return result;
}


// Delete Cookie
function deleteCookie(name){
    setCookie(name, null, null);
};


    








