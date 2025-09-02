
const inputs = document.querySelectorAll(".subject");
const submitBtn = document.querySelector("#submitHandler");

let totalMark = 0;
let totalObtainMarks = 0;
let division = "";
let Persentage = "";
let failCount = 0;
let results = new Array();


// console.log(submitBtn)

const subjectValidations = [
    {
        name: "Hindi",
        total: 100,
        passingMark: 33,
        dis: 70,
    },
    {
        name: "English",
        total: 100,
        passingMark: 38,
        dis: 85,
    },
    {
        name: "Maths",
        total: 100,
        passingMark: 45,
        dis: 75,
    },
    {
        name: "Science",
        total: 100,
        passingMark: 28,
        dis: 90,
    },
    {
        name: "SocialScience",
        total: 100,
        passingMark: 40,
        dis: 65,
    },
    {
        name: "Sanskrit",
        total: 100,
        passingMark: 42,
        dis: 72,
    },
]




submitBtn.addEventListener("click", () => {

    if (results.length < 6) {
        // alert("all fields must required");
        showError()
        return;
    }

    totalMark = 0;
    failCount = 0;
    totalObtainMarks = 0;


    totalMark = results.reduce((sum, subject) => sum + subject.total, 0);
    console.log(totalMark);
    totalObtainMarks = results.reduce((sum, subject) => sum + subject.obtain, 0);
    failCount = results.reduce((count, subject) =>
        count + Number(subject.obtain < (subjectValidations.find((ele) => ele.name == subject.name)).passingMark), 0
    );
    // console.log(failCount); 
    Persentage = Math.round((totalObtainMarks / totalMark).toFixed(3) * 100);

    if (Persentage < 40) {
        division = "III";
    }
    else if (Persentage >= 40 && Persentage <= 59) {
        division = "II";
    }
    else {
        division = "I";
    }

    console.log(totalMark, totalObtainMarks, Persentage, division, failCount);
    showResult();
    document.querySelector(".subjectForm").classList.add("Deactive");
    document.querySelector(".ResultContainer").classList.add("active");

})

inputs.forEach((element) => {
    element.addEventListener("change", (event) => {
        console.log(event.target.value.trim().length, "length");
        // if(event.)
        if (event.target.value == "" || event.target.value.trim().length == 0) {
            console.log("no value");
            results = results.filter(e => e.name != event.target.name);
            return;
        }

        if (isValid(event.target.value, event.target.name)) {


            document.querySelector(`#${event.target.name}`).style.display = "none";
            let subjectName = event.target.name;
            let obtainMarks = Number(event.target.value);
            let subjectDetails = subjectValidations.find((element) => element.name == subjectName);

            let result = {};

            result.Persentage = (obtainMarks / subjectDetails.total * 100);
            result.name = subjectName;
            result.total = subjectDetails.total;
            result.obtain = obtainMarks;
            result.supply = (obtainMarks < subjectDetails.passingMark);
            result.passingMark = subjectDetails.passingMark;
            result.dis = obtainMarks >= subjectDetails.dis ? "A+" : obtainMarks < subjectDetails.passingMark ? "Supply" : ""
            results.push(result);
            console.log(result);
        }
        else {

            event.target.value = ""
        }

    });
})

function isValid(value, name) {




    let num = Number(value);
    console.log(num, Number.isNaN(num));
    const element = document.querySelector(`#${name}`);
    console.log(value, value.trim());

    if (value.length > 1 && value[0] == '0') {
        element.innerText = "*Please Provide a integer value*"
        element.style.display = "block";
        return;
    }


    if (Number.isNaN(num)) {
        element.innerText = "*Please Provide a integer value*"
        element.style.display = "block";
        // alert("Please Provide a integer value");
        return false;
    }
    else if (num > 100 || num < 0) {
        element.innerText = "*Please Enter a number between 0 to 100*"
        element.style.display = "block";
        // alert("Please Enter a number between 0 to 100");
        return false;
    }

    return true;
}


function showResult() {
    console.log("calling show result");


    const ResultContainer = document.querySelector(".ResultContainer");
    ResultContainer.classList.add("active");

    results.forEach((result) => {
        let divParent = document.createElement("tr");
        let divChild1 = document.createElement("td")
        let divChild2 = document.createElement("td")
        let divChild3 = document.createElement("td")
        let divChild4 = document.createElement("td")

        divChild1.innerText = result.name;
        divChild2.innerText = result.total;
        divChild3.innerText = result.obtain;
        divChild4.innerText = result.dis;

        divParent.append(divChild1);
        divParent.append(divChild2);
        divParent.append(divChild3);
        divParent.append(divChild4);

        ResultContainer.append(divParent);
    })

    let divParent = document.createElement("tr");
    let divChild1 = document.createElement("td")
    let divChild2 = document.createElement("td")
    let divChild3 = document.createElement("td")

    divChild1.innerText = totalMark;
    divChild2.innerText = totalObtainMarks;
    divChild3.innerText = "Total";

    divParent.append(divChild3);
    divParent.append(divChild1);
    divParent.append(divChild2);

    ResultContainer.append(divParent);


    let divisionDiv = document.createElement("div");
    divisionDiv.classList.add("Division");
    divisionDiv.innerText = `Division : ${Persentage}% / ${division} `;

    let resultDiv = document.createElement("div");
    resultDiv.classList.add("Status")
    console.log("failcount", failCount,);

    resultDiv.innerText = `Result : ${(failCount >= 3) ? "Fail" : failCount <= 2 && failCount >= 1 ? "Supply" : "Pass"}`;
    ResultContainer.append(divisionDiv);
    ResultContainer.append(resultDiv);
}

function showError() {

    let AvailableField = results.map((e) => e.name);
    const subjects = ["Hindi", "English", "Maths", "Science", "SocialScience", "Sanskrit"];

    console.log(AvailableField);

    if (AvailableField.length === 0) {
        subjects.slice(0, 1).forEach((s) => {
            console.log(s);
            document.querySelector(`#${s}`).style.display = "block";
            return;
        });
    } else {
        let res = subjects.filter((e) => !AvailableField.find((field) => field === e));
        console.log(res);

        res.slice(0, 1).forEach((s) => {
            console.log(s);
            document.querySelector(`#${s}`).style.display = "block";

        });
    }
}