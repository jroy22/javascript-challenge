// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//Read data
console.log(tableData);

//Use d3 to update each cell's text with per sighting info (date, city, state, country, shape, duration, comment)
  data.forEach(function(weatherReport) {
    console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });