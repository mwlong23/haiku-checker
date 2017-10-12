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
    this.line1 = rows[0];
    this.line2 = rows[1];
    this.line3 = rows[2];
    return [this.line1,this.line2,this.line3];
  }

  splitRows(){
      this.line1 = this.line1.split(" ");
      this.line2 = this.line2.split(" ");
      this.line3 = this.line3.split(" ");
    return [this.line1, this.line2, this.line3];
  };


  hasVowel(haiku) {
    let vowels = haiku.match(/[aeiou]/g);
    return vowels.length > 0;
  };


  hasSilentVowel(haiku) {
    let silentVowel = haiku.match(/([aeiouAEIOU])(?![aeiouAEIOU])[a-zA-Z]e\b/g);
    if (silentVowel != null){
      return silentVowel.length;
    } else{
      return 0;
    }
  };
  doubleVowels(haiku){
    let doubleVowels = haiku.match(/[aeiouAEIOU]{2}/g);
    if (doubleVowels != null){
      return doubleVowels.length;
    } else{
      return 0;
    }
  };

  numberOfVowels(haiku) {
    let vowels = haiku.match(/[aeiou]/gi);
    return vowels.length;
  };

  totalVowels(haiku){

    let silentVowels = this.hasSilentVowel(haiku)
    let totalnumberVowels = this.numberOfVowels(haiku)
    let countDoubleVowels = this.doubleVowels(haiku)
    if (silentVowels>0){
       return totalnumberVowels - silentVowels - countDoubleVowels
    } else if(countDoubleVowels>0) {
      return totalnumberVowels - countDoubleVowels
    } else{
      return totalnumberVowels
    }
  };

 checkFiveSevenFive(){
   let line1 = this.line1
   let line2 = this.line2
   let line3 = this.line3
   return (this.totalVowels(line1) == 5 &&  this.totalVowels(line2)== 7 &&  this.totalVowels(line3)== 5);
 };
 //used for debugging to determine what the program "thinks" the vowel count per line is
 syllablesPerLine(){
   let line1 = this.line1
   let line2 = this.line2
   let line3 = this.line3
  return (this.totalVowels(line1) +":"+ this.totalVowels(line2) + ":"+ this.totalVowels(line3))

 }
};


// exports.haikuModule = Haiku
