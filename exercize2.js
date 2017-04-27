// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x , y){
	if(x > y) {
		return x;
	} else if(y > x){
		return y;
	}

}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x , y , z){
    if(x > y){
    	if(x > z){
    		return x;
    	} else {return z;} 
    } else if(y > z){
    	return y;
    } else {return z;}
}
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	char = char.toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    	return true;
    } else {
    	return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	var txt = phrase;
	var con = ["b" , "c" , "d", "f" , "g" , "h" , "j" , "k" , "l" , "m" , "n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z"]
	var translated = "";
	
	for(i = 0; i < txt.length; i++){
		var letter = txt.charAt(i);
		if(con.indexOf(letter) != -1){
			translated += (letter + "o" + letter);
		} else {
			translated += (letter);
		}
	}

	return translated;
}

console.log(rovarspraket("this is fun"))


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(text){
    var word = text.toLowerCase();
    var wordRev = "";

    for(var i = 0; i < word.length; i++){
    	var currentLetter = word.charAt(i);
    	wordRev = (currentLetter) + wordRev;
    }

    return wordRev;
}

reverse("jag testar")