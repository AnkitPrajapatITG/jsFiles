const person = {
    fullName: function(city,gender) {
      return this.firstName + " " + this.lastName + city + " " + gender;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  person.fullName.call(person2);

  console.log(person.fullName.call({firstName:"abc",lastName:"123"},"dewas","male"));