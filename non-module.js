document.addEventListener('DOMContentLoaded', () => {
	console.log('Running tests for UMD as **non-module**');

	console.log(window.ExampleUMD.First());
	// console.log(ExampleUMD.First()); // This will not work in non-modules. `window` must always be used. 
});