![TypeWriter.js](https://raw.githubusercontent.com/vishwas-r/TypeWriter.js/main/img/typewriter.js.gif)

A lightweight, easy-to-implement JavaScript plugin to add animated typing effect for websites. Checkout [Demo Here](https://vishwas-r.github.io/TypeWriter.js/)

[![TypeWriter.js on npmjs](https://img.shields.io/npm/v/@vishwas.r/typewriter.js.svg)](https://www.npmjs.com/package/@vishwas.r/typewriter.js) [![](https://data.jsdelivr.com/v1/package/npm/@vishwas.r/typewriter.js/badge)](https://www.jsdelivr.com/package/npm/@vishwas.r/typewriter.js)
[![Featured on Openbase](https://badges.openbase.com/js/featured/@vishwas.r/typewriter.js.svg?token=/SUB8DMZax/W8J7bfNbWyUp0D60jRbUNLZlsjgzDGGQ=)](https://openbase.com/js/@vishwas.r/typewriter.js?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

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
