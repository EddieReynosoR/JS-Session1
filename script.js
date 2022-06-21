console.log("Hello World");

//declaration
var userName;

//assign the value
userName="Eduardo";
let userAge = 19;

console.log(userName);

let userEmail="eduardo_3reynoso@hotmail.com" 

const url="eduardo@gmail.com";
// declaration and assign


//document.write("<p> Username: "+ userName+" </p><p>Email: "+ userEmail+"</p><p>Age: "+userAge+"</p><p>URL: "+ url +"</p>");

document.write(`
    <p>Name: ${userName}</p>
    <p>Age: ${userAge} </p>
    <p>Email: ${userEmail} </p>
    <p>URL: ${url}</p>
    `);

    //Exercise #1

    let nChildren, PartnerName, GeoLocation, JobTitle;

    nChildren = 3;
    PartnerName = "Eduardo";
    GeoLocation = "Tijuana";
    JobTitle = "Software Developer";


    document.write("You will be a "+JobTitle+" in "+ GeoLocation+", and married to "+ PartnerName + " with "+ nChildren + " kids. ");


    //Exercise #2

    let Name, email, password, age, country, salary;

    Name = "Eddie";
    email = "eduardo_3reynoso@hotmail.com";
    password="ep9130492";
    age = 19;
    country = "Mexico";
    salary = 1500;

    document.write(`
        <p>-Name: ${Name} </p>
        <p>-Email: ${email} </p>
        <p>-Password: ${password} </p>
        <p>-Age: ${age} </p>
        <p>-Country: ${country} </p>
        <p>-Salary (annual): ${salary*12} </p>
        `);