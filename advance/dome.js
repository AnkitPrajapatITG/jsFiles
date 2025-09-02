
let counter = 9;
let s = setInterval(() => {
    document.getElementById("demo").innerText = `your bulb will be activate after ${counter} seconds`;
    counter--;
}, 1000);



setTimeout(() => {
    
const ele = document.getElementById("bulb");
ele.setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
 clearInterval(s);
 document.getElementById("demo").innerText = `your bulb now activated`;

}, 10000);