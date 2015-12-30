console.log("Managed to get all my running data. Suck it Garmin!!");
console.log(stravaData);

var runDates = [];

var averageHeartRates = [];
var maxHeartRates = [];

var averageSpeeds = [];
var maxSpeeds = [];

var exerciseTypes = {
  "Run":{
    value: 0,
    color:"#2196F3",
    highlight: "#1976D2",
    label: "Run"
  },
  "Ride": {
    value: 0,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Ride"
  },
  "Swim": {
    value: 0,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Swim"
  },
  "Walk": {
    value: 0,
    color: "#F44336",
    highlight: "#D32F2F",
    label: "Walk"
  }
}

var runData = [];
stravaData.forEach(function (data) {
  if(data.average_heartrate  != undefined){
    runDates.push(moment(data.start_date).format('Do MMM YY'));

    averageHeartRates.push(data.average_heartrate);
    maxHeartRates.push(data.max_heartrate);

    averageSpeeds.push(data.average_speed);
    maxSpeeds.push(data.max_speed);

  }
  exerciseTypes[data.type].value = exerciseTypes[data.type].value + 1;

  if (data.type == "Run") {
    runData.push({
      distance:(data.distance *0.001).toFixed(2),
      time: convertTimeString(data.moving_time),
      date: moment(data.start_date).format('Do MMM YY'),
      cadence: data.average_cadence,
      heartrate: data.average_heartrate
    });

  }
});
//Reorder the arrays
runDates = runDates.reverse();

averageHeartRates = averageHeartRates.reverse();
maxHeartRates = maxHeartRates.reverse();

averageSpeeds = averageSpeeds.reverse();
maxSpeeds = maxSpeeds.reverse();

console.log(runData);
// heart rate data
var hrData = {
  labels: runDates,
  datasets:[
    {
      label: 'Max Heart Rate',
      fillColor: "#F44336",
      strokeColor: "#D32F2F",
      pointColor: "#F44336",
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
legend(document.getElementById('heart_rate_chart_placeholder'), hrData);

var speedData = {
  labels: runDates,
  datasets:[
    {
      label: 'Max Speed',
      fillColor: "#F44336",
      strokeColor: "#D32F2F",
      pointColor: "#F44336",
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
legend(document.getElementById('speed_chart_placeholder'), getData(exerciseTypes));

var exerciseCTX = document.getElementById("exercise_chart").getContext('2d');
var exercisePieChart = new Chart(exerciseCTX).Doughnut(getData(exerciseTypes));
legend(document.getElementById('exercise_chart_placeholder'), getData(exerciseTypes));

populateTable();

function populateTable(){
    var table = document.getElementById('running_table');
    runData.splice(0,4).forEach(function (data) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = data.distance;
      cell2.innerHTML = data.time;
      cell3.innerHTML = data.date;
      cell4.innerHTML = data.cadence;
      cell5.innerHTML = data.heartrate;
    });
}

function getData(exerciseTypes) {
  var result = [];
  Object.keys(exerciseTypes).forEach(function (data) {
    result.push(exerciseTypes[data]);
  });
  return result;
}

function convertTimeString(input) {
  var time = Math.floor(input/60) + ((input%60)/100);
  return time.toString().replace(".",":")
}
