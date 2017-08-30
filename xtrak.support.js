"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "xtrak",
              			"path": "xtrak/xtrak.js",
              			"file": "xtrak.js",
              			"module": "xtrak",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/xtrak.git",
              			"test": "xtrak-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract spliced elements from array.
              	@end-module-documentation
              
              	@include:
              		{
              			"condev": "condev",
              			"doubt": "doubt",
              			"exempt": "exempt",
              			"falzy": "falzy"
              		}
              	@end-include
              */

var condev = require("condev");
var doubt = require("doubt");
var exempt = require("exempt");
var falzy = require("falzy");

var xtrak = function xtrak(array, condition) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"array:required": Array,
                                              			"condition:required": [
                                              				"string",
                                              				"function",
                                              				RegExp,
                                              				BOOLEAN,
                                              				FUNCTION,
                                              				NUMBER,
                                              				OBJECT,
                                              				STRING,
                                              				UNDEFINED,
                                              				SYMBOL,
                                              				"*"
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (falzy(array) || !doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	try {
		var residue = [];
		exempt(array, null, function (element) {return condev(element, condition);}, residue);

		return residue;

	} catch (error) {
		throw new Error("cannot extract elements, " + error.stack);
	}
};

module.exports = xtrak;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInh0cmFrLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY29uZGV2IiwicmVxdWlyZSIsImRvdWJ0IiwiZXhlbXB0IiwiZmFsenkiLCJ4dHJhayIsImFycmF5IiwiY29uZGl0aW9uIiwiQVJSQVkiLCJFcnJvciIsInJlc2lkdWUiLCJlbGVtZW50IiwiZXJyb3IiLCJzdGFjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSSxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxTQUF2QixFQUFrQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLEtBQUlILE1BQU9FLEtBQVAsS0FBa0IsQ0FBQ0osTUFBT0ksS0FBUCxFQUFjRSxLQUFkLENBQXZCLEVBQThDO0FBQzdDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJQyxVQUFVLEVBQWQ7QUFDQVAsU0FBUUcsS0FBUixFQUFlLElBQWYsRUFBcUIsVUFBRUssT0FBRixVQUFlWCxPQUFRVyxPQUFSLEVBQWlCSixTQUFqQixDQUFmLEVBQXJCLEVBQWtFRyxPQUFsRTs7QUFFQSxTQUFPQSxPQUFQOztBQUVBLEVBTkQsQ0FNQyxPQUFPRSxLQUFQLEVBQWM7QUFDZCxRQUFNLElBQUlILEtBQUosK0JBQXdDRyxNQUFNQyxLQUE5QyxDQUFOO0FBQ0E7QUFDRCxDQW5DRDs7QUFxQ0FDLE9BQU9DLE9BQVAsR0FBaUJWLEtBQWpCIiwiZmlsZSI6Inh0cmFrLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwieHRyYWtcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwieHRyYWsveHRyYWsuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwieHRyYWsuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ4dHJha1wiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy94dHJhay5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwieHRyYWstdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRFeHRyYWN0IHNwbGljZWQgZWxlbWVudHMgZnJvbSBhcnJheS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNvbmRldlwiOiBcImNvbmRldlwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJleGVtcHRcIjogXCJleGVtcHRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGNvbmRldiA9IHJlcXVpcmUoIFwiY29uZGV2XCIgKTtcclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZXhlbXB0ID0gcmVxdWlyZSggXCJleGVtcHRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5cclxuY29uc3QgeHRyYWsgPSBmdW5jdGlvbiB4dHJhayggYXJyYXksIGNvbmRpdGlvbiApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXHJcblx0XHRcdFx0XCJjb25kaXRpb246cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFJlZ0V4cCxcclxuXHRcdFx0XHRcdEJPT0xFQU4sXHJcblx0XHRcdFx0XHRGVU5DVElPTixcclxuXHRcdFx0XHRcdE5VTUJFUixcclxuXHRcdFx0XHRcdE9CSkVDVCxcclxuXHRcdFx0XHRcdFNUUklORyxcclxuXHRcdFx0XHRcdFVOREVGSU5FRCxcclxuXHRcdFx0XHRcdFNZTUJPTCxcclxuXHRcdFx0XHRcdFwiKlwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggYXJyYXkgKSB8fCAhZG91YnQoIGFycmF5LCBBUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XHJcblx0fVxyXG5cclxuXHR0cnl7XHJcblx0XHRsZXQgcmVzaWR1ZSA9IFsgXTtcclxuXHRcdGV4ZW1wdCggYXJyYXksIG51bGwsICggZWxlbWVudCApID0+IGNvbmRldiggZWxlbWVudCwgY29uZGl0aW9uICksIHJlc2lkdWUgKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzaWR1ZTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGV4dHJhY3QgZWxlbWVudHMsICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB4dHJhaztcclxuIl19
//# sourceMappingURL=xtrak.support.js.map
