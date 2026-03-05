// task1
// let num=+prompt("Enter the two-digit number:")
// while(num<100){
//     num+=7
// }
// console.log(num);
// task2
// let N=+prompt("Enter the number of repeats:")
// if(N>0){
//     while(N>0){
//     console.log("I know how to use cycles")
//     N--
// }
// }
// else{
//     console.log("Enter the positive number")
// }
// task3
// 1 solution
// let initial=90
// while(initial<1000){
//     initial+=10;
//     console.log(initial)
// }
// 2 solution
// let initial1=90
// for(let i=initial1;i<1000;i+=10){
//     console.log(i)
// }
// task4
// let s=0;
// let initial=10;
// while(initial<100){
//   if(initial%2==1){
//     s=s+initial
//   }
//   initial++
// }
// console.log(s)
// task 5
// let number=+prompt("Enter a number:")
// let s=0
// let init=100
// for(i=init;i<1000;i++){
//     if(i%number==0){
//         s=s+i
//     }
// }
// console.log(s);
// task6
// let num = +prompt("Enter a number:");

// for (let i = num; i >= 2; i--) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break; 
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
// task7
// let p=1;
// for(let i=1;i<=10;i++){
//     p*=i
// }
// console.log(p);
// task8
// let text=prompt("Enter the text:")
// let arr=text.split("")
// let p=arr.length
// for(let i=0;i<Math.floor(p/2);i++){
//     let k=arr[i]
//     arr[i]=arr[p-1-i]
//     arr[p-1-i]=k  
// }
// arr=arr.join("")
// console.log(arr)
// task9
// let text=prompt("Enter the text with . : ")
// for(let i=0;i<text.length-1;i++){
//     if(text[i]=="."){
//         console.log(i)
//     }
// }
// task10
// let pass=prompt("Enter the pass:")
// let k=true
// for(let i=0;i<pass.length;i++){
//     if(pass[i]>="0" && pass[i]<="9"){
//         k=false
//         break
//     }
// }
// if(k==false){
//     console.log("There is a num")
// }
// else{
//     console.log("There is no num")
// }
