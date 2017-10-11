export class Haiku {
  constructor(){
    this.line1;
    this.line2;
    this.line3;
  }


  hasThreeLines(haiku) {
    let newLines = (haiku.match(/\n/g)||[]).length
    return newLines == 2
  }

  returnsEachRow(haiku) {
    let rows = haiku.split("\n");
    return rows;
    // let rows = (haiku.match(/\n/g)||[])
    // return rows;
  }



  hasVowel(haiku) {
    let vowels = haiku.match(/[aeiou]/g);
    return vowels.length > 0;
  }


  hasSilentVowel(haiku) {
    let silentVowel = haiku.match(/([aeiou])(?![aeiou])[a-z]e\b/g);
    return silentVowel.length > 0;
  }

  numberOfVowels(haiku) {
    let vowels = haiku.match(/[aeiou]/g);
    return vowels.length;
  }

  totalVowels(haiku){
    let silentVowels = this.hasSilentVowel(haiku)
    let totalVowels = this.numberOfVowels(haiku)
    if (silentVowels){
       return totalVowels - 1
    } else {
      return totalVowels
    }
  }

  hasDipthong(haiku){

  }




}

// exports.haikuModule = Haiku
