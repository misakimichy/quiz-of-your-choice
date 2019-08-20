$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var signOfStress = [];
    var healthSymptoms = [];
    var copingMethod = [];
    $("input:checkbox[name=signOfStress]:checked").each(function(){
      var checkedSignOfStress = $(this).val();
      signOfStress.push(checkedSignOfStress);
    });
    $("input:checkbox[name=healthSymptoms]:checked").each(function(){
      var checkedHealthSymptoms = $(this).val();
      healthSymptoms.push(checkedHealthSymptoms);
    });
    $("input:checkbox[name=copingMethod]:checked").each(function(){
      var checkedCopingMethod = $(this).val();
      copingMethod.push(checkedCopingMethod);
    });

    if (signOfStress.length > 4 && healthSymptoms.length <= 2 && copingMethod.length > 4) {
      $("#recommendation").append("<p>It's not stress related. You should see your physician.</p>");
    } else if (signOfStress.length > 3 && copingMethod.length > 4) {
      $("#recommendation").append("<p>Great job. You're trying to dealing with your stress.</p>");
    } else if (signOfStress.length > 3 && healthSymptoms.length > 4 ) {
      $("#recommendation").append("<p>Let's work out more.</p>");
    }  else {
      $("#recommendation").append("<p>Let's learn how to deal with stress.</p>");
    }

    $("#recommendation").show();
  });
});
