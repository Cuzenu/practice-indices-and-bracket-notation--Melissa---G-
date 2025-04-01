/*
Instructions
You are managing a library system where books and movies are stored in a 2D
array, with each row representing a shelf, and each column representing an item
on that shelf.

Tasks
Make sure to write the code for each task using only bracket notation.

Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.
Task 2: Access and log all the elements in the array using bracket notation with numbers.
Task 3: Access and log all the elements in the array using bracket notation with variables as indices.
        Use the variables row and item.
Task 4: Write a loop that prints all the items on the second shelf.

*/

// Task 1: Create array with 9 books or movies
let libraryItems = [
    ["Inception", "Batman", "Interstellar"],                                // Shelf 1
    ["Death Note Vol 1", "Attack on Titan vol 1", "Demon Slayer vol 1"],    // Shelf 2
    ["Three Body Problem", "The Dark Forest", "Death's End"],                   // Shelf 3
];

// Task 2: Access and log all the elements in the array using bracket notation with numbers
console.log("Task 2 output:\n");
console.log(libraryItems[0][0]);         // Inception
console.log(libraryItems[0][1]);         // Batman
console.log(libraryItems[0][2]);         // Interstellar
console.log(libraryItems[1][0]);         // Death Note Vol 1
console.log(libraryItems[1][1]);         // Attack on Titan vol 1
console.log(libraryItems[1][2]);         // Demon Slayer vol 1
console.log(libraryItems[2][0]);         // Three Body Problem
console.log(libraryItems[2][1]);         // The Dark Forest
console.log(libraryItems[2][2]);         // Death's End

// Task 3: Access and log all the elements in the array using bracket notation with variables as indices
console.log("\nTask 3 output:\n");

for (let row = 0; row <3; row++) {
    for (let item = 0; item < 3; item++) {
        console.log(libraryItems[row][item]);
    }
}

// Task 4: Write a loop that prints all the items on the second shelf.
console.log("\nTask 4 output: items on shelf 2: \n");

for (let item = 0; item <3; item++) {              // Loops through items 0-2
            console.log(libraryItems[1][item]);    //Prints items 0-2 in row # 1
}