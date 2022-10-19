////////////////////////////////////////////////////////////////////////////////
//  UMD format with encapsulated object
////////////////////////////////////////////////////////////////////////////////

// Holds global object accessible as module or through global window.
var umdtest = new function() {
	// Function that prints out first UMD test.
	this.First = function() {
		return "first";
	};
	this.Second = function() {
		return "Second";
	};
};

(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ExampleVarUMD = umdtest));
})(this, (function(exports) {
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
}));