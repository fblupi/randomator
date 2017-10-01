/**
 * Generate html fields for introducing people numbers
 * @param {number} peopleNumber - Number of people
 */
function createPeopleConfiguration(peopleNumber) {
  var result = '<h2>People configuration</h2>';
      result += '<div class="row">';
      result += '<form class="col s12" name="people-configuration-form" role="form" onSubmit="checkPeopleConfiguration(); return false;">';
      result += '<div class="row" id="people-names">';
  for (var i = 1; i <= peopleNumber; i++) {
      result += '<div class="input-field col s12 m4">';
      result += '<input id="name-' + i + '" type="text" class="validate">';
      result += '<label for="name-' + i + '">Name #' + i + '</label>';
      result += '</div>';
  }
      result += '</div>';
      result += '<button class="btn waves-effect waves-light" type="submit">Let&#39;s make teams!</button>';
      result += '</form>';
      result += '</div>';

  $("#people-configuration").html(result);
}

function createTeams(peopleNumber, teamNumber) {
  var teams = [];
  for (var i = 0; i < teamNumber; i++) {
    teams[i] = [];
  }
  for (var i = 1; i <= peopleNumber; i++) {
    var fullTeams = true;
    for (var j = 0; j < teamNumber; j++) {
      if (teams[j].length < Math.floor(peopleNumber / teamNumber)) {
        fullTeams = false;
      }
    }
    var n = Math.floor(Math.random() * teamNumber);
    if (fullTeams) {
      while (teams[n].length === Math.ceil(peopleNumber / teamNumber)) {
        n += 1;
        n %= teamNumber;
      }
    } else {
      while (teams[n].length === Math.floor(peopleNumber / teamNumber)) {
        n += 1;
        n %= teamNumber;
      }
    }

    teams[n].push($("#name-" + i).val());
  }
  var result = '<h2>Teams</h2>';
      result += '<div class="row">';
  for (var i = 0; i < teamNumber; i++) {
      result += '<div class="input-field col s12 m4">';
      result += '<ul class="collection with-header">';
      result += '<li class="collection-header"><h3>Team #' + (i + 1) + '</h3></li>';
    for (var j = 0; j < teams[i].length; j++) {
      result += '<li class="collection-item">' + teams[i][j] + '</li>';
    }
      result += '</ul>';
      result += '</div>';
  }
      result += '</div>';

  $("#teams-result").html(result);
}
