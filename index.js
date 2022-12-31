class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }

  static  titleize(string){
    const conjunctions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitStr = string.split(" ")
    splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1)
    for (let word of splitStr){
      if(!conjunctions.includes(word)){
        splitStr[splitStr.indexOf(word)] = word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
    return splitStr.join(" ")
  }
}


// Test data
console.log(Formatter.titleize("a charles and awesome"))