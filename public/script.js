console.log("Managed to get all my running data. Suck it Garmin!!");
console.log(stravaData);

var runDates = [];

var averageHeartRates = [];
var maxHeartRates = [];

var averageSpeeds = [];
var maxSpeeds = [];

stravaData.forEach(function (data) {
  if(data.average_heartrate  != undefined){
    runDates.push(moment(data.start_date).format('Do MMM YY'));

    averageHeartRates.push(data.average_heartrate);
    maxHeartRates.push(data.max_heartrate);

    averageSpeeds.push(data.average_speed);
    maxSpeeds.push(data.max_speed);
  }
});
//Reorder the arrays
runDates = runDates.reverse();

averageHeartRates = averageHeartRates.reverse();
maxHeartRates = maxHeartRates.reverse();

averageSpeeds = averageSpeeds.reverse();
maxSpeeds = maxSpeeds.reverse();

// heart rate data
var hrData = {
  labels: runDates,
  datasets:[
    {
      label: 'Max Heart Rate',
      fillColor: "#F44336",
      strokeColor: "#D32F2F",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:maxHeartRates
    },
    {
      label: 'Average Heart Rate',
      fillColor: "#2196F3",
      strokeColor: "#1976D2",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:averageHeartRates
    }
  ]
};

var hrCtx = document.getElementById("heart_rate_chart").getContext("2d");
var heartRateChart = new Chart(hrCtx).Line(hrData,{responsive: true,maintainAspectRatio: false});

var speedData = {
  labels: runDates,
  datasets:[
    {
      label: 'Max Speed',
      fillColor: "#F44336",
      strokeColor: "#D32F2F",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:maxSpeeds
    },
    {
      label: 'Average Speed',
      fillColor: "#2196F3",
      strokeColor: "#1976D2",
      pointColor: "#2196F3",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:averageSpeeds
    }
  ]
};

var speedCtx = document.getElementById("speed_chart").getContext("2d");
var speedChart = new Chart(speedCtx).Line(speedData,{responsive: true,maintainAspectRatio: false});
