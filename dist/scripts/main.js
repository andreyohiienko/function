;(function() {
	"use strict";

	var a = +prompt( "Введите нижнюю границу", "1");
	var b = +prompt( "Введите верхнюю границу", "2");

	checkNumbers( a, b );

	function checkNumbers( bottomLimit, topLimit ) {

		if ( a <= b ) { // check the numbers

				generateNumbers();

			} else {

				console.log("Нижняя граница должна быть меньшим числом или равным верхней границе!");

			}
	}

	function generateNumbers() {

		for( var i = 0; a <= b; i++ ) {

			if ( a ===2 || a === 3 || a === 5 || a === 7 ) { // include numbers 2, 3, 5, 7

				console.log(a);

			} else {

				if ( a != 1 && ( (a % 2) && (a % 3) && (a % 5) && (a % 7) ) != 0 ) { // exclude number 1 and numbers which share on 2, 3, 5, 7 

					console.log(a);

				}
			}

			a++;

		}
	}

})();