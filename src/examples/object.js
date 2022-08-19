// object, constructor, Method
const user1 = {
  id: 101,
  name: 'anisul',
  age: 32,
};
const user2 = {
  id: 101,
  name: 'anisul',
  age: 32,
};

console.log(user1.name);
console.log(user1.age);
console.log(user2.name);
console.log(user2.age);

function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;
  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

const student1 = new Student('Anisul Islam', 32, 3.92, ['bangla', 'english']);
student1.display();
