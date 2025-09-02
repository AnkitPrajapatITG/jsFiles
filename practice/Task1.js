// create a employee managament system which have functionality create employee 
// fields firstname , lastname , age ,mobile,role,yearsofexprience performenceRating, pramotionEligibility,calculateBonus,


function Employee(firstName, lastName, Age, mobile, role, yearOfExprience, performanceRating, yearlyLeavs) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.mobile = mobile;
    this.role = role;
    this.yearOfExprience = yearOfExprience;
    this.performanceRating = performanceRating;
    this.yearlyLeavs = yearlyLeavs;
    
    this.calculateSallary = function () {
        let sallary = 0;
        if (this.role == "Manager") {
            sallary += 90000;
            //based on exprience sallary increase 40% of base sallary * yearsOfexprience
            sallary += (((40 / 100) * sallary) * yearOfExprience);
        }
        else if (this.role == "HR") {
            sallary += 50000;
            //based on exprience sallary increase 30% of base sallary * yearsOfexprience
            sallary += (((30 / 100) * sallary) * yearOfExprience);
        }
        else if (this.role == "Developer") {
            sallary += 40000;
            //based on exprience sallary increase 20% of base sallary * yearsOfexprience
            sallary += (((20 / 100) * sallary) * yearOfExprience);
        }
        else if (this.role == "Tester") {
            sallary += 30000;
            //based on exprience sallary increase 10% of base sallary * yearsOfexprience
            sallary += (((10 / 100) * sallary) * yearOfExprience);
        }


        return sallary;
    }

    this.pramotionEligibility = function () {
        let isEligible = false;
        if (this.role == "Manager") {
            if (this.yearOfExprience > 5 && this.performanceRating > 8) {
                isEligible = true;
            }
        }
        else if (this.role == "HR") {
            if (this.yearOfExprience > 4 && this.performanceRating > 5) {
                isEligible = true;
            }
        }
        else if (this.role == "Developer") {
            if (this.yearOfExprience > 3 && this.performanceRating > 7) {
                isEligible = true;
            }
        }
        else if (this.role == "Tester") {
            if (this.yearOfExprience > 2 && this.performanceRating > 5) {
                isEligible = true;
            }
        }
        return `${this.getFullName()} is ${isEligible ? "Eligible" : "not Eligible "} for Pramotion`;
    }

    this.calculateBonus = function () {

        let bonusAmount = 0;

        if (this.role == "Manager") {
            if (this.performanceRating > 8) {
                bonusAmount = (10 / 100 * (this.calculateSallary()))
            }
        }
        else if (this.role == "HR") {
            if (this.performanceRating > 7) {
                bonusAmount = (8 / 100 * this.calculateSallary())
            }
        }
        else if (this.role == "Developer") {
            if (this.performanceRating > 5) {
                bonusAmount = (6 / 100 * this.calculateSallary())
            }
        }
        else if (this.role == "Tester") {
            if (this.performanceRating > 4) {
                bonusAmount = (4 / 100 * this.calculateSallary())
            }
        }

        return `${this.getFullName()} your bonus amount is : ${bonusAmount}`;

    }

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }

    this.DecreaseLeave = function (leaves) {
        if (this.yearlyLeavs == 0) {
            return "You have used all leaves";
        }
        this.yearlyLeavs = this.yearlyLeavs - 1;

        return `current available leaves ${this.yearlyLeavs}`;
    }
}

const emp1 = new Employee("Rahul", "kumar", 42, 4378939349, "Manager", 10, 9, 20);

console.log(emp1, "yearly salary is :", emp1.calculateSallary(), emp1.calculateBonus(), emp1.pramotionEligibility(), emp1.getFullName());

const emp2 = new Employee("Kishan", "kumar", 19, 454545455, "HR", 3, 8, 1);
console.log(emp2, "yearly salary is :", emp2.calculateSallary(), emp2.calculateBonus(), emp2.pramotionEligibility(), emp2.getFullName());

const emp3 = new Employee("Gopal", "kumar", 18, 444544645, "Developer", 3, 8, 0);
console.log(emp3, "yearly salary is :", emp3.calculateSallary(), emp3.calculateBonus(), emp3.pramotionEligibility(), emp3.getFullName());

const emp4 = new Employee("Rohan", "Yadav", 20, 553534353, "Tester", 9, 3, 5);
console.log(emp4, "yearly salary ", emp4.calculateSallary(), emp4.calculateBonus(), emp4.pramotionEligibility(), emp4.getFullName());