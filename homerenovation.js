//used provided template to work off of and understand the goal

//asks for amount of paint supplies cost and parses to be float value (since there's decimals) 
function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies :");
    cost = parseFloat(cost);
    if (cost > 100) cost *= 1.1;
    // Get a handle for the paint paragraph
    //  make sure all user inputs are reflected on the webpage, and limited to 2 decimal places since its money
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    //  at this point we 'callback' to another function called 'updateTools' which will format total cost for webpage
    //  but in order to do so it needs the totalCost and cost variable values
    callback(totalCost + cost);
    return totalCost + cost;
}

  
const addFlooring = function (totalCost, callback) {
    let cost = prompt("Enter the cost for the floor coverings :");
    cost = parseFloat(cost);
    if (cost < 2000) {
    if (cost < 500 ) cost *= 0.85;
    // Get a handle for the paint paragraph

    let flooringArea = document.querySelector(".floorCoverings");
    flooringArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);
    return totalCost + cost;
    }
    else {
        alert("You have exceeded your limit of $2000. Please refresh the page and try again.");
    }
}


addFurniture = (totalCost, callback) => {
    let cost = prompt("Enter the cost for the furniture :");
    cost = parseFloat(cost);
    if (cost < 2000) {
    if (cost < 500) cost *= 0.90;
    // Get a handle for the paint paragraph

    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);
    return totalCost + cost;
    }
    else {
        alert ("You have exceeded the limit of $2000. Please refresh the page and try again.");
    }
}



// This function is what will be used to display the cost values on the webpage. 
const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
};

  
//  All of the previous functions have not actually done anything, this is the part where I actually call on them
//  set totalCost to 0 first bc it needs to bee initialized
let totalCost = 0;
totalCost 
  
//Total cost is going to be updated with each new section added and the total for the webpage will be updated
//  each time it is called upon
totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = addFlooring(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);