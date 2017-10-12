import { Haiku } from './../js/haiku-checker.js';

$(document).ready(function(){
   $("form").submit(function(event){
     event.preventDefault();
    let haiku = new Haiku();
    let enteredHaiku = $("#haiku").val();
    let assignLines = haiku.returnsEachRow(enteredHaiku)
    let correctLength = haiku.hasThreeLines(enteredHaiku);
    let correctSyllables = haiku.checkFiveSevenFive();
    
      if(correctLength && correctSyllables){
        $("#isHaiku").show();
        } else {
          $("#notHaiku").show();
        }
  });
});
