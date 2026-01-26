// Bài 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
};

console.log(car.year);

// Bài 2
const person = {
    name: "Noah",
    address: {
        "street": "Phan Dang Luu",
        "city": "Da Nang",
        "country": "Viet Nam"
    }
}
console.log(person.address.street);

// Bài 3

const student = {
    name: "Noah",
    grade: {
        "math": 1,
        "english": 9
    }
}
console.log(student["grade"]["math"]);

// Bài 4

const settings = {
    volumn: 50,
    brightness: 100
}
settings.volumn = 60;

console.log(settings);

// Bài 5
const bike = {
}
bike.color = "black"
console.log(bike);

// Bài 6
const employee = {
    name: "Noah",
    age: 31
}
delete employee.age;
console.log(employee);

// Bài 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

console.log(school);