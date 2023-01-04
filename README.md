# TypeWriter.js

A lightweight, easy-to-implement JavaScript plugin to add animated typing effect for websites.

Why TypeWriter.js
-----------------

* Light-Weight (1.6kb)
* Vanilla JavaScript Library
* Simple, Easy-to-Use
* No Dependencies
* Loop your string(s) continuously

TypeWriter.js Options
---------------------

| #   | Option | Description | Options / Examples |
| --- | --- | --- | --- |
| 1   | strings | Array of Strings | \["Developer.", "Freelancer.", "Content Writer.", "Photographer."\] |
| 2   | speed | Speed of Typing in ms | 100, 500, 1000, etc. |
| 3   | delay | Delay Before Erasing each String (in ms) | 1000, 5000, etc. |
| 4   | loop | Boolean to denote whether to loop the strings or not | true, false |
| 5   | cursor | Custom Cursor | "\|", "...", etc. |

Demo Code
---------

    <html>
    <body>
    <h1 id="typewriter"></h1>
    <script src="typewriter.min.js"></script>
    <script>
    window.onload = function() {
    	var typewriter = new TypeWriter("typewriter", {
    		strings: ["TypeWriter.js", "Light-Weight", "Simple", "Easy to Use"],
    		delay: 2000
    	});
    	typewriter.start();
    }
    </script>
    </body>
    </html>