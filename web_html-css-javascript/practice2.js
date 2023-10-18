/* const daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
console.log(daysOfWeek[5]);
daysOfWeek.push("what")
console.log(daysOfWeek); */

/* const player = {
    fat: true,
    name: "Jason",
    points: 10
}
console.log(player)
console.log(player.name) */

/* function sayHello(nameOfPerson) {
    console.log("Hello to" + " " + nameOfPerson);
}

function divideNumber(a,b) {
    console.log(a/b);
}
divideNumber(10, 4)
divideNumber(15, 3) */

/* const player = {
    name: "jason",
    sayHello: function(otherPersonName) {
        console.log("say hello to " + otherPersonName)
    }
}
 */
/* const calculator = {
    add: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    divide: function(a,b) {
        return a/b;
    },
    power: function(a,b) {
        return a**b;
    }
}
console.log(calculator.add(10,5));
calculator.minus(10,5);
calculator.divide(10,5);
calculator.power(10,5); */

/* const age = 25;
function calKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calKrAge(age);

console.log(krAge); */
const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0){
    alert("put a positive number, not a string and negative number");
}else if (age < 19) {
    console.log("get away");
}else if (age >= 19 && age < 50){ 
    console.log("you can drink");
}else if (age >= 50 && age < 80){
    console.log("you should drink less");
}else {
    console.log("you shouldn't drink");
}