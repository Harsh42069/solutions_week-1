/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

/*
function calculateTime(n) {
    return 0.01;
}
*/
function calculateTime(n) {
    var startTime = performance.now(); // Get the start time in milliseconds
    
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    
    var endTime = performance.now(); // Get the end time in milliseconds
    var elapsedTime = (endTime - startTime) / 1000; // Calculate elapsed time in seconds
    
    return elapsedTime; // Return the elapsed time
}

// Test the function with different values of n
console.log("Time taken for sum from 1 to 100: " + calculateTime(100) + " seconds");
console.log("Time taken for sum from 1 to 100000: " + calculateTime(100000) + " seconds");
console.log("Time taken for sum from 1 to 1000000000: " + calculateTime(1000000000) + " seconds");

