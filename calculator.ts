#! /usr/bin/env node

// SHABANG

import { log } from "console";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message:"Enter first number", type:"number",  name:"firstnumber"},
{ message:"Enter second number", type:"number", name:"secondnumber"},

{ 
message:  "Select one of the operators to perform opiration",
type:"list",
name:"opearator",
choices: ["Addition","Substract","Multiply","Division"],
}

])

console.log(answer);

// conditional statement:

if (answer.opearator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);

} else if  (answer.opearator === "Subtract") {
    console.log(answer.firstnumber - answer.secondnumber);

}  else if  (answer.opearator === "Multiply") {
    console.log(answer.firstnumber * answer.secondnumber);
    
}  else if  (answer.opearator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}  else {
    console.log ("please Enter the Nnmber");
}
