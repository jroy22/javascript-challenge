// Getting data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//Read data
// console.log(tableData);

//Putting a table with the UFO Sightings once the page loads
    tableData.forEach(
    function(ufoSightings) {
        // console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(
            function([key, value]) {
            //console.log(key, value);
            // Append a cell to the row for each value
                var cell = row.append("td");
                cell.text(value);
            });
    });

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

//Select the form
var form = d3.select("#form");

//Function to filter the data
function toFilter() {

    //Clears existing table
    tbody.html("")

    // Prevent page form refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var searchDate = inputField.property("value");

    console.log(searchDate);

    //Filtering the data based on the datetime
    var filteredData = tableData.filter(tableData => tableData.datetime === searchDate);

    console.log(filteredData);

    //Use d3 to update each cell's text with per sighting info 
    //(date, city, state, country, shape, duration, comment)
    filteredData.forEach(
        function(filteredData) {
            var row = tbody.append("tr");
            Object.entries(filteredData).forEach(
                function([key, value]) {
                
                //console.log(key, value);

                // Append a cell to the row for each value
                    var cell = row.append("td");
                     cell.text(value);
                });
         });
}

// Event handlers

//Calling the toFilter when the filter button is clicked or the enter key is pressed
button.on("click", toFilter);
form.on("submit", toFilter);

// Reset Button

// Getting a reference to the button on the page with the id property set to `reset-btn`
var reset = d3.select("#reset-btn");

//Function to Reset the table
function toReset(){
    console.log("Reseting Table");    
    tbody.html("");
}

//Calling the toReset function once the Reset button is clicked
reset.on("click", toReset);