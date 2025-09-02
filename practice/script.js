//methods to get html element 

//method 1 - select by class

// let boxContainer = document.getElementsByClassName("box");

//method 2 - select by id 

// boxContainer = document.getElementById("boxContainer");

// method 3 - select by querySelector

// boxContainer = document.querySelector(".box");

// or 

let boxContainer = document.querySelector("#boxContainer");
let operations = document.getElementsByClassName("operations");
let childCount = document.getElementById("childCount");


childCount.addEventListener("change", (e) => {
    e.preventDefault();
    let cnt = e.target.value;

    if (cnt > 10) {
        alert("invalid");
        return
    }

    for (let i = 0; i < cnt; i++) {

        let ele = document.createElement("div");
        ele.classList.add("boxChild");
        ele.style.width = '50px';
        ele.style.height = '50px';
        ele.style.background = 'black'
        document.querySelector(".box").appendChild(ele);
        console.log(i);
    }


})

function greet() {
    const date = new Date().getHours();
    console.log(date)
    console.log(date)

    if (date >= 1 && date <= 11) {
        return "Good Morning";
    }
    if (date >= 12 && date <= 16) {
        return "Good AfterNoon";
    }
    if (date >= 17 && date <= 20) {
        return "Good Evening"
    }
    else return "Good Night"

}
// direct function 
function addName() {
    let name = prompt("enter your name");
    // document.querySelector(".box").innerHTML  = `Good Morning , Welcom ${name} 👋`;
    document.querySelector("#boxContainer").innerText = `${greet()}, Welcome ${name} 👋`;
    // document.write(`Good Morning , Welcom ${name} 👋`) ;
}

function addChild() {
    boxContainer.innerHTML = "<h1>Hello</h1>"
    alert("children added!")
}

function takePrint() {
    window.print();
}

function add() {
    let num1 = prompt("enter first number");
    let num2 = prompt("enter second  number");

    document.querySelector(".result").innerHTML = parseInt(num1) + parseInt(num2);

}

function divide() {
    let num1 = prompt("enter first number");
    let num2 = prompt("enter second  number");

    document.querySelector(".result").innerHTML = num1 / num2;

}
function multiply() {
    let num1 = prompt("enter first number");
    let num2 = prompt("enter second  number");

    document.querySelector(".result").innerHTML = num1 * num2;

}
function addString() {
    let s1 = prompt("enter first String");
    let s2 = prompt("enter second  String");

    document.querySelector(".result").innerHTML = s1 + " " + s2;

}

/*
loops , switch 
*/


//  operation = 1  ;
// switch (operation) {
//     case 1:
//         add()
//         break;

//     case 2:
//         divide()
//         break;

//     case 3:

//         multiply();
//         break;

//     case 4:

//         addString();
//         break;

//     default:
//         break;
// }

// () 
// {}

var res = [1, 2, 3].reduce((sum, e) => {
    return sum + e;
})


document.addEventListener("contextmenu", function (e){
    // e.preventDefault();
}, false);

var x = 3, y = 5;

str = "itgeeks";

str.split("").reverse().join("");

console.log(str.split("").reverse().join(""))


const points = [40, 100, 1, 5, 25, 10];
document.querySelector(".result").innerHTML = points;

function myFunction1() {
  points.sort();
  document.querySelector(".result").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.querySelector(".result").innerHTML= points;
}






