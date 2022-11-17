//Ten random integers between 100 and 1000.
let arr1 = [];
while(arr1.length < 10){
    let y = Math.floor(Math.random() * 1000) + 1;
    if(arr1.indexOf(y) === -1) arr1.push(y + "   ");
}
console.log(arr1);
document.getElementById("a").innerHTML = arr1;

//Ten random integers between -200 and 200.
let arr2 = [];
let max = 200;
let min = -200
while(arr2.length < 10){
    let x = Math.floor(Math.random()*(max - min + 1)) + min
    if(arr2.indexOf(x) === -1) arr2.push(x + "   ");
}
console.log(arr2);
document.getElementById("b").innerHTML = arr2;

//OBJ fname, lname, title, suffix, age.
var persons = [
  { fname : "Connor", lname: "Earles", title: "Dr.", suffix: "Jr.", age: 20},
  { fname : "Con", lname: "Ear", title: "Dr.", suffix: "Jr.", age: 21},
  { fname : "C", lname: "Money", title: "Dr.", suffix: "Sr.", age: 32},
  { fname : "Earles", lname: "Connor", title: "Dr.", suffix: "Jr.", age: 19},
  { fname : "Earles", lname: "Earles", title: "Dr.", suffix: "Jr.", age: 43},
]; 
console.log(persons);
persons.forEach(index => document.getElementById("c").innerHTML += (index.fname + " " + index.lname + " " + index.title + " " + index.suffix + " " + index.age + "<br>"));

// Arr4: let years = [-100, 0, 100, 1900, 1904, 2000];
let years = [-100, 0, 100, 1900, 1904, 2000];
console.log(years);
document.getElementById("d").innerHTML = years;

// let r = [1, 4, 5, 7]
let r = [1, 4, 5, 7];
console.log(r);
document.getElementById("e").innerHTML =  r;

// let distances = [2, 4, 6, 8, 10]
let distances = [2, 4, 6, 8, 10];
console.log(distances);
document.getElementById("f").innerHTML = distances;

// Length of hypotenuse given two sides of a right triangle (Pythagorean Theorem)
let a = 10;
let b = 12;
let c = (a, b) => (Math.sqrt((Math.pow(a,2)) + (Math.pow(b,2))));
console.log(c(a,b));
document.getElementById("a2").innerHTML = c(a,b);

// Roots of quadratic equation (include complex roots) given a, b, c coefficients
let A = 1;
let B = -3;
let C = -4;
let X = (A, B, C) => (((-1 * B) + (Math.sqrt((Math.pow(B, 2)) - 4 * A * C))) / (2 * A));
let X1 = (A, B, C) => (((-1 * B) - (Math.sqrt((Math.pow(B, 2)) - 4 * A * C))) / (2 * A));
console.log(X(A, B, C), X1(A, B, C));
document.getElementById("b2").innerHTML = (X(A, B, C), X1(A, B, C));

// Volume of a sphere given radius
let rad = 5;
let v = rad => ((Math.PI) * (Math.pow(rad, 3)) * (4/3));
console.log(v(rad));
document.getElementById("c2").innerHTML = v(rad);

// Degrees Kelvin, given degrees Fahrenheit
let F = 5;
let k = F => ((F - 32) * (5/9) + 273.15);
console.log(k(F));
document.getElementById("d2").innerHTML = k(F);

// Arctan of “pi” plus another value (in radians)
let g = 2;
let tan = g => (Math.tan(Math.PI) + g);
console.log(tan(g));
document.getElementById("e2").innerHTML = tan(g);

// The sum of a number and its square, i.e. n + n * n 
let num = 2;
let sum = num => (num + (Math.pow(num, num)));
console.log(sum(num));
document.getElementById("f2").innerHTML = sum(num);

// isleapyear
let year = 1996;
let isleapyear = year =>{ if ((year % 4 == 0) && (year % 100 != 0)){ return("True")}else{return("False")}};
console.log(isleapyear(year));
document.getElementById("g2").innerHTML = isleapyear(year);

