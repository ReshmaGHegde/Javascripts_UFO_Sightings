// from data.js
var tableData = data;

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
tableData.forEach((Report) => {
   var table = d3.select("#ufo-table");
   var tbody = table.select("tbody");
   var row = tbody.append("tr");
   Object.entries(Report).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });

 //function getData() {

 // (function(tableData) {
   //  var datetime = tableData.datetime;
   //  var city = tableData.city;
   //  var state = tableData.state;
   //  var country = tableData.country;
   //  var shape = tableData.shape;
   //  var durationMinutes = tableData.durationMinutes;
   //  var comments = tableData.comments;
//    buildTable(datetime, city, state, country, shape, durationMinutes,comments);
 // });
//}

//getData();

// function buildTable(datetime, city, state, country, shape, durationMinutes,comments) {
//   var table = d3.select("#ufo-table");
//   var tbody = table.select("tbody");
//   var trow;
//   for (var i = 0; i < 12; i++) {
//     trow = tbody.append("tr");
//     trow.append("td").text(datetime[i]);
//     trow.append("td").text(city[i]);
//     trow.append("td").text(state[i]);
//     trow.append("td").text(country[i]);
//     trow.append("td").text(shape[i]);
//     trow.append("td").text(durationMinutes[i]);
//     trow.append("td").text(comments[i]);
//   }
// }

function buildTable(datetime, city, state, country, shape, durationMinutes,comments) {
  var table = d3.select("#ufo-table");
  var tbody = table.select("tbody");
  var trow;
  //for(tableData) {
    trow = tbody.append("tr");
    trow.append("td").text(datetime);
    trow.append("td").text(city);
    trow.append("td").text(state);
    trow.append("td").text(country);
    trow.append("td").text(shape);
    trow.append("td").text(durationMinutes);
    trow.append("td").text(comments);
 // }
}
