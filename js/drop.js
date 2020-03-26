// drop.js is reponsible to handle drag n drop funtionality
// Events functions are implemented to show data at target.
// This is used in CART implementation showing dropped items in cart and
// Calculate total amount of an order

// Global variable storing total amount of the order
//
var total = 0;

function allowDrop(ev) {
    ev.preventDefault(); // This makes the item accept drop actions.
}

// A standard function. It packages the ID of the source into the data
// transfer package. The type of the transferred data is pure text.
//
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// The drop function determines what happens when you drop the source item
// on the target. You can define any kind of action that you want to
// incorporate.
//
// All information about the drop event is kept in an object that is received upon dropping.
// The ev argument is used throughout the drop function.
//
function drop(ev) {

    // The default action is to not accept drops, så
    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    // Comment out this line to see the difference.
    //
    ev.dataTransfer.dropEffect = "copy";

    var data = ev.dataTransfer.getData("text"); // Get the data from the transfer...

    // If we use .cloneNode(true) the dragging results in a cloned copy, rather than
    // an actual move of the source. This is important when we use the dragged item as
    // an example, rather than as an individual object.
    //
    var nodeCopy = document.getElementById(data).cloneNode(true);

    var itemName = nodeCopy.innerHTML;

    // Using Regression expression to find price of the item dropped from html script string
    //
    var matches = itemName.match(/(\d+)/);

    //Converting string to int
    price = parseInt(matches[0]);

    nodeCopy.id = "newId";  // We cannot use the same ID. Ideally we should generate the new ID with a
                            // random or incremental number. This is left as an exercise...
                            //

    nodeCopy.draggable = "false"; // The new element is set as being not draggable.

    ev.target.appendChild(nodeCopy);

    // Make a total sum of all the prices.
    //
    total = sumTotal(price, total);

    // Replace the content of the order with the new sum
    //
    document.getElementById("sum").innerHTML = "Total: "+ total + " kr";
}

function sumTotal(price, sum)
{
    return sum + price;
}

// ===================================================================================================================
// END OF FILE
// ===================================================================================================================

