
let userdata = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
let allUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

const homeContainer = document.querySelector(".homeContainer");
const questions = [
    {
        question: "What does 'DOM' stand for in JavaScript?",
        options: ["Data Object Model", "Document Object Model", "Document Oriented Model", "Data Organized Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Ruby on Rails"],
        answer: "React"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function = myFunction()", "function: myFunction()", "function: myFunction =>"],
        answer: "function myFunction()"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x = 5", "let x = 5", "const x = 5", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of the following is used to select elements in the DOM?",
        options: ["querySelector()", "getElementById()", "getElementsByClassName()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What does 'this' refer to in JavaScript?",
        options: ["The current function", "The global object", "The current object", "None of the above"],
        answer: "The current object"
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["String", "Number", "Boolean", "Character"],
        answer: "Character"
    },
    {
        question: "Which method can be used to convert a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
        answer: "JSON.stringify()"
    },
    {
        question: "Which JavaScript keyword is used to define a constant?",
        options: ["let", "var", "const", "constant"],
        answer: "const"
    },
    {
        question: "How can you stop a loop in JavaScript?",
        options: ["break", "exit", "stop", "halt"],
        answer: "break"
    },
    {
        question: "Which of these is used to handle exceptions in JavaScript?",
        options: ["try-catch", "throw-catch", "catch-finally", "catch-throw"],
        answer: "try-catch"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "===", "=", "!="],
        answer: "==="
    },
    {
        question: "What is the output of 5 + '5' in JavaScript?",
        options: ["55", "10", "Error", "NaN"],
        answer: "55"
    },
    {
        question: "What does the 'setTimeout' function do in JavaScript?",
        options: ["Executes a function after a specified delay", "Sets the timeout for a server request", "Creates a new thread", "None of the above"],
        answer: "Executes a function after a specified delay"
    },
    {
        question: "What is a closure in JavaScript?",
        options: ["A function that has access to its own scope, the scope of the outer function, and the global scope", "A variable inside a function", "A function inside another function", "A special object used to store values"],
        answer: "A function that has access to its own scope, the scope of the outer function, and the global scope"
    },
    {
        question: "Which of the following is NOT a JavaScript primitive data type?",
        options: ["String", "Number", "Object", "Boolean"],
        answer: "Object"
    },
    {
        question: "What is the purpose of the 'return' keyword in a function?",
        options: ["To stop the function execution", "To return a value from the function", "To exit the loop", "To create a new function"],
        answer: "To return a value from the function"
    }
];



let Result = new Array();

let start = document.querySelector("#start");
let quizContainer = document.querySelector("#quizContainer");
let username = document.querySelector(".username");
let userHighestMarks = document.querySelector("#highestMarks");
let playagain = document.querySelector("#playAgain");
let logout = document.querySelector("#logout");
let gohome = document.querySelector("#gohome");
let seeAns = document.querySelector("#seeAns");

logout.onclick = () => {
    localStorage.removeItem("user");
    window.location.href = "./login.html";
}

logout.style.cursor = "pointer";

function getUserName() {
    if (userdata) {
        username.innerHTML = `User Name : ${userdata?.name}`;
        userHighestMarks.innerHTML = `Highest Marks : ${userdata?.highestMarks ? userdata?.highestMarks : "0"}`;
    }
    else {
        username.innerHTML = `User Name :user-${Math.floor(Math.random() * 50).toFixed(0)}`
        userHighestMarks.innerHTML = "0";
    }
}
// getUserName();
start.addEventListener("click", startQuiz);
var timer = 0;
let qIndex = 0;

seeAns.onclick = () => {
    qIndex = 0;
    showAns();
}

