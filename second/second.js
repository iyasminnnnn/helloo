// task1
// let bookPrice=750;
// let bookAmount=14;
// console.log(bookPrice*bookAmount);
// ------------------------------------------------------------------------
// task2
// let kmhSpeed=75;
// let msSpeed=kmhSpeed/3.6;
// console.log(msSpeed)
// ------------------------------------------------------------------------
// task3
// let yourYear=prompt("Enter your birth year:");
// let yourMonth=prompt("Enter your birth month:");
// let yourMonthLetter=prompt("Enter the name of Month you were born in:");
// let yourDate=prompt("Enter your birth date:");

// let currentDay=23;
// let currentMonth=2;
// let currentYear=2026;

// let numOfYears=currentYear-yourYear-1;
// let months=12-yourMonth+currentMonth-1;

// let leapDay = 0;
// for (let y = yourYear; y < currentYear; y++) {
//     if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
//         leapDay++;
//     }
// }
// let days31 = 7 * numOfYears; 
// let febFix = 2 * numOfYears; 
// let youLive = leapDay + (numOfYears * 365) + (months * 30) + currentDay + (31 - yourDate)+2;
// if (yourMonthLetter=="January" || yourMonthLetter=="March" || yourMonthLetter=="May" || yourMonthLetter=="July" || yourMonthLetter=="August" || yourMonthLetter=="October" || yourMonthLetter=="December"){
//     youLive+=1;
// }
// console.log(youLive);
// ------------------------------------------------------------------------
// task4
// let num=12;
// console.log(num**5);
// console.log(num%3);
// ------------------------------------------------------------------------
// task5
// let firstName='Alan';
// let lastName='Turing';
// let  fullName=firstName+" "+lastName;
// console.log(`Sizin adınız ${fullName}. Tanışlığımıza çox şadam`)
// ------------------------------------------------------------------------
// task6
// let firstName1='Alan';
// let lastName1='Turing';
// let  fullName1=firstName1+" "+lastName1;
// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName1} ${lastName1}`)
// ------------------------------------------------------------------------
// task7
// let fullName2 = "Murad Orucov";
// let firstName2 = fullName2.slice(0, fullName2.indexOf(" "));
// let name1=firstName2.length;
// let firstName3=fullName2.slice(fullName2.indexOf(" ")+1);
// let name2=firstName3.length;
// console.log(`Adınız ${name1}, soyadınız ${name2}.`)
// ------------------------------------------------------------------------
// task8
// let fullName3 = "Murad Orucov";
// let firstName4 = fullName3.slice(0, fullName3.indexOf(" "));
// let firstName5=fullName3.slice(fullName3.indexOf(" ")+1);
// console.log(firstName4.charAt(0),firstName5.charAt(0));
// ------------------------------------------------------------------------
// task9
// let yourName=prompt("Enter your name:");
// let yourSurname=prompt("Enter your surname:");
// console.log(yourSurname,yourName);
// ------------------------------------------------------------------------
// task10
// let enterName=prompt("Enter your name:");
// console.log("Salam, "+enterName);
// ------------------------------------------------------------------------
// task11
// let variable1=prompt("Enter first variable:");
// let variable2=prompt("Enter second variable:");
// let summa=+variable1+ +variable2;
// let difference=variable1-variable2;
// let product=variable1*variable2;
// let quotient=variable1/variable2;
// console.log("Sum: "+summa);
// console.log("Difference: "+difference);
// console.log("Product: "+product);
// console.log("Quotient: "+quotient);
// ------------------------------------------------------------------------
// task12
// let num1=12345;
// let num2=98765;
// let product1=num1*num2;
// product1=product1.toString();
// console.log(product1.charAt(5))
// ------------------------------------------------------------------------
// task13
// 1) 1 setr kimi
// 2) -1 reqem kimi
// 3) NaN cunki true setrdi ve onun reqem qarsiligi yoxdu
// 4)2
// 5) 9px 4+5 
// 6) $45
// 7) 2
// 8) NaNpx
// 9) infinity
// 10) -95
// 11) -14
// 12) 1
// 13) NaN
// ------------------------------------------------------------------------
// task14
// let userNum=prompt("Enter a 4-digit number:");
// let sum=0;
// let n=userNum%10;
// sum+=n;
// let m=Math.floor(userNum/10)%10;
// sum+=m;
// let k=Math.floor(userNum/100)%10;
// sum+=k;
// let l=Math.floor(userNum/1000)%10;  
// sum+=l;
// console.log("The sum of the digits is: "+sum);
// ------------------------------------------------------------------------
// task15
// let userFull=prompt("Enter your name and surname:");
// console.log("Salam, "+userFull+"!");
// ------------------------------------------------------------------------
// task16
// let money=prompt("Enter the amount of money you have in format 590.90:");
// let wholeMoney=money.slice(0,money.indexOf("."));
// let money1=money.slice(money.indexOf(".")+1);
// console.log("You have "+wholeMoney+" manat and "+money1 +" qepik")
// ------------------------------------------------------------------------
// task17
// let mySalary=prompt("Enter your salary:")
// let finalSalary=mySalary- mySalary*0.13;
// console.log("Your final salary is:" +finalSalary)
// ------------------------------------------------------------------------
// task18
// let fullName4 = prompt("Enter your surname, name and your father's name:");
// let surnamee=fullName4.slice(0, fullName4.indexOf(" "));
// let nameFatherName=fullName4.slice(fullName4.indexOf(" ")+1);
// let myName=nameFatherName.slice(0,nameFatherName.indexOf(" "));
// let fatherName=fullName4.slice(fullName4.lastIndexOf(" ")+1);
// console.log(surnamee, myName.charAt(0)+".", fatherName.charAt(0)+".");
// ------------------------------------------------------------------------
// task19
// let value = 10;
// console.log(value === 10);
// console.log(value < 13);  
// console.log(value <= 10); 
// console.log(value != 20); 
// console.log(value !== 20);
// value=20;
// console.log(value === 10);
// console.log(value < 13);
// console.log(value <= 10); 
// console.log(value != 20); 
// console.log(value !== 20);
// ------------------------------------------------------------------------
// task20
// let myAge=prompt("Enter your age:");
// if (myAge>=18){
//     console.log("Access granted");
// }
// else{
//     console.log("Access denied");
// }
// ------------------------------------------------------------------------
// task21
// let a=prompt("Enter first number:");
// let b=prompt("Enter second number:");
// let c=prompt("Enter third number:");
// if (a===b || b===c ||a===c){
//     console.log("Please enter three different numbers.");
// }
// else{
// if(a>b && a>c){
//     if(b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// else if(b>a && b>c){
//     if(a>c){
//         console.log(a);
//     }
//     else{
//         console.log(c);
//     }
// }
// else if(c>a && c>b){
//     if(a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// }
// ------------------------------------------------------------------------
// task22
// let year=prompt("Enter a year:");
// if(year%4==0){
//     console.log("Its a leap year");
// }
// else{
//     console.log("Its not a leap year");
// }
// ------------------------------------------------------------------------
// task23
// let yourGender=prompt("Enter your gender with M(male) or F(female):");
// if(yourGender==="M" || yourGender==="m"){
//     let gender="Male";
//     console.log("Your gender is : "+gender)
// }
// else if(yourGender==="F" || yourGender==="f"){
//     let gender="Female";
//     console.log("Your gender is : "+gender)
// }