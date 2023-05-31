// object
const student = {
    Name : "Jay Joshi",
    Enrollment : "206270307037"
}

for(let i in student) {
    console.log(i + " : " + student[i])
}

// only for Arrays and Strings means for iterables
for(let i of "Jay") {
    console.log(i)
}