// task1
// let user={
//     name:"Yasmin",
//     gender:"Female",
//     birthday:"10.07.2008"
// }
// console.log(user.birthday);
// task2
// let user={
//     name:"Yasmin",
//     gender:"Female",
//     birthday:"10.07.2008"
// }
// delete user.birthday
// user.age="17"
// console.log(user);
// task3
// let user={
//     name:"Yasmin",
//     gender:"Female",
//     birthday:"10.07.2008"
// }
// delete user.birthday
// user.age="17"
// newAge=prompt("Enter age:")
// const setAge=(newAge)=>{
//     user.age=newAge
// }
// getYearsBeforeRetirement=()=>{
//     return 65-user.age
// }
// setAge(newAge)
// console.log(user.age);
// console.log(getYearsBeforeRetirement());
// task4
// let client={
//     fullName:"Someone",
//     creditLimit:100,
//     balance:2000,
//     percentOfMininmumPayment:"10%"
// }
// const getBalance=()=>{
//     if(client.balance>0){
//      console.log("Your balance is " + client.balance);
//     }
//     else{
//      console.log("Your debt is " + Math.abs(client.balance))
//     }
// }
// let minPayment=()=>{
//     if(client.balance<0){
//     let minimum=Math.abs(client.balance)*parseInt(client.percentOfMininmumPayment)/100
//     console.log("Your min payment is: " + minimum);
//     }
//     else{
//         console.log("You don't have any debt")    
//     }
// }
// let withdraw=(decr)=>{
// for(i=0;i<m;i++){
//      if(client.balance + client.creditLimit < decr){
//             console.log("Not enough funds");
//         }
// else{
//     client.balance-=decr
//     console.log("New balance is: "+ client.balance);
// }
// }
// }
// let refill=(incr)=>{
//     for(i=0;i<n;i++){
//         client.balance+=incr
//     }
//     console.log("Your new balance is:"+client.balance);
    
// }
// decr=+prompt("Enter the decrement amount:")
// incr=+prompt("Enter the increment amount: ")
// m=+prompt("How many times do you want to decrease your balance:")
// n=+prompt("How many times do you want to increase your balance:")
// getBalance()
// minPayment()
// withdraw(decr)
// refill(incr)
// task5
// let calculator={
//     total:0,
//     sum:
//     function sum(num1,num2){
//         var result=num1+num2
//         this.save(result)
//         return result
//     },
//     differ:
//     function differ(c){
//         let result=this.total-c
//         this.save(result)
//         return result
//     },
//        product:
//     function productt(b){
//         let result=this.total*b
//         this.save(result)
//         return result
//     },
//        division:
//     function divide(d){
//         let result=this.total/d
//         this.save(result)
//         return result
//     },
//     save:
//     function saveResult(result){
//         let saave=prompt("Do you want to save:yes or no")
//         if (saave.toLowerCase()==="yes"){
//             this.total=result
//             console.log("Total saved:"+this.total);      
//         }
//         else{
//             this.total=0;
//             console.log("Your total was reseted to 0");
//         }
//     }
// }
// let want=prompt("Do you want to find the sum:yes or no");
// if(want.toLowerCase()==="yes"){
//     let num1=+prompt("Enter first number");
//     let num2=+prompt("Enter the second number");
//     calculator.sum(num1,num2)
// }
//   let want1=prompt("Do you want to find the difference:yes or no");
// if(want1.toLowerCase()==="yes"){
//     let c=+prompt("Enter the number");
//     calculator.differ(c)
// }  

// let want2=prompt("Do you want to find the product:yes or no");
// if(want2.toLowerCase()==="yes"){
//     let b=+prompt("Enter the number");
//     calculator.product(b)
// }

//     let want3=prompt("Do you want to find the division:yes or no");
// if(want3.toLowerCase()==="yes"){
//     let d=+prompt("Enter the number");
//     calculator.division(d)
// }

