// Variables for local theme park requirements in order to be eligible to ride rollercoaster.

// Rider must be at least 42 inches tall in order to ride (min_height >= 42).
var min_height = 42;
// Rider must be over the age of 10 (min_age >= 10).
var min_age = 10;


if (min_height >= 42) {
    console.log("Get on that ride, kiddo!");
} else {
    console.log("Sorry kiddo. Maybe next year");
}


// Stretch Feature 1
if (min_height >= 42 || min_age >= 10) {
    console.log("Get on that ride, kiddo!");
} else {
    console.log("Sorry kiddo. Maybe next year");
}

// Stretch Feature 2
if (min_height >= 42 && min_age >= 10) {
    console.log("Get on that ride, kiddo!");
} else {
    console.log("Sorry kiddo. Maybe next year");
}