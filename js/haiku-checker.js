export class Haiku {
  constructor(){
  }

  hasThreeLines(haiku) {
    var newLines = (haiku.match(/\n/g)||[]).length
    if (newLines == 2) {
      return true;
    } else {
      return false;
    }
  }
}

// exports.haikuModule = Haiku
