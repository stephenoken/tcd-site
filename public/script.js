console.log("Managed to get all my running data. Suck it Garmin!!");
console.log(stravaData);

var averageHeartRates = [];
var maxHeartRates = [];
var runNames = [];

stravaData.forEach(function (data) {
  if(data.average_heartrate  != undefined){
    averageHeartRates.push(data.average_heartrate);
    maxHeartRates.push(data.max_heartrate);
    runNames.push(data.name);
  }
});
var data = {
  labels: runNames,
  datasets:[
    {
      label: 'Max Heart Rate',
      fillColor: "#F44336",
      strokeColor: "#D32F2F",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:maxHeartRates.reverse()
    },
    {
      label: 'Average Heart Rate',
      fillColor: "#2196F3",
      strokeColor: "#1976D2",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:averageHeartRates.reverse()
    }
  ]
};

var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data,{responsive: true,maintainAspectRatio: false});
