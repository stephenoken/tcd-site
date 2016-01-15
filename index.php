<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!-- The below line is seriously important -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stephen O'Kennedy</title>
    <link rel="stylesheet" async href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    <link rel="stylesheet" async href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" async href=" ./public/styles.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span id="main-title" class="mdl-layout-title">Stephen O'Kennedy</span>
          <div class="mdl-tooltip" for="main-title">
          You will, in time, find my CV, training logs and the odd blog post.
          </div>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a href="tel:0851410017" class="mdl-navigation__link"><i class="material-icons material-text">phone</i>0851410017</a>
            <a href="mailto:okenneds@tcd.ie" class="mdl-navigation__link"><i class="material-icons material-text">mail</i>okenneds@tcd.ie</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Stephen O'Kennedy</span>
        <nav class="mdl-navigation">
          <a href="tel:0851410017" class="mdl-navigation__link"><i class="material-icons material-text">phone</i>0851410017</a>
          <a href="mailto:okenneds@tcd.ie" class="mdl-navigation__link"><i class="material-icons material-text">mail</i>okenneds@tcd.ie</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
      <div class="mdl-grid ">
        <div class="mdl-card mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Distance & Times</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div class="mdl-tabs__tab-bar">
                <a href="#this-week-panel" class="mdl-tabs__tab is-active">This Week</a>
                <a href="#last-week-panel" class="mdl-tabs__tab">Last Week</a>
                <a href="#three-week-panel" class="mdl-tabs__tab">3 Weeks</a>
                <a href="#four-week-panel" class="mdl-tabs__tab">4 Weeks</a>
              </div>
              <div class="mdl-tabs__panel is-active" id="this-week-panel">
                <table id="running-table" class="running-table mdl-data-table mdl-js-data-table">
                </table>
              </div>
              <div class="mdl-tabs__panel is-active" id="last-week-panel">
                <table class="running-table mdl-data-table mdl-js-data-table">
                </table>
              </div>
              <div class="mdl-tabs__panel is-active" id="three-week-panel">
                <table class="running-table mdl-data-table mdl-js-data-table">
                </table>
              </div>
              <div class="mdl-tabs__panel is-active" id="four-week-panel">
                <table class="running-table mdl-data-table mdl-js-data-table">
                </table>
              </div>
          </div>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">directions_run</i>
          </div>
        </div>
        <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Goals for the year</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <p>
              <i class="material-icons">crop_square</i> I'll think of something
            </p>
            <p>
              <i class="material-icons">crop_square</i> Beat Mael in a competition
            </p>
            <p>
              <i class="material-icons">crop_square</i> Learn French
            </p>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">done_all</i>
          </div>
        </div>
        <div class="mdl-card mdl-cell  mdl-cell--12-col container mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Heart Rate (BPM)</h2>
            </div>
            <canvas id="heart_rate_chart"></canvas>
            <div id="heart_rate_chart_placeholder"></div>
            <div class="mdl-card__menu">
              <i class="material-icons">favorite</i>
            </div>
        </div>
        <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Activities Done</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <canvas id="exercise_chart"></canvas>
            <div id="exercise_chart_placeholder"></div>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">accessibility</i>
          </div>
        </div>
        <div class="mdl-card mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Upcoming Races</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <p>
              National Intermediates 24th of Jan, 8k XC, Dundalk
            </p>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">play_arrow</i>
          </div>
        </div>
        <div class="mdl-card mdl-cell  mdl-cell--12-col container mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 id="speed" class="mdl-card__title-text">Speed (Km/h)</h2>
            </div>
            <div class="mdl-tooltip" for="speed">
              I'm fairly sure this isn't right.
            </div>
            <canvas id="speed_chart"></canvas>
            <div id="speed_chart_placeholder"></div>
        </div>
      </div>
    </main>
    <script async src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js" charset="utf-8"></script>
    <script src="./public/dep/chart.js.legend.js" charset="utf-8"></script>
      <script>
        <?php
        $jsonurl = "https://www.strava.com/api/v3/athlete/activities?&access_token=f93ddad10f5a77e2c0ca100d073012cd4d117c46";
        $json = file_get_contents($jsonurl);
        ?>
        var stravaData = <?php echo $json?>;
      </script>
      <script src="./public/script.js" charset="utf-8"></script>
  </body>
</html>
