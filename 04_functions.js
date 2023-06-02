// 2 types of function : (Normal Function) (Arrow Function)

// Normal Function 
function fullname(fname, lname) {
    console.log("Hello " + fname + lname);
}

// Arrow Function
const fullName = (fname, lname) => {
    console.log("Hello " + fname + lname);
}

fname = "Jay ";
lname = "Joshi";
fullname(fname, lname);
fullName(fname, lname);