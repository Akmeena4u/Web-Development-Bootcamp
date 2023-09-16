//In JavaScript, the String object is used to represent and manipulate text as a sequence of characters. Strings are one of the primitive data types in JavaScript,
//but they also have associated methods and properties when used in their object form (String objects).

//Properties:
//#1-length: Returns the number of characters in a string.
const text1 = "Hello, World!";
const length = text1.length; // Returns 13



//Methods:
//#1-Accessing Characters:
//a-charAt(index): Returns the character at the specified index.
const text2 = "Hello";
const firstChar = text2.charAt(0); // Returns "H"

//b-charCodeAt(index): Returns the Unicode value (integer) of the character at the specified index.
const text3 = "Hello";
const unicodeValue = text3.charCodeAt(1); // Returns 101 (Unicode for "e")

//c-substring -Returns a substring between startIndex (inclusive) and endIndex (exclusive).
const text4 = "Hello, World!";
const sub = text4.substring(7, 12); // Returns "World"





//#2-Searching and Replacing:
//a-indexOf - : Returns the index of the first occurrence of substring, or -1 if not found.
const text5 = "Hello, World!";
const index = text5.indexOf("World"); // Returns 7
//Find the first occurrence of "e", starting at position 5:
const text6 = "Hello world, welcome to the universe.";
text6.indexOf("e", 5);

//b-lastIndexOf-  Returns the index of the last occurrence of substring, or -1 if not found.   syntax--string.lastIndexOf(searchvalue, start)
const text7 = "Hello, World, World!";
const index = text7.lastIndexOf("World"); // Returns 13

//c-replace(searchValue, replaceValue): Replaces the first occurrence of searchValue with replaceValue.
const text8 = "Hello, World!";
const newText = text8.replace("World", "Universe"); // Returns "Hello, Universe!"

//d-includes()- 
const text9 = "Hello world, welcome to the universe.";
const result = text9.includes("world");  //true





//#3-Case Manipulation:
//a-toUpperCase(): Converts the string to uppercase.
const text10 = "Hello";
const uppercaseText = text10.toUpperCase(); // Returns "HELLO"

//b-toLowerCase(): Converts the string to lowercase.
const text11 = "Hello";
const lowercaseText = text11.toLowerCase(); // Returns "hello"





//#4-Trimming:
//a-trim(): Removes whitespace (spaces, tabs, and newlines) from both ends of the string.
const text12 = "  Hello, World!  ";
const trimmedText = text12.trim(); // Returns "Hello, World!"

const text13 = "     Hello World!     ";
const text14 = text13.trimEnd();

const text15 = "     Hello World!     ";
const text16 = text15.trimStart();





//#5-Splitting and Joining:
//a-split(separator[, limit]): Splits the string into an array of substrings based on the separator.
const text17 = "apple,banana,cherry";
const fruits1 = text17.split(","); // Returns ["apple", "banana", "cherry"]

const text18 = "How are you doing today?";
const myArray = text18.split(" ", 3);   //using a limit para

//b-join(separator): Joins the elements of an array into a single string, separated by the specified separator.
const fruits2 = ["apple", "banana", "cherry"];
const text19 = fruits.join(","); // Returns "apple,banana,cherry"









