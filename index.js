 var cityToCheck = prompt("Enter your city");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
 for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
         alert("It's one of the cleanest cities");
    }
}

 cityToCheck = cityToCheck.toLowerCase();
 cityToCheck = cityToCheck.toUpperCase();
 
var firstChar = cityToCheck.slice(0, 1);
var someChars = cityToCheck.slice(2, 5);
var someChars = cityToCheck.slice(2);
 var firstChar = cityToCheck.slice(0, 1);
 var otherChars = cityToCheck.slice(1);
 firstChar = firstChar.toUpperCase();
 otherChars = otherChars.toLowerCase();
 var cappedCity = firstChar + otherChars;
 var month = prompt("Enter a month");
 var charsInMonth = month.length;
 if (charsInMonth > 3) {
 monthAbbrev = month.slice(0, 3);
}

var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

 for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 12) === "World War II") {
         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}

var firstChar = text.indexOf("World War II");
var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");

var firstChar = firstName.slice(0, 1);
var firstChar = firstName.charAt(0)
var lastChar = name.charAt(name.length - 1); 
for (var i = 0; i < text.length; i++) {
 if (text.charAt(i) === "!") {
     alert("Exclamation point found!");
        break;
    }
}

 for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 12) === "World War II") {
         text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}
 var firstChar = text.indexOf("World War II");
 if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

var newText = text.replace("World War II", "the Second World War");
text = text.replace("World War II", "the Second World War");
var newText = text.replace(/World War II/g, "the Second World War");
