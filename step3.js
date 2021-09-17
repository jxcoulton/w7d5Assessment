//sum zero O(n)
function equalsZero(arr) {
	isZero = true;
	equals = 0;
	for (let i = 0; i < arr.length; i++) {
		equals += arr[i];
	}

	if (equals === 0) {
		isZero = true;
	} else {
		isZero = false;
	}
	console.log(isZero);
}

//has unique characters O(n^2)
function hasUniqueCharacters(str) {
	str = str.toLowerCase().replace(/([^a-z])+/g, "");
	let isTrue = true;
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				isTrue = false;
				return console.log(isTrue);
			} else {
				isTrue = true;
			}
		}
	}
	return console.log(isTrue);
}

//panagram O(n^2)
function isPanagram(str) {
	str = str.toLowerCase().replace(/([^a-z])+/g, "");
	let isEmpty = false;
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (str[i] === alphabet[j]) {
				alphabet.splice([j], 1);
			}
			if (alphabet.length === 0) {
				isEmpty = true;
			}
		}
	}
	return console.log(isEmpty);
}

//longest word O(n)
function findLongestWord(str) {
	longest = 0;
	let words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= longest) {
			longest = words[i].length;
		}
	}
	console.log(longest);
}

equalsZero([1, 2, -3]);
hasUniqueCharacters("Jayme");
isPanagram("the quick brown fox jumps over the lazy dog");
findLongestWord("the quick brown fox jumped over the lazy dog");
