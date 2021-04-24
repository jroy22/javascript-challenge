// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//Read data
// console.log(tableData);

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

var form = d3.select("#form");

// Use the `on` function in d3 to attach an event to the handler function
// button.on("click", filterButton);
button.on("click", clickEnter);
form.on("submit", clickEnter);

function clickEnter() {
    // Prevent page form refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var searchDate = inputField.property("value");

    //Filtering the data based on the datetime
    var filteredData = tableData.filter(tableData => tableData.datetime === searchDate);

    console.log(filteredData);

    //Use d3 to update each cell's text with per sighting info 
    //(date, city, state, country, shape, duration, comment)
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            //console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
            });
    });
}