//Business logic
const suggestion = (message) => {
  $("#message").text(message);
}

//Frontend logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var checkedSignOfStress= $("input:checkbox[name=sign-of-stress]:checked").length;
    var checkedHealthSymptoms = $("input:checkbox[name=health-symptoms]:checked").length;
    var checkedCopingMethod = $("input:checkbox[name=coping-method]:checked").length;

    if (checkedSignOfStress > 4 && checkedHealthSymptoms <= 2 && checkedCopingMethod > 4) {
      suggestion("It's not stress related. You should see your physician.");
    } else if (checkedSignOfStress > 3 && checkedCopingMethod > 4) {
      suggestion("Great job. You're trying to deal with your stress.");
    } else if (checkedSignOfStress > 3 && checkedHealthSymptoms > 4 ) {
      suggestion("Your situation is a little bit serious.");
    }  else {
      suggestion("Let's learn how to deal with stress with us.");
    }
    $("#recommendation").show();
  });
});
