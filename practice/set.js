let s = new Set([1, 2, 3, 4, 5]);
console.log(s);
s.add(5)
console.log(s);
s.add(6)
console.log(s);
s.delete(1)
console.log(s);
console.log(s.has(5))
console.log(s.has(1))

{
    let s = new Set([{ "name": "ram" }]);
    console.log(s);
    let obj = {
        "name": "ram"
    };
    s.add(obj);
    s.delete({
        "name": "ram"
    })
    console.log(s)

    s.forEach((val => {
        console.log(val.name)
    }))

    {
        let s = new Set([1, 12, 3, 4]);

        console.log(s.has(12));

        let res = s.entries();

        console.log(res);

        res = s.keys();

        console.log(res);
        
        s.add("str");

        console.log(s.size);

        // s.clear();

        console.log(s);
        
        console.log(s.delete(4));
        console.log(s);



    }

}