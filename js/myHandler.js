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

    // Here we put the different kinds of food into the respective menus.
    //
    var data = getAllData(8);

    $(setCategory(data.beer)).appendTo("#beer");
    $(setCategory(data.wine)).appendTo("#wine");
    $(setCategory(data.spirits)).appendTo("#spirit");
    $(setCategory(data.whisky)).appendTo("#whisky");
});


// ===================================================================================================================
// The function returns all food strings (created as divs) of a certain type (given as argument).
//
function setCategory(menuItems) {

    // The collection variable
    //
    var itemToDisplay = 10;
    var out = "";
   
    var i = 0;
    // Go through the array and collect all the items of the desired type.
    //

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        menuItems.forEach(myFunction);
    
        function myFunction(item) { 

            if(i < itemToDisplay)
            {
                if(item.price != undefined)
                {
                    out += '<div style = "float:left" id="' + "menuitem" + item.catgegory + i 
                    + '" draggable="true" ondragstart="drag(event)">' 
                    + item.name +
                    + '<<span style="font-size: 20px;" class="price">'
                    + '&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;'
                    + item.price + '</span><br></div>';
                }
                if(item.desc != undefined)
                {
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


function getAllData(itemToFetch) {

    var  dbElement= 0;
    
    while(IsDataFilled(itemToFetch)) {

        str = bar[dbElement].catgegory.toLowerCase();

        if(str.includes("beer") || str.includes("ale"))
        {   
            var abeers = { 
            name : bar[dbElement].name,
            price : bar[dbElement].priceinclvat,
            desc : bar[dbElement].alcoholstrength,
            catgegory : "beer"
            };
            beerlist.push(abeers);
        }
        else if(str.includes("spicy spirits") || str.includes("okryddad sprit") )
        {    
            var aspirits = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "spirits"
                };
            spiritlist.push(aspirits);
        }
        else if(str.includes("wine") || str.includes("vin"))
        {    
            var awines = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "wine"
                };
            winelist.push(awines);
        }

        else if(str.includes("whisky") || str.includes("whisky"))
        {  
            var awhiskys = { 
                name : bar[dbElement].name,
                price : bar[dbElement].priceinclvat,
                desc : bar[dbElement].alcoholstrength,
                catgegory : "whisky"
                };  
            whiskylist.push(awhiskys);
        }

        dbElement++;
    }
    
    //
    return collector;
}

function IsDataFilled(itemToFetch)
{
    return (beerlist.length < itemToFetch
        || spiritlist.length < itemToFetch 
        || winelist.length < itemToFetch
        || whiskylist.length < itemToFetch);
}

// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
