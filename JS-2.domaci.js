	//js - 2.domaci
//1.zadatak - suma N prirodnih brojeva
function sumN() {
	var N = prompt("Unesi prirodan broj: ");
	var sum = 0;
	for (i = 1; i <= N; i++) {
	sum += i;
	}
	console.log(sum);
	alert("Suma prirodnih brojeva do N je: \n" + sum);
}

//2.zadatak - Faktorijel
function factor() {
	var N = prompt("Unesi broj: ");
	var factor = 1;
	for (i = 2; i <= N; i++) {
		factor = factor * i;
	}
	console.log(factor);
	alert("Faktorijel trazenog broja je: \n" + factor);
}

//3.zadatak - koliko mozemo kupiti
function howMuch() {
	var racun = prompt("Koliko imas da potrosis?");
	var cena = prompt("Kolika je cena proizvoda?");
	var sadrzaj = (racun / cena);
	var kolicina = Math.floor(sadrzaj);
	console.log(kolicina);
	alert("Kolicina koju mozes da kupis: " + kolicina);
}

//4.zadatak - suma celih brojeva u opsegu od N do K
function sumFromNtoK() {
	var N = parseInt(prompt("Unesi pocetni broj:"));
	var K = parseInt(prompt("Unesi krajnji broj:"));
	var sum = 0;
	for (i = N; i <= K; i++) {
		sum += i;
	}
	console.log(sum);
	alert("Zbir celih brojeva u opsegu od " + N + " do " + K + " je:\n" + sum);
}

