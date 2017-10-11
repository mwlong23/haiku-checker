export class Haiku {
  constructor(){
  }


  hasThreeLines(haiku) {
    var newLines = (haiku.match(/\n/g)||[]).length
    return newLines == 2
  }

  hasVowel(haiku) {
    var vowels = haiku.match(/[aeiou]/g);
    return vowels.length > 0;
  }


  hasSilentVowel(haiku) {
    var silentVowel = haiku.match(/([aeiou])(?![aeiou])[a-z]e\b/g);
    return silentVowel.length > 0;
  }
  numberOfVowels(haiku) {
    var vowels = haiku.match(/[aeiou]/g);
    return vowels.length;
  }




}

// exports.haikuModule = Haiku
