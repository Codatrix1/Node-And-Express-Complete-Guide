// started operating system process
console.log("First");

// Async Action
setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");
// completed and exited operating system process
