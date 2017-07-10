"use strict"
var readlineSync = require('readline-sync');

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

let currency = {
  dollars: 1,
  quarters: 0.25,
  dimes: 0.10,
  nickels: 0.05,
  pennies: 0.01
}

function change(c, a) {
  let money = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }
  let fn = function(c, a) {
    let diff = (amount - cost);
    console.log(`Remaing amount ${diff.toFixed(2)}`)

    if (isInt(diff)) {
      money.dollars = diff;
    } else {
      let decimal = diff - Math.trunc(diff)

      if (decimal > 0) {
        money.dollars = Math.floor(diff)
      }

      if (decimal > 0) {
        money.quarters = Math.floor(decimal / currency.quarters);
        decimal = decimal - currency.quarters * money.quarters
      }

      if (decimal > 0) {
        money.dimes = Math.floor(decimal / currency.dimes);
        decimal = decimal - currency.dimes * money.dimes
      }

      if (decimal > 0) {
        money.nickels = Math.floor(decimal / currency.nickels);
        decimal = decimal - currency.nickels * money.nickels
      }

      if (decimal > 0) {
        money.pennies = Math.floor(decimal / currency.pennies);
        decimal = decimal - currency.pennies * money.pennies
      }
    }
  }(c, a)
  return money;
}

console.log(`Change Return Program`)
var cost = readlineSync.question('Cost: ')
var amount = readlineSync.question('Amount Given: ')

let money = change(cost, amount);

console.log(`Cashier should refund ${money.dollars} dollars, ${money.quarters} quarters, ${money.dimes} dimes, ${money.nickels} nickels, and ${money.pennies} pennies.`);
