import { Haiku } from './../js/haiku-checker.js';
// var Haiku = require('./../js/haiku-checker.js').converterModule

describe ('Haiku', function(){
  let haiku;

  let passingHaiku = "1\n,2\n,3"
  let failingHaiku = "1\n,2\n,3\n,4"
  let testHaiku = "I am one with five\nThen seven in the middle\nFive again to end."

  beforeEach(function(){
    haiku = new Haiku()
  });

  it('should only contain three lines', function(){
    expect(haiku.hasThreeLines(passingHaiku)).toEqual(true)
  });

  it('shouldn\'t contain more than three lines', function(){
    expect(haiku.hasThreeLines(failingHaiku)).toEqual(false)
  });

  it('should return each row', function(){
    expect(haiku.returnsEachRow(testHaiku)).toEqual(["I am one with five","Then seven in the middle","Five again to end."])
  });

  it('should check to see that each word has a vowel', function(){
    expect(haiku.hasVowel("sony")).toEqual(true)
  });

  it('should check for silent vowels', function(){
    let testWord = "rake"
    expect(haiku.hasSilentVowel(testWord)).toEqual(1)
  });

  it('should count the vowels in a word', function(){
    expect(haiku.numberOfVowels("true")).toEqual(2)
  });

  it('should subtract the silent vowels', function(){
    expect(haiku.totalVowels("make")).toEqual(1)
  });

  it('should split each row into an array of words', function(){
    let splitHaiku = [['I', 'am', 'one', 'with', 'five'], ['Then', 'seven', 'in', 'the', 'middle'],['Five', 'again', 'to', 'end.']]
    haiku.returnsEachRow(testHaiku)
    expect(haiku.splitRows()).toEqual(splitHaiku)
  });

  it('should sum up vowels in a single row', function(){
    haiku.returnsEachRow(testHaiku)
    let line1=haiku.line1
    expect(haiku.totalVowels(line1)).toEqual(5)
  });
  it('should return true if each line of a haiku contains the correct number of syllables', function(){
    haiku.returnsEachRow(testHaiku)

    expect(haiku.checkFiveSevenFive()).toEqual(true)
  });

  // it('diphthongs will count as one vowel', function(){
  //   expect(haiku.hasDiphthong("China")).toEqual(true)
  // });

  // it('will count number of vowels and return syllable count', function(){
  //   expect(haiku.countSyllables()).toEqual(2)
  // });
  //
  // it('will divide two middle consonants in each word', function(){
  //   expect(haiku.divideMiddleConsonants("happen")).toEqual(2)
  // });
  //
  // it('handles exceptions to middle consonants', function(){
  //   expect(haiku.handlesMiddleConsonantsException("digraph example needed here")).toEqual()
  // });
  //
  // it('divides in front of middle consonants', function(){
  //   expect(haiku.dividesOneSyllable("open")).toEqual(2)
  // });
  //
  // it("divides before consonant before 'le' syllable", function(){
  //   expect(haiku.consonantsBeforeLe("fumble")).toEqual(2)
  // });


// **further exploration**
//   5. Divide off any compound words, prefixes, suffixes and roots which have vowel sounds.
//   http://english.glendale.cc.ca.us/phonics.rules.html

});
