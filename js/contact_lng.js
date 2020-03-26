//Created a variable and its an new json object 
//Language Translations
var language = {
    //here eneg is not required because the default lanaguage is English, but it is important to have because 
    //if somebody actually does try to contribute to our webite, 
    //They need to know what the langauge is that we are translating.

    eng: {
        Contact: "Contact Us",
        Msg: "Call for booking on given number or leave us a message:",
        Firstname: "First Name",
        Lastname: "Last Name",
        Location1: "Location",
        Message: "Message",

    },

    swe: {
        Contact: "Kontakta Oss",
        Msg: "Ring för bokning på givet nummer eller lämna ett meddelande:",
        Firstname: "Förnamn",
        Lastname: "Efternamn",
        Location1: "Plats",
        Message: "Meddelande",

    }
};

function lngSe() {
    //Define language reload anchors    
    //if we use only querselector it detects only english because it returns only first element
    //It dectes the list ;- range of elements we have means english and swedish
    var dataReload = document.querySelectorAll("[data-reload]");

    contact.textContent = language.swe.Contact;
    msg.textContent = language.swe.Msg;
    firstname.textContent = language.swe.Firstname;
    lastname.textContent = language.swe.Lastname;
    location1.textContent = language.swe.Location1;
    message.textContent = language.swe.Message;

    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}

function lngEn() {
    //Define language reload anchors    
    //if we use only querselector it detects only english because it returns only first element
    //It dectes the list ;- range of elements we have means english and swedish
    var dataReload = document.querySelectorAll("[data-reload]");

    contact.textContent = language.eng.Contact;
    msg.textContent = language.eng.Msg;
    firstname.textContent = language.eng.Firstname;
    lastname.textContent = language.eng.Lastname;
    location1.textContent = language.eng.Location1;
    message.textContent = language.eng.Message;

    //when we click on the anchor image, it will reload the page
    //define language reload onclick illiteration

    //dataReload.length:- detects how many elements do we have with selector and we have 2

    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}