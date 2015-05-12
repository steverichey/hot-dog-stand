/*
 * Hot Dog Stand v0.2.0
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
				var el = document.querySelectorAll("*"), i;
                
                for (i = 0; i < el.length; i++) {
                    el[i].style.setProperty ("background", "red", "important");
                    el[i].style.setProperty ("color", "yellow", "important");
                }
			}
		}
	}

	// i stole this from PIXI
	if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = hot;
        }
        exports.hot = hot;
    } else if (typeof define !== "undefined" && define.amd) {
        define(hot);
    } else {
        root.hot = hot;
    }
}).call(this);