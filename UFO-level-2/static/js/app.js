// from data.js
var tableData = data;
let tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear any existing entries
  tbody.html("");

  // Select the input element and get the raw HTML node
  const date = d3.select("#datetime").property("value");
  const city = d3.select("#city").property("value");
  const state = d3.select("#state").property("value");
  const country = d3.select("#country").property("value");
  const shape = d3.select("#shape").property("value");

  const allInput = [date, city, state, country, shape]
  
  // Get the value property of the input element
  const filteredData = tableData
        .filter(obj =>{
            return date === "" || obj.datetime === date;     //My first case checks if the input has been left empty. Return true so I get everything back.  
        })                                                   //My OR let's me check for an explicit value set which will only occur on user entry.
        .filter(obj =>{
            return city === "" || obj.city === city; 
        })
  
  filteredData.forEach(ufo => {
    const row = tbody.append("tr");
    for (key in ufo){
        const cell = tbody.append("td");
        cell.text(ufo[key]);
    }; 
  });

});
