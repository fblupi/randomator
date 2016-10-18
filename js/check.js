/**
 * Check if every input from initial configuration is correct. Then execute the
 * action or inform the user of the error
 */
function checkInitialConfiguration() {
  var peopleNumber = $("#people_number").val();
  var teamNumber = $("#team_number").val();
  if (peopleNumber !== '' && teamNumber !== '' && peopleNumber >= teamNumber) {
    createPeopleConfiguration(peopleNumber);
  } else {
    Materialize.toast("People number should be higher or equal than team number", 4000);
  }
}

/**
 * Check if every input from people configuration isn't void
 */
function checkPeopleConfiguration() {
  var peopleNumber = $("#people_names").children().length;
  for (var i = 1; i < peopleNumber; i++) {
    if ($("#name_" + i) === '') {
      Materialize.toast("Person name can't be void", 4000);
      return;
    }
  }
  //createTeams();
}

/**
 * Generate html fields for introducing people numbers
 * @param {number} peopleNumber - Number of people
 */
function createPeopleConfiguration(peopleNumber) {
  var result =  '<h2>People configuration</h2>';
      result += '<div class="row">';
      result +=   '<form class="col s12" name="people-configuration-form" role="form" onsubmit="checkPeopleConfiguration();" action="javascript: return false;">';
      result +=     '<div class="row" id="people_names">';
      for (var i = 1; i <= peopleNumber; i++) {
        result +=     '<div class="input-field col s12 m4">';
        result +=       '<input id="name_' + i + '" type="text" class="validate">';
        result +=       '<label for="name_' + i + '">Name #' + i + '</label>';
        result +=     '</div>';
      }
      result +=     '</div>';
      result +=     '<button class="btn waves-effect waves-light" type="submit" name="action">Let&#39;s make teams!</button>';
      result +=   '</form>';
      result += '</div>';

  $("#people_configuration").html(result);
}
