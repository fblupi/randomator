/**
 * Check if every input from initial configuration is correct. Then execute the
 * action or inform the user of the error
 */
function checkInitialConfiguration() {
  var peopleNumberField = $("#people-number");
  var teamNumberField = $("#team-number");
  var peopleNumber = peopleNumberField.val();
  var teamNumber = teamNumberField.val();
  if (peopleNumber !== '' && teamNumber !== '' && parseInt(peopleNumber) >= parseInt(teamNumber)) {
    peopleNumberField.attr("disabled", true);
    teamNumberField.attr("disabled", true);
    createPeopleConfiguration(peopleNumber);
  } else {
    Materialize.toast("People number should be higher or equal than team number", 4000);
  }
}

/**
 * Check if every input from people configuration isn't void
 */
function checkPeopleConfiguration() {
  var peopleNumber = $("#people-number").val();
  var teamNumber = $("#team-number").val();
  for (var i = 1; i < peopleNumber; i++) {
    if ($("#name-" + i).val() === '') {
      Materialize.toast("Person name can't be void", 4000);
      return;
    }
  }
  createTeams(peopleNumber, teamNumber);
}

/**
 * Clear results
 */
function clearResults() {
  var peopleNumberField = $("#people-number");
  var teamNumberField = $("#team-number");
  var peopleConfiguration = $("#people-configuration");
  var teamsResult = $("#teams-result");
  peopleNumberField.removeAttr("disabled");
  teamNumberField.removeAttr("disabled");
  peopleConfiguration.html("");
  teamsResult.html("");
}
