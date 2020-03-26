//Created a variable and its an new json object 
//Language Translations
var language = {
    //here eneg is not required because the default lanaguage is English, but it is important to have because 
    //if somebody actually does try to contribute to our webite, 
    //They need to know what the langauge is that we are translating.
    eng: {
        Login: "Login",
        Home: "HOME",
        About: "ABOUT US",
        Drink: "BEVERAGES",
        Chefs: "CHEFS",
        Contact: "CONTACTS",
        Content: "WELCOME TO FLYING DUTCHMAN..",
        Content2: "BAR OF BEER LOVERS OO YES!!",
        Order: "ORDER NOW",
        Reserve: "RESERVATIONS",
    },

    swe: {
        Login: "Logga In",
        Home: "HEM",
        About: "OM OSS",
        Drink: "DRYCKER",
        Chefs: "KOKAR",
        Contact: "KONTAKT",
        Content: "VÄLKOMMEN TILL FLYING DUTCHMAN..",
        Content2: "BAR MED ÖLÄLSKARE OO YEHH!!",
        Order: "BESTÄLL NU",
        Reserve: "RESERVATIONER",
    }
};

//Define language reload anchors
//if we use only querselector it detects only english because it returns only first element
//It dectes the list ;- range of elements we have means english and swedish
var dataReload = document.querySelectorAll("[data-reload]");

function OnLngSe() {

    login.textContent = language.swe.Login;
    home.textContent = language.swe.Home;
    about.textContent = language.swe.About;
    drinks.textContent = language.swe.Drink;
    chefs.textContent = language.swe.Chefs;
    contact.textContent = language.swe.Contact;
    content.textContent = language.swe.Content;
    content2.textContent = language.swe.Content2;
    order.textContent = language.swe.Order;
    reserve.textContent = language.swe.Reserve;

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
    home.textContent = language.eng.Home;
    about.textContent = language.eng.About;
    drinks.textContent = language.eng.Drink;
    chefs.textContent = language.eng.Chefs;
    contact.textContent = language.eng.Contact;
    content.textContent = language.eng.Content;
    content2.textContent = language.eng.Content2;
    order.textContent = language.eng.Order;
    reserve.textContent = language.eng.Reserve;

    //when we click on the anchor image, it will reload the page
    //define language reload onclick illiteration

    //dataReload.length:- detects how many elements do we have with selector and we have 2
    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}