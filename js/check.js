/**
 * Check if every input from encrypter is correct. Then execute the action
 */
function checkInitialConfiguration() {
    var peopleNumber = $("#people_number").val();
    var teamNumber = $("#team_number").val();
    if (peopleNumber > teamNumber) {
      //createPeopleConfiguration(peopleNumber, teamNumber);
    } else {
      Materialize.toast("People number should be higher than team number", 4000)
    }
}
