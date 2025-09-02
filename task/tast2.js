let fields = document.getElementsByTagName("input");
let submitBtn = document.getElementById("submitBtn");

let errors = {
    password: {
        msg: "Password must be at least 8 characters long, include at least one lowercase letter, one uppercase letter, and one digit!"
    },
    email: {
        msg: "Please enter a valid email address!"
    },
    name: {
        msg: "Name Can contains only lowercase or uppercase letters & max length 10"
    }
};

function isValidPassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

function isValidEmail(email) {
    const regex =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;  
    return regex.test(email);
}

function isValidName(name){
    const regex =/^[a-z A-Z]{1,20}$/;
    return regex.test(name);
}


function submitHandler(e) {
    e.preventDefault();
    let formValid = true;

    let data = {
        name:"",
        email:"",
        password:"",
    }

    for (let element of fields) {
        let name = element.name;
        let value = element.value.trim();

        if (name === "email" && !isValidEmail(value)) {
            showError(name, value.length == 0 ? "this is field is requird":errors[name].msg);
            formValid = false;
        } else if (name === "password" && !isValidPassword(value)) {
            showError(name,value.length == 0 ? "this is field is requird":errors[name].msg);
            formValid = false;
        } else if (name === "name" &&  !isValidName(value)) {
            showError(name,value.length == 0 ? "this is field is requird":errors[name].msg);
            formValid = false;
        } else {
            data[name] = value;
            clearError(name);
        }
    }

    if (formValid) {
        if(localStorage.getItem(data.email)){
            alert("email is already ragisterd");
            return;
        }

        console.log(data);
        localStorage.setItem(data.email,JSON.stringify(data));
        alert("Signup successful!");
        window.location.href = "./login.html";

    }
}

function loginhandler(e){
    e.preventDefault();
    let formValid = true;

    let data = {
        email:"",
        password:"",
    }

    for (let element of fields) {
        let name = element.name;
        let value = element.value.trim();

        if (name === "email" && !isValidEmail(value)) {
            showError(name, value.length == 0 ? "this is field is requird":errors[name].msg);
            formValid = false;
        } else if(name === "password" && value == ""){
            formValid = false;
            showError(name,value.length == 0 ? "this is field is requird":errors[name].msg);
        }
         else {
            data[name] = value;
            clearError(name);
        }

    }
    if(formValid){

        let existdata = JSON.parse(localStorage.getItem(data.email));
        if(!existdata){
            alert("email or password does not match");
        }

        if(existdata[email] != data[email] || existdata.password != data.password){
            alert("email or password does not match");
        
            return;
        }
        console.log("existdata",existdata);
        localStorage.setItem("user",JSON.stringify());

        alert("login succesfull"); 

        window.location.href = "./home.html";
        
    }

}
for (let element of fields) {
    element.addEventListener("input", (e) => {
        let name = e.target.name;
        let value = e.target.value.trim();

        if (name === "email" && isValidEmail(value)) {
            clearError(name);
        } else if (name === "password" && isValidPassword(value)) {
            clearError(name);
        } else if (name === "name" && value !== "") {
            clearError(name);
        }
    });
}

function showError(field, message) {
    let errorElement = document.getElementById(`${field}Error`);
    errorElement.textContent = message;
}

function clearError(field) {
    let errorElement = document.getElementById(`${field}Error`);
    errorElement.textContent = "";
}

