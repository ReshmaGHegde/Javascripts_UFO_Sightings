// from data.js
var tableData = data;
   tableData.forEach((Report) => {
      let table = d3.select("#ufo-table");
      let tbody = table.select("tbody");
      let row = tbody.append("tr");
      Object.entries(Report).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
      });
   });

d3.select("#filter-btn").on("click", handleSubmit);

function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  handleClick();
}

function handleClick() {
   console.log("A button was clicked!");
   var inputElement = d3.select("#datetime").property("value");
   var filteredData = tableData.filter(tableData => tableData.datetime === inputElement);
   console.log(filteredData);
   var tbody = d3.select("tbody");
   tbody.html("");
   filteredData.forEach((vData) => {
   var table = d3.select("#ufo-table");
   var tbody = table.select("tbody");
   var row = tbody.append("tr");
   Object.values(vData).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
   });
});
 }
