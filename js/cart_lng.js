//Created a variable and its an new json object 
//Language Translations
var language = {
    //here eneg is not required because the default lanaguage is English, but it is important to have because 
    //if somebody actually does try to contribute to our webite, 
    //They need to know what the langauge is that we are translating.
    eng: {
        //Login:"Login",
        Wine: "WINE",
        Beer: "BEER",
        Spicy: "SPICY SPIRITS",
        Whiskey: "WHISKEY",
        Special: "SPECIAL DRINKS",
        Price: "PRICE",
        //Content1: "FLYING DUTCHMAN ..",
        Name: "Name",
        //Quantity: "Quantity",
        Price1: "Price",
    },

    swe: {
        //Login:"Logga In",           
        Wine: "VIN",
        Beer: "ÖL",
        Spicy: "KRYDDIG SPIRITS",
        Whiskey: "WHISKY",
        Special: "SPECIAL DRYCKER",
        Price: "PRIS",
        //Content1: "FLYING DUTCHMAN ..",
        Name: "Namn",
        //Quantity: "Kvantiet",
        Price1: "Pris",
    }
};

function lngSe() {
    //Define language reload anchors    
    //if we use only querselector it detects only english because it returns only first element
    //It dectes the list ;- range of elements we have means english and swedish
    var dataReload = document.querySelectorAll("[data-reload]");

    lang = "sw"
    _wine.textContent = language.swe.Wine;
    _beer.textContent = language.swe.Beer;
    _spicy.textContent = language.swe.Spicy;
    _whiskey.textContent = language.swe.Whiskey;
    _special.textContent = language.swe.Special;
    //content1.textContent = language.swe.Content1;
    //content2.textContent = language.swe.Content2;
    name.textContent = language.swe.Name;
    price.textContent = language.swe.Price1;

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
    lang = "en";
    _wine.textContent = language.eng.Wine;
    _beer.textContent = language.eng.Beer;
    _spicy.textContent = language.eng.Spicy;
    _whiskey.textContent = language.eng.Whiskey;
    _special.textContent = language.eng.Special;
    //content1.textContent = language.swe.Content1;
    //content2.textContent = language.swe.Content2;
    name.textContent = language.eng.Name;
    price.textContent = language.eng.Price1;

    //when we click on the anchor image, it will reload the page
    //define language reload onclick illiteration

    //dataReload.length:- detects how many elements do we have with selector and we have 2

    for (i = 0; i < dataReload.length; i++) {
        dataReload[i].onclick = function() {
            location.reload(true);
        };
    }
}