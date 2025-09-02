function showhint(text) {
    let xhttp = new XMLHttpRequest();

    xhttp.onload = function() { // Changed arrow function to regular function
        document.querySelector(".hintbox").innerHTML = this.responseText;
    }

    xhttp.open("GET", "./gethint.php?q=" + text, true);
    xhttp.send();
}
