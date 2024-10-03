let total = prompt('How many km are left to go?');

// Convert the input to a number
total = Number(total);

// Check the conditions and print the appropriate response
if (total > 100) {
  console.log("We still have a bit of driving left to go");
} else if (total > 50 && total <= 100) {
  console.log("We'll be there in 5 minutes");
} else {
  console.log("I'm parking. I'll see you right now");
}