"use strict";

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ExampleUMD = {}));
})(this, (function (exports) {
	exports.First = First;
	exports.Second = Second;
	Object.defineProperty(exports, '__esModule', {
		value: true,
	});
}));

function First() {
	return "first";
};

function Second() {
	return "Second";
};