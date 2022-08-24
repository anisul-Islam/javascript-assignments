/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1

const student = {
    name: "Lakshmi",
    age: 30,
    languages: ["Telugu" , "English"]
};
for (const property in student){
    console.log(`${property}: ${student[property]}`);
}

//console.log(student);