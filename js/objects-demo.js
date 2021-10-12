/* eslint-disable object-shorthand */
/*
 * Object-demo 
 */


/*
 * First:
 * Let's define a simple object (with no properties or methods)
 */
/*
 * const blank = {};
 * console.log("Blank type", typeof blank);
 * console.log("Blank value", blank);
 */

/*
 * Net:
 * Let's define an object with PROPERTIES (attributes)
 * Objects are just a collection of name-value pairs
 * separated by commas
 */

/*
 * const book = {
 *     title: "1984",
 *     author: "George Orwell",
 *     isAvailable: false
 * }
 * console.log("Book type:", typeof book);
 * console.log("Book value:\n", book);
 */

/*
 * Next:
 * Let's add actions we can take on it
 * Note that these are properties too - defined as functions
 */

/*
 * const book = {
 *     title: "1984",
 *     author: "George Orwell",
 *     isAvailable: false,
 *     checkIn: function() { this.isAvailable = true; },
 *     checkOut: function() { this.isAvailable = false; }
 * }
 * console.log("Book type:", typeof book);
 * console.log("Book value:\n", book);
 */


/*
 * const book = new Object();
 * console.log("\n--- Define book");
 * console.log("Book type:", typeof book);
 * console.log("Book value:\n", book);
 */

/*
 * const data = {title: "1984", author: "George Orwell", isAvailable: false}
 * const book1 = new Object(data);
 * console.log("\n--- Define book1 with data");
 * console.log("Book1 type:", typeof book1);
 * console.log("Book1 value:\n", book1);
 */


   const dataFunc = {
       title: "1984",
       author: "George Orwell",
       isAvailable: false,
       checkIn: function() { this.isAvailable = true; },
       checkOut: function() { this.isAvailable = false; }
   };
 

  const book2 = new Object(dataFunc);
  console.log("\n--- Define book1 with data and functions");
  console.log("Book1 type:", typeof book2);
  console.log("Book1 value:\n", book2);  


/*
 * dot notation
 *  console.log(book2.author);
 *  book2.author = "G. Orweel";
 *  console.log(book2);
 */

// eslint-disable-next-line multiline-comment-style
// //Bracket notation 
// console.log(book2["author"]);
// book2["author"] = "G. Orweel";
// console.log(book2);

// eslint-disable-next-line multiline-comment-style
// //dot notation
// console.log(book2.isAvailable);
// book2.checkOut();
// console.log(book2);

// eslint-disable-next-line multiline-comment-style
// //Bracket notation
// console.log(book2.isAvailable);
// book2["checkOut"]();
// console.log(book2);


const bookObj = {
    checkIn: function(){
        return this;
    }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);

function anotherCheckin() {
    return this;
}

console.log("\n\nthis is: ", anotherCheckin());
//console.log(anotherCheckin() === globalThis; version node?
