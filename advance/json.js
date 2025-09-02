
fetch('emp.json')
  .then(response => console.log(response))  // Parse the JSON response
  .then(emp => {
    console.log(emp);  // Now you can use the data
  })
  .catch(error => console.error('Error loading JSON:', error));
