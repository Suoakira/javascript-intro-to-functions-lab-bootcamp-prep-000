function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  let x = string.toUpperCase();
  console.log(x);
}

function logWhisper(string) {
  var x = string.toLowerCase();
  console.log(x);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
