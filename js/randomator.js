/**
 * Generate html fields for introducing people numbers
 * @param {number} peopleNumber - Number of people
 */
function createPeopleConfiguration(peopleNumber) {
  var result = '<h2>People configuration</h2>';
      result += '<div class="row">';
      result += '<form class="col s12" name="people-configuration-form" role="form" onsubmit="checkPeopleConfiguration();" action="javascript: return false;">';
      result += '<div class="row" id="people-names">';
      for (var i = 1; i <= peopleNumber; i++) {
        result += '<div class="input-field col s12 m4">';
        result += '<input id="name-' + i + '" type="text" class="validate">';
        result += '<label for="name-' + i + '">Name #' + i + '</label>';
        result += '</div>';
      }
      result += '</div>';
      result += '<button class="btn waves-effect waves-light" type="submit" name="action">Let&#39;s make teams!</button>';
      result += '</form>';
      result += '</div>';

  $("#people-configuration").html(result);
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
