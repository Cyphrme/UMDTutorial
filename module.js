"use strict";

import './module_umd_lib.js'; // Namespace export is 'ExampleUMD'.

// Works, but namespace `UMD` is **discarded**.  `ExampleUMD` is used instead as specified by the export in `./umd.js`:
// import * as 'UMD' from './umd.js'; 

document.addEventListener('DOMContentLoaded', () => {
	console.log('Running tests for UMD as module');

	console.log(ExampleUMD.First());
	console.log(window.ExampleUMD.First()); // Works, but bad practice.  Don't use `window` when working with modules.  
});