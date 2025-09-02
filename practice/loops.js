/* 
JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
*/

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


{
    let arr = ['mango', 'apple', 'banana', 'papaya'];

    for (i = 0; i < arr.length; i++) {
        // console.log(arr.at(i));
    }

    for (i in arr) {
        // console.log(arr.at(i));
    }

    for (i of arr) {
        // console.log(i);
    }

    // arr.forEach((value) => console.log(value));

    {
        let i = 0;

        while (arr[i]) {
            console.log(arr.at(i));
            i++;
        }

        i = 0;

        do{
            console.log(arr.at(i));
            i++;

        }while (i<arr.length)
    }

}


{
    let obj = {
        "a1" : 1,
        'a2' : 2,
        'a3' : 3
    };

    for(key in obj){
        // console.log(obj[key]);   
    }

    for(value of Array(obj).values()){
        console.log(value);
    }
}

setTimeout(() => {
    console.log("hello")
}, 5000);