// timeFallen(distance) returns time in seconds that an object takes to fall a given distance (at sea level on planet Earth)
let distance = 50;
let timeFallen = distance => (Math.sqrt((2 * distance / 9.8)));
console.log(timeFallen(distance));
document.getElementById("h2").innerHTML = timeFallen(distance);

// Sum of all leapyears in Arr4, years 

years.filter(year => ((year % 4 == 0) && (year % 100 != 0)))
.map (year => console.log(year));
document.getElementById("a3").innerHTML = year;

// Full names of all people in Arr3

persons.map(person => console.log(person.title + person.fname + " " + person.lname + " " + person.suffix + "  "));
persons.map(person => (document.getElementById("b3").innerHTML += (person.title + "    " + person.fname + "    " + person.lname + "    " + person.suffix+ "        ")));

// Dot product of Arr1, Arr2


// Sum of all even numbers in Arr2

arr2.filter(num => ((num % 2 == 0)))
.map (num => console.log(num));
document.getElementById("d3").innerHTML = num;

// Volumes of 4 spheres with 4 radii in Arr5

let vol = index => ((4/3) * (Math.PI) * (Math.pow(index, 3)));
r.forEach(index => document.getElementById("e3").innerHTML += (vol(index)));
// Time it takes or objects to fall the distances in Arr6

let dis = index => ((Math.sqrt((2 * index / 9.8))));
distances.forEach(index => document.getElementById("f3").innerHTML += (dis(index)));

// Sum of the arctans of values in r (Arr5)

let sumA = 0;
r.forEach(index => sumA += (Math.atan(index)));
document.getElementById("g3").innerHTML = (sumA);

// Part 2

document
  .getElementById("loadjson")
  .addEventListener("click", loadJson);
document
  .getElementById("loadpriorcountry")
  .addEventListener("click", loadPriorCountry);
document
  .getElementById("loadnextcountry")
  .addEventListener("click", loadNextCountry);

let country = 0
let json
function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange 
    = function() {
        if (this.readyState == 4 && this.status == 200) {
          json = JSON.parse(this.responseText);
        }
      };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

function loadPriorCountry () {
  country--
  if (country < 0) 
    country = 0
    document.getElementById("ID").value 
    = json.Countries[country].ID
document.getElementById("Country").value 
    = json.Countries[country].Country
document.getElementById("CountryCode").value 
    = json.Countries[country].CountryCode
document.getElementById("Slug").value 
    = json.Countries[country].Slug
document.getElementById("NewConfirmed").value 
    = json.Countries[country].NewConfirmed
document.getElementById("TotalConfirmed").value 
    = json.Countries[country].TotalConfirmed
document.getElementById("NewDeaths").value 
    = json.Countries[country].NewDeaths
document.getElementById("TotalDeaths").value 
    = json.Countries[country].TotalDeaths
document.getElementById("NewRecovered").value 
    = json.Countries[country].NewRecovered
document.getElementById("TotalRecovered").value 
    = json.Countries[country].TotalRecovered
document.getElementById("Date").value 
    = json.Countries[country].Date
}

function loadNextCountry () {
  country++
if (country > json.Countries.length - 1) 
    country = json.Countries.length - 1
document.getElementById("ID").value 
            = json.Countries[country].ID
document.getElementById("Country").value 
            = json.Countries[country].Country
document.getElementById("CountryCode").value 
            = json.Countries[country].CountryCode
document.getElementById("Slug").value 
            = json.Countries[country].Slug
document.getElementById("NewConfirmed").value 
            = json.Countries[country].NewConfirmed
document.getElementById("TotalConfirmed").value 
            = json.Countries[country].TotalConfirmed
document.getElementById("NewDeaths").value 
            = json.Countries[country].NewDeaths
document.getElementById("TotalDeaths").value 
            = json.Countries[country].TotalDeaths
document.getElementById("NewRecovered").value 
            = json.Countries[country].NewRecovered
document.getElementById("TotalRecovered").value 
            = json.Countries[country].TotalRecovered
document.getElementById("Date").value 
            = json.Countries[country].Date
}

