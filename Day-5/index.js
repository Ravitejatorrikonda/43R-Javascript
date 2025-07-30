/**
 * Conditional statements in javascript
 * conditional statements are exicute the block of block of code 
 * 
 * type:-
 * simple if
 * if else
 * ladder if
 * 
 * simple if sy:-
 * if(condition){
 * //statements
 * }
 * 
 */


// var maheshlaptop=true
// if(maheshlaptop){
//     console.log("Zoom Joined")
// }
// if(!maheshlaptop){
//     console.log("not attended")
// }
// debugger;
// var grade="B"
// var score=75;

// if(grade==="A"||grade==="B" && score>=75 ){
//     console.log("eligible")
// }
// else{
//     console.log("Not Eligible")
// }

// var age=24;
// if(age<13){
//     console.log("child")
// }
// else if(age>=13 && age<=18){
//     console.log("teen")
// }
// else{
//     console.log("adult")
// }

// var score=110;

// if(score>=90 && score<=100 ){
//     console.log("A");

// }
// else if(score>=80 && score <90){
//     console.log("B");

// }
// else if(score>=70 && score<80){
//     console.log("C");

// }
// else if(score < 70 && score>= 0){
//     console.log("fail");

// }
// else{
//     console.log("Invalid Marks");

// }

// var persion = "indian"
// if (persion == "indian") {
//     var gender = "Male"
//     if (gender == "Male") {
//         console.log("gender matched")
//     } else {
//         console.log("Gender Not matched")
//     }


// } else {
//     console.log("Not a Indian");

// }

/**
 * sy:-
 * switch(condition){
 * case1 value1:
 * //statements
 * break;
 * case2 value2:
 * //statements
 * break;
 * default:
 * //statement;
 * 
 * 
 * }
 * 
 */

var day = 4;
switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday")
        break;

    default:
        console.log("Invalid");
        
        break;
}