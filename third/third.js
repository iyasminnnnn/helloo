// task1
// let id=+prompt("Enter product id:");
// switch(id){
//     case 1:
//         alert('Available 10 pcs')
//         break;
//     case 2:
//          alert ('Available 256 pcs.');
//          break;
//     case 3:
//         alert ('Available 53 pcs.');
//         break;
//     case 4:
//           alert ('There are 3 available.');
//           break;
//     default:
//         alert('Out of stock')
// }
// task2
// let month=+prompt("Enter the number of month:");
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Enter a number from 1 to 12")
// }
// task3
let date=prompt("Enter date in form 2009.05.19:");
let a=date.split(".");
let year=a[0];
let month=a[1];
let firstm=month[0];
let secondm=month[1];
let day=a[2];
let firstd=day[0];
let secondd=day[1];
if(a.length!=3){
    console.log("Structure is wrong");
}
else{
if(year.length==4){
    if(month>0 && month<=12){
        if(day>=1 && day<=31){
            if(firstm==0){
 switch(secondm){
                 case "1":
                    month="January"
                    break;
    case "2":
        month="February"
        break;
    case "3":
        month="March"
        break;
    case "4":
        month="April"
        break;
    case "5":
        month="May"
        break;
    case "6":
        month="June"
        break;
    case "7":
         month="July"
        break;
    case "8":
         month="August"
        break;
    case "9":
         month="September"
        break;
            }
            }
            else{
            switch(month){
     case "10":
        month="October"
        break;
    case "11":
         month="November"
        break;
    case "12":
         month="December"
        break;
            }
        }
    if(firstd==0){
        switch(secondd){
            case "1":
                day="1";
                break;
            case "2":
                day="2";
                break;
            case "3":
                day="3";
                break;
            case "4":
                day="4";
                break;
            case "5":
                day="5";
                break;
            case "6":
                day="6";
                break;
            case "7":
                day="7";
                break;
            case "8":
                day="8";
                break;
            case "9":
                day="9";
                break;
        }
    }
            console.log(day+" "+month+" "+year+"-cu il")
        }
    }
    else{
        console.log("Structure is wrong")
    }
}
else{
    console.log("Structure is wrong")
}
}
