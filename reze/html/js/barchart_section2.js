/*
var data = {
  labels: [
    'Nombre de licensiés par rapport à la population globale', 'Nombre de licensiés féminins par rapport aux licensiés', 'Nombre de licensiés de -18ans par rapport aux licensiés'
  ],
  series: [
    {
      label: 'REZE',
      values: [0.243, 0.426, 0.469]
    },
    {
      label: 'SAINT-NAZAIRE',
      values: [0.268, 0.459, 0.474]
    },
    {
      label: 'PORNIC',
      values: [0.365, 0.374, 0.428]
    }]
};
*/

/*var chartHeight       = 300,
    barWidth        = 20,
    groupWidth      = barWidth * data.series.length,
    gapBetweenGroups = 10,
    spaceForLabels   = 150;

var zippedData = [];
for (var i=0; i<data.labels.length; i++) {
  for (var j=0; j<data.series.length; j++) {
    zippedData.push(data.series[j].values[i]);
  }
}
var color = d3.scale.category20();
var chartWidth = barWidth * zippedData.length + gapBetweenGroups * data.labels.length;

var y = d3.scale.linear()
    .domain([0, d3.max(zippedData)])
    .range([0, chartHeight]);

var x = d3.scale.linear()
    .range([chartWidth + gapBetweenGroups, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat('')
    .tickSize(0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat('.1%');

// Specify the chart area and dimensions
var chart = d3.select(".chart")
    .attr("width", chartWidth)
    .attr("height", spaceForLabels + chartHeight);

// Create bars
var bar = chart.selectAll("g")
    .data(zippedData)
    .enter().append("g")
    .attr("transform", function(d, i) {
      //return "translate(" + spaceForLabels + "," + (i * barWidth + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
        return "translate(" + (i * barWidth + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + "," + 0 + ")";
    });

// Create rectangles of the correct width
bar.append("rect")
    .attr("fill", function(d,i) { return color(i % data.series.length); })
    .attr("class", "bar")
    .attr("width", barWidth - 1)
    .attr("height", y);

// Add text label in bar
bar.append("text")
    .attr("x", barWidth / 2)
    .attr("y", function(d) { return y(d) - 3; })
    .attr("fill", "red")
    .attr("dx", ".35em")
    .text(function(d) { return d; });

// Draw labels
bar.append("text")
    .attr("class", "label")
    .attr("x", groupWidth / 2)
    .attr("y", function(d) { return - 10; })
    .attr("dx", ".35em")
    .text(function(d,i) {
      if (i % data.series.length === 0)
        return data.labels[Math.floor(i/data.series.length)];
      else
        return ""});

chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + 0 + ", " + chartHeight + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);*/

var series= [
    {
      label: 'REZE',
      values: 0.243
    },
    {
      label: 'SAINT-NAZAIRE',
      values: 0.268
    },
    {
      label: 'PORNIC',
      values: 0.365
    }];

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
.tickFormat('')
    .tickSize(0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10,"%");


var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(series.map(function(d) { return d.label; }));
  y.domain([0, d3.max(series, function(d) { return d.values; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("fill","white")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percentage");

  svg.selectAll(".bar")
      .data(series)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.label); })
      .attr("width", 30)
      .attr("y", function(d) { return y(d.values); })
      .attr("height", function(d) { return height - y(d.values); })
      .attr("fill", function(d){
        if(d.label === "REZE"){
            return "#FF3652";
        }
        if(d.label === "SAINT-NAZAIRE"){
            return "#42FF97";
        }
        if(d.label === "PORNIC"){
            return "#004CFF";
        }
      });
