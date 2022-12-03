var liczba = 2;
liczbatekst = document.getElementById("tekst");
liczbatekst.innerHTML = liczba;
odejmowanie = document.getElementById("odejmowanie");
dodawanie = document.getElementById("tekst");

function odejmij() {
	liczba = liczba - 1;
	liczbatekst.innerHTML = liczba;
}

function dodaj() {
	liczba = liczba + 1;
	liczbatekst.innerHTML = liczba;
}
