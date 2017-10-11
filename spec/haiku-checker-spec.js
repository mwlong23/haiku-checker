import { Haiku } from './../js/haiku-checker.js';
// var Haiku = require('./../js/haiku-checker.js').converterModule

describe ('Haiku', function(){
  let haiku;

  beforeEach(function(){
    haiku = new Haiku()
  });

  it('should only contain three lines', function(){
    expect(haiku.hasThreeLines()).toEqual(true)
  });

  // it('each word must have a vowel', function(){
  //   expect(haiku.hasAVowel()).toEqual(true)
  // });
  //
  // it('if the vowel is silent', function(){
  //   expect(haiku.hasSilentVowel()).toEqual(true)
  // });
  //
  // it('counts the vowels in a word', function(){
  //   expect(haiku.numberOfVowels("true")).toEqual(2)
  // });
  //
  // it('subtracts the silent vowels', function(){
  //   expect(haiku.subtractSilentVowels("true")).toEqual(1)
  // });
  //
  // it('diphthongs will count as one vowel', function(){
  //   expect(haiku.DiphthongsOneVowel("China")).toEqual(true)
  // });
  //
  // it('will count remaining number of vowels and return syllable count', function(){
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
