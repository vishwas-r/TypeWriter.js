(function() {
	function TypeWriter(elementRef, options) {
		this.updateOptions(options);

		this.txt = "";
		this.loopNum = 0;
		element = typeof (elementRef) === "string" ? document.getElementById(elementRef) : elementRef;
		
		this.txtSpan = document.createElement('span');
		this.txtSpan.setAttribute("class", "typewriter-text");
		element.appendChild(this.txtSpan);
		
		this.cursorSpan = document.createElement('span');
		this.cursorSpan.setAttribute("class", "typewriter-cursor");
		this.cursorSpan.innerHTML = this.cursor;
		element.appendChild(this.cursorSpan);
		this.cursorSpan.style.marginLeft = "-5px";	  
	}

	TypeWriter.prototype.updateOptions = function(options) {
		this.options = options ? options : {};
		this.strings = this.options.strings ? this.options.strings : ["Simple TypeWriter"];
		this.speed = parseInt(this.options.speed, 10) || 100;
		this.delay = parseInt(this.options.delay, 10) || 5000;
		this.loop = typeof(this.options.loop) !== 'undefined' ? this.options.loop : true;
		this.cursor = this.options.cursor ? this.options.cursor : "│";
	}

	TypeWriter.prototype.start = function () {
		var _this = this, delta = this.speed, i = this.loopNum % this.strings.length, fullTxt = this.strings[i];
	  
		if (this.isDeleting) {
			if((this.loopNum === (this.strings.length - 1)) && !this.loop)
				return;
			
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		
		this.cursorSpan.animate([{ opacity: 1 }], {	duration: 1000,	iterations: Infinity });
		this.txtSpan.innerHTML = this.txt;

		if (!this.isDeleting && this.txt === fullTxt) {
			this.isDeleting = true;
			delta = this.delay;
			this.cursorSpan.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], { duration: 1000, iterations: Infinity });
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.loopNum++;
		}
		setTimeout(function () {
			_this.start();
		}, delta);  
	}
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = TypeWriter;
	} else {
		if (typeof define === 'function' && define.amd) {
			define([], function () {
				return TypeWriter;
			});
		} else {
			window.TypeWriter = TypeWriter;
		}
	}
})();