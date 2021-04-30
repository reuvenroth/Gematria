var input = prompt("Gematria!",  "Enter any Hebrew letters for their # value");
var total = 0;
var letters = ['א', 1, 'ב', 2, 'ג', 3, 'ד', 4, 'ה', 5, 'ו', 6, 'ז', 7, 'ח', 8, 'ט',  9, 'י', 10, 'כ', 20, 'ך', 20, 'ל', 30, 'מ', 40, 'ם', 40, 'נ', 50, 'ן', 50, 'ס', 60, 'ע', 70, 'פ', 80, 'ף', 80, 'צ', 90, 'ץ', 90, 'ק', 100, 'ר', 200, 'ש', 300, 'ת', 400, ' ', 0];
var calc = function(input) {
	for (var i = 0; i < input.length; i++) {
	console.log(i);
	console.log(input[i]);
		for (var j = 0; j < letters.length; j+=2) {
			if(input[i] === letters[j]) {
				total += letters[j+1];
			};
		};
		console.log(total);
	};
	return total;
};
total = calc(input);
alert("The total of " + total + " is your Gematria.");
var again = confirm("Would you like to check another Gematria?");
while (again === true) {
	total = 0;
	input = prompt("Enter any Hebrew letters for their # value");
	total = calc(input);
	alert("The total of " + total + " is your Gematria.");
	again = confirm("Would you like to check another Gematria?");
};
//* אבגדהוזחטיכךלמםנןסעפףצץקרשת 
