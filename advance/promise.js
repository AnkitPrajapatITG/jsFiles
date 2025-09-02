
let p = new Promise((resolve, reject) => {

    setTimeout(() => {
        return resolve("hey i am resolve");
    }, 5000);


});

p.then((e) => console.log(e)).catch(e => console.log(e));

// Correct usage of Promise.all
let arrayOfPromises = Promise.all([
    p,
    Promise.resolve("Immediate resolve")
]);

arrayOfPromises.then((results) => {
    console.log(results); // ["hey I am resolved", "Immediate resolve"]
}).catch(e => console.log(e));

async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create post');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

createPost();

("",
{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
})

{
    "", {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({

        })
    }
}