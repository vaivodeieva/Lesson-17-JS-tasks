// 3. assign a number to a variable. 

//     Print out "Fizz" if the number is divisible without reminder by 2
//     Print out "Bazz" if the number is divisible without reminder by 3
//     Print out "Fizz Bazz" if the number is divisible without reminder by 2 and 3
//     Print out the number if none of above apply


const number = 16;

if (((number % 2) === 0) && ((number % 3) === 0)) {
    console.log('Fizz Bazz');
}


else if ((number % 2) === 0) {
   console.log('Fizz');
} 


else if ((number % 3) === 0) {
    console.log('Bazz');

}  else {
    console.log(number);
}


///:)


