$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var signOfStress = 0;
    var healthSymptoms = 0;
    var copingMethod = 0;
    var questions = ['signOfStress', 'healthSymptoms', 'copingMethod'];
    for(var i = 0; i < questions.length; i++) {
      $(`input:checkbox[name=${questions[i]}]:checked`).each(function(){
        // questions[i] +=;
        console.log(questions[i];
        if (questions[0] > 4 && questions[1] <= 2 && questions[2] > 4) {
          $("#recommendation").append("<p>It's not stress related. You should see your physician.</p>");
        }
      })
    }
    // This is working with empty array!
    // $("input:checkbox[name=signOfStress]:checked").each(function(){
    //   var checkedSignOfStress = $(this).val();
    //   signOfStress.push(checkedSignOfStress);
    // });
    // $("input:checkbox[name=healthSymptoms]:checked").each(function(){
    //   var checkedHealthSymptoms = $(this).val();
    //   healthSymptoms.push(checkedHealthSymptoms);
    // });
    // $("input:checkbox[name=copingMethod]:checked").each(function(){
    //   var checkedCopingMethod = $(this).val();
    //   copingMethod.push(checkedCopingMethod);
    // });

    // if (signOfStress > 4 && healthSymptoms <= 2 && copingMethod > 4) {
    //   $("#recommendation").append("<p>It's not stress related. You should see your physician.</p>");
     if (signOfStress > 3 && copingMethod > 4) {
      $("#recommendation").append("<p>Great job. You're trying to dealing with your stress.</p>");
    } else if (signOfStress > 3 && healthSymptoms > 4 ) {
      $("#recommendation").append("<p>Let's work out more.</p>");
    }  else {
      $("#recommendation").append("<p>Let's learn how to deal with stress.</p>");
    }

    $("#recommendation").show();
  });
});
