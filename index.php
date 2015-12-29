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
          Just FYI. I'm treating this site as my own slice of the internet. You'll, in time, find my CV, training diary and the odd blog post.
          </div>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a href="tel:353851410017" class="mdl-navigation__link"><i class="material-icons material-text">phone</i>0851410017</a>
            <a href="mailto:okenneds@tcd.ie" class="mdl-navigation__link"><i class="material-icons material-text">mail</i>okenneds@tcd.ie</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Stephen O'Kennedy</span>
        <nav class="mdl-navigation">
          <a href="tel:353851410017" class="mdl-navigation__link"><i class="material-icons material-text">phone</i>0851410017</a>
          <a href="mailto:okenneds@tcd.ie" class="mdl-navigation__link"><i class="material-icons material-text">mail</i>okenneds@tcd.ie</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <!-- <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-cell--8-col-desktop mdl-cell--12-col-phone">
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">Qualification</th>
                  <th class="mdl-data-table__cell--non-numeric">Institution</th>
                  <th class="mdl-data-table__cell--non-numeric">Classification</th>
                  <th class="mdl-data-table__cell--non-numeric">Graduation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric">MSc. Networks and Distributed Systems</td>
                  <td class="mdl-data-table__cell--non-numeric">Trinity College Dublin</td>
                  <td class="mdl-data-table__cell--non-numeric">TBD</td>
                  <td class="mdl-data-table__cell--non-numeric">August 2016</td>
                </tr>
                <tr>
                  <td class="mdl-data-table__cell--non-numeric">BSc. Business Computing</td>
                  <td class="mdl-data-table__cell--non-numeric">Dublin Institute of Technology</td>
                  <td class="mdl-data-table__cell--non-numeric">1:1</td>
                  <td class="mdl-data-table__cell--non-numeric">May 2015</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mdl-layout-spacer"></div>
      </div> -->
      <div class="mdl-grid ">
        <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Work Experience</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <h6>Intern software developer, Terranua, Dublin, Ireland</h6>
            <p>
              March 2014 - August 2014
            </p>
            <p>
              Joined as an intern in the company, working on developing and implementing a new style and functionality on the firm’s main application. Worked with several other developers, including an external web designer on developing solutions to implement the new styles while minimising any underlying code changes.
            </p>
            <p>
              August 2014 - August 2015
            </p>
            <p>
              Offered a part-time position upon completion of the internship to continue working on the new styles as well as adding additional functionality to the application. During this time I began experimenting with taskrunners like Grunt and Gulp to imporve both my productivity and the quality of my work.
            </p>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">work</i>
          </div>
        </div>
        <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Skills</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <h6>Problem Solving</h6>
            <p>
              Ability to read through and analyse a project or assignment brief together with teasing out the appropriate entities and relationships. This results in being able to give well thought out solutions based on a clear understanding of the requirements.
            </p>
            <h6>Dealing with Pressure</h6>
            <p>
              Ability to identify and focus on the components that are critical for the successful delivery of a project within a specified time.
            </p>
            <h6>Continuous Improvement</h6>
            <p>
              Open to expanding my programming skill set, by learning and understanding new technologies. The ability to adapt technologies/programs and use them on different platforms or formats. For example I am currently learning Haskell with the aim of getting a better understanding of functional programming.
            </p>
          </div>
          <div class="mdl-card__menu">
            <i class="material-icons">code</i>
          </div>
        </div>
        <h4>Standby... I'm going to create my own personal blog below.</h4>
      </main>
    </div>
    <script async src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script>
    <?php
      $jsonurl = "https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=f93ddad10f5a77e2c0ca100d073012cd4d117c46";
      $json = file_get_contents($jsonurl);
      var_dump(json_decode($json));       ?>
      <script>
      var test = <?php echo $json?>;
      console.log(test);
      </script>
      <script src="./public/script.js" charset="utf-8"></script>
  </body>
</html>