function getFormattedTime(timer) {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function startQuiz() {
    document.querySelector(".result").style.display = "none";
    homeContainer.style.display = "none";
    showQ(qIndex);
    start.style.display = "none";

    let intervalId = setInterval(() => {
        timer++;
        document.querySelector("#timer").innerHTML = `Time : ${getFormattedTime(timer)}`;
    }, 1000);
}
function showAns() {
    // qIndex = 0;
    quizContainer.style.display = 'block';
    document.querySelector(".result").style.display = "none";
    homeContainer.style.display = "none";
    start.style.display = "none";

    let box = document.createElement("div");
    let desc = document.createElement("p");

    desc.className = 'desc';
    desc.innerHTML = `Q-${qIndex + 1}: ${questions[qIndex].question}`;

    let optionsBOx = document.createElement("div");
    optionsBOx.style.display = "grid";
    optionsBOx.style.gridTemplateColumns = "1fr 1fr";
    optionsBOx.style.gridTemplateRows = "auto";

    questions[qIndex].options.forEach((op, index) => {
        let optionChild = document.createElement("div");
        optionChild.innerHTML = `${op}`;
        optionChild.className = 'options';
        optionChild.style.padding = '10px';
        optionChild.style.border = '1px solid #ccc';
        optionChild.style.cursor = 'pointer';
        optionsBOx.appendChild(optionChild);
    });

    let selectedOptions = optionsBOx.querySelectorAll('.options');
    selectedOptions.forEach((option) => {
        let prevAns = Result.filter((e) => e.index == qIndex)[0];

        if (prevAns) {
            let myans = prevAns.selectOption;
            let originalAns = questions[qIndex].answer;
            let currenOption = String(option.innerHTML);
            console.log("myans ", myans, " orginalans ", originalAns, " currenOption ", currenOption);


            if (myans == currenOption && currenOption != originalAns) {
                option.style.backgroundColor = 'red';
            }
            if (myans == currenOption && currenOption == originalAns) {
                option.style.backgroundColor = 'green';
            }
            if (currenOption == originalAns) {
                option.style.backgroundColor = 'green';
            }

        }
        else {

            if (questions[qIndex].answer == String(option.innerHTML)) {
                option.style.backgroundColor = 'green';
            }
        }

    });


    quizContainer.innerHTML = "";
    quizContainer.appendChild(desc);
    quizContainer.appendChild(optionsBOx);
    document.querySelector("#timer").innerHTML = `Time: ${getFormattedTime(timer)}`;

    let next = document.createElement("button");
    next.innerHTML = "Next";
    next.style.opacity = (qIndex + 1 >= questions.length) ? '0.5' : '1';
    next.disabled = (qIndex + 1 >= questions.length);
    next.onclick = function () {
        if (qIndex + 1 < questions.length) {
            qIndex++;
            showAns();
        }
    };

    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.style.opacity = (qIndex - 1 < 0) ? '0.5' : '1';
    back.disabled = (qIndex - 1 < 0);
    back.onclick = function () {
        if (qIndex - 1 >= 0) {
            qIndex--;
            showAns();
        }
    };

    let home = document.createElement("button");
    home.innerHTML = "Home";
    home.onclick = () => window.location.href = "./home.html";


    quizContainer.appendChild(back);
    quizContainer.appendChild(next);
    quizContainer.appendChild(home);
}

function showQ(qIndex) {
    console.log(qIndex);
    let box = document.createElement("div");
    let desc = document.createElement("p");


    desc.className = 'desc';

    desc.innerHTML = `Q-${qIndex + 1} :${questions[qIndex].question}`;
    let optionsBOx = document.createElement("div");
    optionsBOx.style.display = "grid";
    optionsBOx.style.gridTemplateColumns = "1fr 1fr";
    optionsBOx.style.gridTemplateRows = "auto";

    questions[qIndex].options.forEach((op, index) => {
        let optionChild = document.createElement("div");
        optionChild.innerHTML = `${op}`;
        optionChild.className = 'options';
        optionChild.style.padding = '10px';
        optionChild.style.border = '1px solid #ccc';
        optionChild.style.cursor = 'pointer';

        optionChild.onclick = function () {
            Result = Result.filter((e) => e.index != qIndex);
            Result.push({ index: qIndex, selectOption: op });

            let selectedOptions = optionsBOx.querySelectorAll('.options');
            selectedOptions.forEach((option) => {
                option.style.backgroundColor = '';
            });
            optionChild.style.backgroundColor = '#d3f4d9';
        };


        optionsBOx.appendChild(optionChild);

        let prevAns = Result.filter((e) => e.index == qIndex)[0];
        if (prevAns) {
            console.log("prev ans ", prevAns);
            let selectedOptions = optionsBOx.querySelectorAll('.options');

            selectedOptions.forEach((option) => {
                if (String(option.innerHTML) == prevAns.selectOption) {
                    console.log("pass")
                    option.style.backgroundColor = '#d3f4d9';
                }
                else {
                    console.log("failed")

                }
            });
        }


    });

    document.getElementById('quizContainer').appendChild(optionsBOx);



    quizContainer.innerHTML = "";
    document.querySelector("#timer").innerHTML = `Time : ${getFormattedTime(timer)}`;
    quizContainer.appendChild(desc);
    quizContainer.appendChild(optionsBOx);




    let next = document.createElement("button");
    next.innerHTML = "next";
    if (qIndex + 1 >= questions.length) {
        next.style.opacity = '0.5';
        next.setAttribute("disabled", "true");

    }
    next.onclick = function () {
        if (qIndex + 1 < questions.length) {
            qIndex++;
            showQ(qIndex);
        }
    }

    let back = document.createElement("button");
    back.innerHTML = "back";
    if (qIndex - 1 < 0) {
        back.style.opacity = '0.5';
        back.setAttribute("disabled", "true");

    }
    back.onclick = function () {
        if (qIndex - 1 >= 0) {
            qIndex--;
            showQ(qIndex);
        }
    }

    let submit = document.createElement("button");
    submit.innerHTML = "submit";
    submit.onclick = showResult;
    quizContainer.append(back);
    quizContainer.append(next);
    quizContainer.appendChild(submit);
}


function showResult() {
    let isOk = confirm("Do You Want To Submit");
    if (!isOk) return;
    quizContainer.style.display = 'none';
    document.querySelector(".result").style.display = "block";
    document.getElementById("timer").style.display = "none";
    Result.forEach((r) => console.log(r));

    let totalMark = questions.length;

    let getMarks = Result.reduce((sum, el) => {
        return sum + (el.selectOption === questions[el.index]?.answer ? 1 : 0);
    }, 0);

    let percentage = (getMarks / totalMark) * 100;

    console.log("Total Marks: ", totalMark);
    console.log("Obtained Marks: ", getMarks);
    console.log("Percentage: ", percentage);

    document.querySelector("#total").innerHTML = `Total: ${totalMark}`;
    document.querySelector("#obtain").innerHTML = `Obtain: ${getMarks}`;
    document.querySelector("#percentage").innerHTML = `Percentage: ${percentage.toFixed(2)}%`;

    document.querySelector("#timeTaken").innerHTML = `Time : ${getFormattedTime(timer)}`;

    let highestMarks = userdata?.highestMarks ? Math.max(getMarks, userdata.highestMarks) : getMarks;

    userdata.highestMarks = highestMarks;

    let myuser = {
        name: userdata.name,
        mark: userdata.highestMarks
    }

    allUsers = (allUsers && allUsers.length > 0) ? allUsers.filter((u) => u.name != userdata.name) : [];
    allUsers.push(myuser);
    allUsers = allUsers.sort((a, b) => b.mark - a.mark);

    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("user", JSON.stringify(userdata));
    userHighestMarks.innerHTML = `Highest Marks ${highestMarks}`;
    gohome.onclick = () => {
        homeContainer.style.display = "block";
    }


}

function showRanking() {

    // name marks rank
    let names = document.querySelector("#names");
    let marks = document.querySelector("#marks");
    let ranks = document.querySelector("#ranks");


    allUsers && allUsers.length > 0 && allUsers.forEach((user, ind) => {

        let name = document.createElement("div");
        let mark = document.createElement("div");
        let rank = document.createElement("div");
        if (user.name == userdata.name) {
            name.style.border = '1px solid green';
            name.style.backgroundColor = '#45a049';
            name.style.color = 'white';

        }
        name.innerHTML = user.name == userdata.name ? `${user.name} (You)` : user.name;
        mark.innerHTML = user.mark;
        rank.innerHTML = ind + 1;

        names.appendChild(name);
        marks.appendChild(mark);
        ranks.appendChild(rank);

    })

}

showRanking();
playagain.onclick = () => {
    quizContainer.style.display = "block";
    startQuiz();
};