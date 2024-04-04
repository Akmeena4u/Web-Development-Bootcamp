
# Adding JavaScript to HTML Document

JavaScript code can be added to an HTML document in two ways:

## Inline JavaScript

You can include JavaScript code directly within your HTML file using the <script> element. Place this element within the <head> or <body> section of your HTML document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS BASIC</title>
    
    <!-- Internal JS -->
    <script>
        console.log("Hello This is Printed by internal JS with script")            
    </script>
</head>
<body>
    <h1>Check Console</h1>
</body>
</html>
```

## External JavaScript File

For larger or reusable JavaScript code, it's a good practice to place the code in an external JavaScript file with a .js extension and then include it in your HTML file using the <script> element's src attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS BASIC</title>

    <!-- External JS -->
    <script src="./script.js"></script>
</head>
<body>
    <h1>Check Console</h1>
</body>
</html>
```

In the above examples, the first one demonstrates inline JavaScript, where the code is directly written within the <script> element in the HTML file. The second example shows external JavaScript, where the JavaScript code is placed in a separate script.js file and included in the HTML using the <script> element's src attribute.
