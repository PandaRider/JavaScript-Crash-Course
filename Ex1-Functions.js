// Exercise 1: Rewrite the function using '?' or '||'
// 
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// 
// Rewrite it, to perform the same, but without if, in a single line.
// 
// Make two variants of checkAge:
// 1) Using a question mark operator '?'
// 2) Using OR ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log('Do you have your parents permission to access this page?');
  }
}

checkAge(34);