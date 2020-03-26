// MyHandler.js populates a data structure (dataContract.js dictionary -> arrays -> dictionaries) and operates on it.
// Reads data from dataContracts and display in the UI. 
// Handles click funtionality of menu item tabs (show and hide)
//
$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#wine").show();
    $("#whisky").hide();
    $("#beer").hide();
    $("#spirit").hide();

    // Here we show the whiskys menu and hide all other menus.
    //
    $("#whiskys").click(function () { /* Here we show and hide the field. */
        $("#whisky").show();
        $("#spirit").hide();
        $("#wine").hide();
        $("#beer").hide();
    });

    // Here we show the alcohol-Frees menu and hide all other menus.
    //
    $("#spirits").click(function () { /* Here we show and hide the field. */
        $("#whisky").hide();
        $("#spirit").show();
        $("#wine").hide();
        $("#beer").hide();
    });

    // Here we show the wine course menu and hide all other menus.
    //
    $("#wines").click(function () { /* Here we show and hide the field. */
        $("#whisky").hide();
        $("#spirit").hide();
        $("#wine").show();
        $("#beer").hide();
    });

    // Here we show the beers menu and hide all other menus.
    //
    $("#beers").click(function () {
        $("#whisky").hide();
        $("#spirit").hide();
        $("#wine").hide();
        $("#beer").show();
    });

    //minimum number of elements required to fetched from db for each menu items
    //
    var minItemsRequired = 20;

    //variable to control number element to show in a menu item
    //
    var itemToDisplay = 10;
    
    //Get all the data from
    // 
    var data = getItemsToDisplay(minItemsRequired);

    // Here we put the different kinds of drinks into the respective menus.
    //
    $(getMenuitemList(data.beer, itemToDisplay)).appendTo("#beer");
    $(getMenuitemList(data.wine, itemToDisplay)).appendTo("#wine");
    $(getMenuitemList(data.spirits, itemToDisplay)).appendTo("#spirit");
    $(getMenuitemList(data.whisky, itemToDisplay)).appendTo("#whisky");
});

function getItemsToDisplay(number) {

    var  dbElement= 0;
    
    while(IsDataFilled(number)) {
        
        //Pre-processing string for comparision
        str = bar[dbElement].catgegory.toLowerCase();

        // Cheaking if db element category consist of following sub strings
        //
        if(str.includes("beer") || str.includes("ale"))
        { 
            //Created a new dictionary of an item  
            var abeers = { 
            name : bar[dbElement].name,
            price : bar[dbElement].priceinclvat,
            desc : bar[dbElement].alcoholstrength,
            catgegory : "beer"
            };

            // Pushed dictionary item to corresponding lists
            beerlist.push(abeers);
        }
        else if(str.includes("spicy spirits") || str.includes("okryddad sprit") )
        {    
            //Created a new dictionary of an item 
            var aspirits = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "spirits"
                };
            
            // Pushed dictionary item to corresponding lists
            spiritlist.push(aspirits);
        }
        else if(str.includes("wine") || str.includes("vin"))
        {
            //Created a new dictionary of an item     
            var awines = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "wine"
                };
            
            // Pushed dictionary item to corresponding lists
            winelist.push(awines);
        }

        else if(str.includes("whisky") || str.includes("whisky"))
        {  
            //Created a new dictionary of an item 
            var awhiskys = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "whisky"
                };
                
            // Pushed dictionary item to corresponding lists
            whiskylist.push(awhiskys);
        }

        dbElement++;
    }
    
    //
    return collector;
}

function IsDataFilled(itemsRequired)
{
    // Boolean check ensuring all menu item must have minimum of required items in each list. 
    // Check will be false when all lists meet the criteria
    // In the end some lists may have more items than items required and that is okay
    //
    return (beerlist.length < itemsRequired
        || spiritlist.length < itemsRequired 
        || winelist.length < itemsRequired
        || whiskylist.length < itemsRequired);
}


// ===================================================================================================================
// The function returns all drinks strings (created as divs) of a certain type (given as argument).
//
function getMenuitemList(menuItems, itemToDisplay) {

    // The collection variable
    //
    var out = "";
   
    var i = 0;

    menuItems.forEach(myFunction);

    function myFunction(item) { 

        if(i < itemToDisplay)
        {
            if(item.price != undefined)
            {
                // we add the HTML string to the collection variable and Things to display are Name and Price of item.
                //
                out += '<div style = "float:left" id="' + "menuitem" + item.catgegory + i 
                + '" draggable="true" ondragstart="drag(event)">' 
                + item.name
                + '<span class="price">'
                + '&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;'
                + item.price + '</span><br></div>';
            }
            if(item.desc != undefined)
            {
                // we add the HTML string to the collection variable and Thing to display are description of item.
                out += '<br><font face = "Arial" Color = "Green"><h6><div style = "float:left">' 
                + item.desc 
                +'</div></h6></font><br>';
            }
        i++;

        }  
    } 
        
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}

// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
