import { Haiku } from './../js/haiku-checker.js';

$(document).ready(function(){
   var haiku = new Haiku();

   $("form").submit(function(event){
     event.preventDefault();
    var enteredHaiku = $("#haiku").val();
    var correctLength = haiku.hasThreeLines(enteredHaiku);
    debugger;

  });
});
