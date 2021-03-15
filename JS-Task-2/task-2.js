// 2. Assign your age to a variable. Print out the age group you are in. Age groups are as follows:
// 0-18 years
//19-30 years
//31-40 years
//41-50 years
//51 + years

const age = 100;

if (age <= 18) {
    console.log('Your age is somewhere between 0 and 18 years');
} else if (age > 18 && age <31) {
console.log('Your age is somewhere between 19 and 30 years');
} else if (age > 30 && age <41) {
    console.log('Your age is somewhere between 31 and 40 years');
} else if (age > 40 && age < 51) {
    console.log('Your age is somewhere between 41 and 50 years');
} else { 
    console.log('Your age is 51 yrs or more');
}
  

