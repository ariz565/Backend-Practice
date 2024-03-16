function byLoop() {
  console.log("Start");

  for (let i = 0; i < 1000; i++) {
    // console.log(i); // Uncomment this line to log each iteration
  }

  console.log("End");
}

function bySetTimeout() {
  console.log("Timeout Start");

  // Asynchronous operation: This code schedules a task to log "Timeout End"
  // after approximately 6 seconds and continues execution without waiting.
  setTimeout(() => {
    console.log("Timeout End");
  }, 6000);
}

console.log("Hi");

// Synchronous execution (blocking): The byLoop function will be executed
// and block further code until it has finished all its iterations.
byLoop();

// Asynchronous execution (non-blocking): The bySetTimeout function will
// trigger its timeout but the rest of the code will continue.
bySetTimeout();

// Synchronous execution (blocking): Another call to byLoop, again blocking
// other code until its lengthy loop completes.
byLoop();
