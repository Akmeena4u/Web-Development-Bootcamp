#1-objective--This  JavaScript Calculator Project is a web-based application that allows users to perform arithmetic calculations, including addition, subtraction, multiplication,
           division, and more, in a user-friendly and interactive manner


#2-Used tachStack--
           HTML- html forms , buttons and div tag
           css - css flexbox , justify content , margin , padding, radius and google fonts
          JS- Eventlistners , Eval function , arrow function/ callback function

#3-steps:-
 HTML:--  
     1. make a input text with an placeholder  0
     2. make buttons AC, DEL , % , / and similiarly made all buttons present on calc
 CSS:-
     1. come to css file's body and make this as a flex and make justify content-center to bring in horizonal center and align -items -center to bring it vertically center
     2. added google fonts and font family (popins ,sans serif) into css file
     3. now lets design our calculator class by adding border, padding, radius , box shadow
     4. now design input fields and buttons 
     5. in input filed we adjusted size and colors and radius and give color to placeholder
     6. in buttons we give them proper marging , padding , height to look good and also make them circular also added cursor pointers to indicate that we are there
     7. now added diffrent colors to operators and equal sign to look diffrent

JS:- 
   1.now to handle user interactions with buttons and an input box to create a basic calculator functionality we will use js.
   2. we will acees input filed by getelmentbyid and all buttons by universal selector - document.queryselectorALL
   3. to store results we will create a empty string 
   4. we will create an array of all buttons to make of use foreach loop for easy cal and apply click addEventListener and start processing each button one by one 
   5. if innerhtml of clicked button is "=" then use js's inbuilt function eval to calculate all string chracters -> update string and input value in inputbox
   6. if innerhtml of clicked button is "AC" then clear the string and update result
   7. if innerhtml of clicked button is "DEL" then remove last chracter from string using substring method 
   8. for all other buttons we will just add them into string  and correspondingly update input values 
     
