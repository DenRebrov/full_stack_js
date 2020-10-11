const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]

function averageSalary(array) {
    return array.reduce(function(sum, element) {
        return sum + Number(element.salary) / array.length
    }, 0);
}

function sortBySalary(array) {
    return array.sort(function(a, b) {
        return a.salary - b.salary
    });
}

function filterSalaryAge(array, salaryValue, ageValue) {
    return array.filter(function(element) {
        return element.salary > salaryValue && element.age > ageValue
    });
}

console.log(averageSalary(employees));
console.log(sortBySalary(employees));
console.log(filterSalaryAge(employees, 4500, 25));
