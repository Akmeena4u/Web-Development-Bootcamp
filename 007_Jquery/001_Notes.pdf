jQuery is a lightweight, "write less, do more", JavaScript library.
The purpose of jQuery is to make it much easier to use JavaScript on your website.
jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

##The jQuery library contains the following features:
HTML/DOM manipulation
CSS manipulation
HTML event methods
Effects and animations
AJAX
Utilities
Tip: In addition, jQuery has plugins for almost any task out there.


-----------------------------------------------------------------------------##insatalltion------------------------------------------------------------------------------------


There are several ways to start using jQuery on your web site. You can:
Download the jQuery library from jQuery.com
Include jQuery from a CDN, like Google

The jQuery library is a single JavaScript file, and you reference it with the HTML <script> tag (notice that the <script> tag should be inside the <head> section):
<head>
<script src="jquery-3.7.1.min.js"></script>
</head>
Tip: Place the downloaded file in the same directory as the pages where you wish to use it.

using CDN
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>



-----------------------------------------------------------------------------------##JQuery syntax-----------------------------------------------------------------------

With jQuery you select (query) HTML elements and perform "actions" on them.
The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
Basic syntax is: $(selector).action()

Examples:
$(this).hide() - hides the current element.
$("p").hide() - hides all <p> elements.
$(".test").hide() - hides all elements with class="test".
$("#test").hide() - hides the element with id="test".


##Note:-- Document Ready Event
This is to prevent any jQuery code from running before the document is finished loading (is ready). like avoid- Trying to hide an element that is not created yet

$(document).ready(function(){
  // jQuery methods go here...
});

or

$(function(){
  // jQuery methods go here...
});




## Placing Jquery file in seprate file
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="my_jquery_functions.js"></script>
</head>



---------------------------------------------------------------------------------------##Events -------------------------------------------------------------------------------


All the different visitors' actions that a web page can respond to are called events.
1.click() : The click() method attaches an event handler function to an HTML element
$("p").click(function(){
  $(this).hide();
});

similarily - dblclick(), mouseenter() ,mouseleave() , mousedown() ,hover() ,focus()
on() -The on() method attaches one or more event handlers for the selected elements.
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});



--------------------------------------------------------------------------##Effects---------------------------------------------------------------------------------------------------

1. Hide, Show, Toggle, Slide, Fade, and Animate. WOW!
 syntax--    $(selector).hide(speed,callback);

2. fade - With jQuery you can fade an element in and out of visibility.
jQuery has the following fade methods: fadeIn() ,fadeOut() ,fadeToggle() ,fadeTo()
 syntax--  $(selector).fadeIn(speed,callback);
           $(selector).fadeTo(speed,opacity,callback);

example - $("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});


3. slide -- The jQuery slide methods slide elements up and down.
jQuery has the following slide methods: slideDown() , slideUp() ,slideToggle()
syntax--  $(selector).slideToggle(speed,callback);
example
$("#flip").click(function(){
  $("#panel").slideToggle();
});


4.Animate-- with jQuery, you can create custom animations
 syntax- $(selector).animate({params},speed,callback);
The required params parameter defines the CSS properties to be animated.
example
$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
}); 


5. Stop ---  The jQuery stop() method is used to stop animations or effects before it is finished.
    syantax-- $(selector).stop(stopAll,goToEnd);   ,both para are optional
   $("#stop").click(function(){
  $("#panel").stop();
});

6. callback-- A callback function is executed after the current effect is 100% finished.

7. channing -  you can chain together actions/methods.
   $("#p1").css("color", "red").slideUp(2000).slideDown(2000);






-------------------------------------------------------------------------------##Jquery HTML-----------------------------------------------------------------------------------

One very important part of jQuery is the possibility to manipulate the DOM.

1.get 
hree simple, but useful, jQuery methods for DOM manipulation are
text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields
example:- 
$("#btn1").click(function(){
  alert("Value: " + $("#test").val());
});



2.set-  We will use the same three methods from the previous page to set content:
$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
  $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
  $("#test


3.Add
We will look at four jQuery methods that are used to add new content:
append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements
example:
$("img").after("Some text after");


4.remove -- With jQuery, it is easy to remove existing HTML elements.
remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element
example:
$("#div1").empty();
$("p").remove(".test");


5.jQuery Manipulating CSS
addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements
css() - Sets or returns the style attribute
example:
$("button").click(function(){
  $("#div1").addClass("important blue");
});

The css() method sets or returns one or more style properties for the selected elements.
$("p").css("background-color");
$("p").css("background-color", "yellow");


6.dimentions
jQuery has several important methods for working with dimensions:
width() , height() , innerWidth() ,innerHeight(), outerWidth() , outerHeight()



-------------------------------------------------------------------------##Traversing----------------------------------------------------------------------------------



