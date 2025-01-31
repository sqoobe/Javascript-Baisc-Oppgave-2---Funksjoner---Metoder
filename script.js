/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function oddOrNot(tall) {
  return tall % 2 === 0 ? "Partall" : "Oddetall";
}
// tall % 2 === 0 sjekker om det kan deles på 2 som blir partall
// tall % 2 !== 0 betyr at det blir oddetall
//
console.log(oddOrNot(4)); //par
console.log(oddOrNot(11)); //odd
console.log(oddOrNot(6)); //par
console.log(oddOrNot(7)); //odd

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
let myText = "Dette er kult"; // variabel med string text "Dette er kult"
let myText2 = "Dette er enda kulere";

function thisIs(text) {
  return text.toUpperCase() + "!"; //gjør parameter til uppercast & legger til "!"
}

console.log(thisIs(myText2 + " " + "og mega tøft"));
//
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
let mittNavn = "Jacob";
let klokkenEr = 10;

function greeting(navn, tid) {
  if (klokkenEr < 0 || klokkenEr > 23) {
    return "Ugyldig tid";
  } else if (klokkenEr >= 0 && klokkenEr <= 5) {
    return `God natt ${mittNavn}`;
  } else if (klokkenEr >= 6 && klokkenEr <= 11) {
    return `God morgen ${mittNavn}`;
  } else if (klokkenEr >= 12 && klokkenEr <= 17) {
    return `God dag ${mittNavn}`;
  } else {
    return `God kveld ${mittNavn}`;
  }
}
console.log(greeting());

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
const farger = ["Rød", "Grønn", "Blå", "Gul"];

const mineTall = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

function firstAndLast(array) {
  array.pop() & array.shift();
  return array;
}
//
console.log(firstAndLast(farger)); //returnerer farger med først og siste index fjernet.
//
console.log(firstAndLast(mineTall)); //returnerer tall med først og siste index fjernet.
//
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

let eksempel1 = "  Javascript er vanskelig   ";
let eksempel2 = " Det er vanskelig å bruke metoder ";
let eksempel3 = "   vanskelig        ";

function ryddOpp(text) {
  let newText = text.replace("vanskelig", "gøy");
  newText = newText.trim();
  return newText;
}
console.log(ryddOpp(eksempel1));
console.log(ryddOpp(eksempel2));
console.log(ryddOpp(eksempel3));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

//Steg 1:
items.shift(); //fjerner første element i array
console.log(items);
//Steg 2:
items[2] = "Linjal"; //funker bare vis du vet hvor viskelær ligger i arrayen.
//penn=0,notatbok=1,viskelær=2.
console.log(items);
//Steg 3:
items.splice(0, 2, "Markerkingspenn"); //starter på element#0, sletter 2 elementer og legger til Markeringspenn.
console.log(items);
//Steg 4:
let stepFour = items.join(" | "); //Setter sammen alle elementene til en string og legger til " | " som seperator.
console.log(stepFour);
//

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
