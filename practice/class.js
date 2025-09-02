 class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2005);

  console.log(myCar.age())

  class Person {
    constructor(name, year) {
      this.name = name;
      this.year = new Date(year);
    }
  
    getAge() {
      const now = new Date();
      let age = now.getFullYear() - this.year.getFullYear();

      if (now.getMonth() < this.year.getMonth() || 
          (now.getMonth() === this.year.getMonth() && now.getDate() < this.year.getDate())) {
        age--;
      }
      return age;
    }
  }
  
  class AdditionInformation extends Person{
    // super();
    constructor(name,year,role,mobile,gender){
      super(name,year);
      this.role = role;
      this.mobile = mobile;
      this.gender = gender;
    }
    getFullInfo(){
      let info = {
        name:this.name,
        age:this.getAge(),
        gender:this.gender,
        mobile:this.mobile
      }
      return info;
    }
  }

  let p1 = new Person("anuj", "2002-10-20");

  let obj = new AdditionInformation("rohan","2002-10-20","Tester","3439","male");

  console.log(obj.getFullInfo())
  
  console.log(p1.name, p1.year, p1.getAge());
  
  let p2 = new Person("ankit","2005-01-24");

  console.log(p2.name, p2.year, p2.getAge());

  let p3 = new Person("kratik","2000-08-25");

  console.log(p3.name, p3.year, p3.getAge());
  

  function myFunc(){
    console.log(this);
  }

  let vr = myFunc;

  console.log(vr.call({name:"abc"}))