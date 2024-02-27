'use strict';

// Important Note:
// Kindly use forEach loop instead of for in all of your solutions

// Resource:
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

//  Write a function that takes an array of numbers and increase the values by 10
//  
//  Input:
//  [20, 54, 89, 41]
//  Output:
//  [30, 64, 99, 51]
//  

const arrInc = (arr) => {
    let result = [];
    arr.forEach(element => {
        result.push(element + 10);
    });
    return result;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:

//  Write a function that takes an array of decimals and round every value to the closest value 
//  
//  Input:
//  [5.4, 5.5 ,6.7, 6.8] 
//  Output:
//  [5, 6, 7, 7]
// 
const roundDecimals = (arr) => {
    let tmp = [];
    arr.forEach(element => {
        tmp.push(Math.round(element));
    })
    return tmp;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// An owner of a factory wants to give a 100$ bonus for production department employees who worked *More than* 8 hours
// and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
// Input:
// let data = [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3000$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4000$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10,
//         salary: "4500$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3200$"
//     }
// ]
// 
// Output:
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

const employeesBonus = (arr) => {
    arr.forEach(element => {
        let num = Number(element.salary.replace(/\D/g, ""));
        if (element.workHours > 8) {
            num += 100;
            element.salary = `${num}$`;
        }
        else {
            num += 50;
            element.salary = `${num}$`;
        }
    });
    return arr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// Input:
// budget = 200$
// mouseArray = [35, 15, 75, 180, 150, 50]
// keyBoardArray = [5, 150, 35, 120, 75, 50, 100]
// 
// Output: 200

const mostExpensive = (budget, mouseArray, keyBoardArray) => {

  let budg = Number(budget.replace(/\D/g, ""));
  let target = 0;
  let arr = [];

  mouseArray.forEach(element => {
    keyBoardArray.forEach(e => {
      if (element+e <= budg) {
        if ((element + e) === budg) {
          target = element + e;
          arr.push(element);
          arr.push(e);
          arr.push(target);
        }
      }
    });
  });
   return arr;
}


// -------------------------------------------------------------------------------------------------------

module.exports = { arrInc, roundDecimals, employeesBonus, mostExpensive };