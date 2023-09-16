//In JavaScript, you can create a Date object to work with dates and times. The Date object allows you to perform various operations, such as getting the current date and time, 
//formatting dates, and performing arithmetic with dates.  Here's how you can create and work with Date objects:

//#1-Creating a Date Object:
//a-Using the new keyword
const currentDate = new Date();
//b-By passing a date string:
const specificDate = new Date('2023-09-16T12:00:00');
//c-By passing individual date and time components (year, month, day, hour, minute, second, millisecond):
const customDate = new Date(2023, 8, 16, 12, 0, 0, 0); // Note: Months are 0-based (0 = January, 1 = February, ...)
//d-Using Date methods & timestamps:
const timestamp = Date.now();  //to get current timestamp
const dateFromTimestamp = new Date(timestamp);



//#2-Formatting and Conversion:-
const dateStr = currentDate.toDateString(); // e.g., "Thu Sep 16 2023"
const isoDateStr = currentDate.toISOString(); // e.g., "2023-09-16T10:30:00.500Z"
const localDateStr = currentDate.toLocaleDateString(); // Localized date string.


//#3-Getting Date Components:-
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based (0 = January, 1 = February, ...)
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ...
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const millisecond = currentDate.getMilliseconds();
const timestamp = currentDate.getTime(); // Returns the timestamp in milliseconds.



//#4-Setting Date Components:-
const customDate = new Date();
customDate.setFullYear(2024);
customDate.setMonth(5); // June (0-based)
customDate.setDate(15);
customDate.setHours(14);
customDate.setMinutes(30);
customDate.setSeconds(0);
customDate.setMilliseconds(500);


//#5-Comparing Dates:
const date1 = new Date('2023-09-16');
const date2 = new Date('2023-09-15');
const isDate1GreaterThanDate2 = date1 > date2; // true


//#6-Date Arithmetic:-
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Add 7 days to the current date.




