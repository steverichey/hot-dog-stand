/*
 * Hot Dog Stand v0.1.0
 * Copyright 2015, Steve Richey
 * https://github.com/steverichey/hot-dog-stand
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 03/23/2015
 */

(function() {
	var root = this;

	var hot = {
		dog: {
			get stand() {
				var everything = document.querySelector("*");
				everything.style.setProperty ("background", "red", "important");
				everything.style.setProperty ("color", "yellow", "important");
			}
		}
	}

	// i stole this from PIXI
	if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = hot;
        }
        exports.hot = hot;
    } else if (typeof define !== 'undefined' && define.amd) {
        define(hot);
    } else {
        root.hot = hot;
    }
}).call(this);