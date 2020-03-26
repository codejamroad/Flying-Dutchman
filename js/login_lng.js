//Created a variable and its an new json object 
//Language Translations
var language = {
    //here eneg is not required because the default lanaguage is English, but it is important to have because 
    //if somebody actually does try to contribute to our webite, 
    //They need to know what the langauge is that we are translating.

    eng: {
        Login: "Login Here",
        Username: "Username",
        Password: "Password",
        //Log: "Login",               
        Forget: "Forget Password",
    },

    swe: {
        Login: "Login Here",
        Username: "Användarnamn",
        Password: "Lösenord",
        //Log: "Loggain",            
        Forget: "Glöm Lösenord",
    }
};

//Define language reload anchors
//if we use only querselector it detects only english because it returns only first element
//It dectes the list ;- range of elements we have means english and swedish
var dataReload = document.querySelectorAll("[data-reload]");

function OnLngSe() {

    login.textContent = language.swe.Login;
    username.textContent = language.swe.Username;
    password.textContent = language.swe.Password;
    forget.textContent = language.swe.Forget;

    //when we click on the anchor image, it will reload the page
    //define language reload onclick illiteration

    //dataReload.length:- detects how many elements do we have with selector and we have 2
    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}

function OnLngEn() {

    login.textContent = language.eng.Login;
    username.textContent = language.eng.Username;
    password.textContent = language.eng.Password;
    forget.textContent = language.eng.Forget;

    //when we click on the anchor image, it will reload the page
    //define language reload onclick illiteration

    //dataReload.length:- detects how many elements do we have with selector and we have 2
    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}