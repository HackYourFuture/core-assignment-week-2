import promptSync from "prompt-sync";
const prompt = promptSync();

const input_year = prompt("Enter a year(1-9999):  ");
const year = Number(input_year);

if (!Number.isInteger(year) || year < 1 || year > 9999) {
  console.log("Invalid year!");
} else {
  const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  if (isLeap) {
    console.log("Yes, " + year + " is a leap year");
  } else {
    console.log("No, " + year + " is not a leap year");
  }
}
