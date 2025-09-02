const mp = new Map();

mp.set(1,"Apple");
mp.set(2,"Banana");
mp.set(3,"Banana");

console.log(mp.keys());

console.log(typeof  mp)

console.log(mp instanceof Map);

console.log(mp.entries());

{
    let arr = [1,2,3,4,5,6,7,8,1,1,2,3,3,3,3,4,44];
    // let entry = [{1:"banana"}];
    let mp = new Map();

    arr.forEach((ele) => {
        mp.set(ele,mp.get(ele) + 1 || 1);
    });

    console.log(mp.entries());

}


let arr = [
    {
        name:"ram",
        income:1000
    },
    {
        name:"rohan",
        income:14000
    },
    {
        name:"shyam",
        income:100
    },
    {
        name:"ramu",
        income:9000
    },
    {
        name:"ramesh",
        income:5000
    },
    {
        name:"rajesh",
        income:100000
    },
];



// let result = Map.groupBy(arr,(e) => {
//     return e.income > 5000 ? "rich" : "poor";
// });

// for(let e of result){
//     console.log(e);
// }

// console.log("rich persons are :")
// for(let p of result.get("rich")){
//     console.log(p.name ," ",p.income);
// }
// console.log("poor persons are :")
// for(let p of result.get("poor")){
//     console.log(p.name ," ",p.income);
// }

// let obj = {
//     name:"abc",
//     age:44,
//     class:12,
//     height:14.3
// };

// let anotherOBj = new Object();

// anotherOBj = Object.entries(anotherOBj);

// const {age,name} = obj;


// // for(key in res){
// //     console.log(key);
// // }

// console.log(name,age);

// {
// let arr = [
//     "rohan",
//     22,
//     false
// ]

// const [name,age,pass] = arr;

// console.log(name,age,pass)
// }


let obj = {
    name:"abc",
    age:44,
    class:12,
    height:14.3
};


console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.hasOwn(obj,"age"));
// console.log(Object.bind)

for(let [key,val] of Object.keys(obj)){
    console.log(key,val);
}

console.log(mp.keys())

for(let key of mp.keys()){
    console.log(mp.get(key))
}