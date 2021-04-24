// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//Read data
// console.log(tableData);

//Use d3 to update each cell's text with per sighting info (date, city, state, country, shape, duration, comment)
//   tableData.forEach(function(ufoSightings) {
//     // console.log(ufoSightings);
//     var row = tbody.append("tr");
//     Object.entries(ufoSightings).forEach(function([key, value]) {
//     //console.log(key, value);
//     // Append a cell to the row for each value
//     var cell = row.append("td");
//     cell.text(value);
//     });
//   });

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

var form = d3.select("#form");

// // This function is triggered when the button is clicked
// function filterButton() {
//     console.log("A button was clicked!");
//     // Use d3 to see the object that dispatched the event
//     console.log(d3.event.target);
//   }

// Use the `on` function in d3 to attach an event to the handler function
// button.on("click", filterButton);
button.on("click", clickEnter);
form.on("submit", clickEnter);

// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//     var newDate = d3.event.target.value;
//     console.log(newDate);
//   });

function clickEnter() {
    // Prevent page form refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var searchDate = inputField.property("value");

    //Filtering the data based on the datetime
    var filteredData = tableData.filter(tableData => tableData.datetime === searchDate);

    console.log(filteredData);

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