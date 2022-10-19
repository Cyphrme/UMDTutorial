"use strict";

import './var_enc_lib.js'; // Namespace export is 'ExampleVarUMD'.


document.addEventListener('DOMContentLoaded', () => {
	console.log('Running tests for UMD (var encapsulated) as module');
	console.log(ExampleVarUMD.First());
	console.log(window.ExampleVarUMD.First()); // Works, but bad practice.  Don't use `window` when working with modules.  
});