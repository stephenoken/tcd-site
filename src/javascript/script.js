$(function () {
  $.get("https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=93ddad10f5a77e2c0ca100d073012cd4d117c46",
  function(data){
    console.log(data);
  });
});
