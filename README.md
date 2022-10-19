# This repository serves as documentation and testing for UMD.

## Imports

## Module
- Will not work as `file://` because browser throws an error.  Works `http://` and `https://`
- Will work with `window.`, but this is bad practice when the file is
  anticipated to be a module.  
- Namespace imports are ignored (i.e., `import * as UMD from './umd.js'`, UMD is ignored.
	- We believe this is because it is directly exported by the module to globals, so there is no export to import by the importing module.  
- Modules must use the export that's in the UMD section.  
	- From the exporting file: `factory(global.ExampleUMD = {})` but be referred to as `ExampleUMD`

## Non-Module
- Will work when being server over `file://`, `http://` and `https://`.
- Must use `window.ExampleUMD` and cannot use the export directly, i.e.`ExampleUMD`.
- Cannot use `import` in any Javascript.  
- In the UMD export, the `global.` becomes `window.` for the browser.
	- This is why the UMD library doesn't ever refer to `window`.  

# Var Encapsulate
- UMD declaration must be at the end of the file.  This is unlike the
  unencapsulated version which allows the declaration and exports at the
  beginning of the file.  


# Resources
Useful examples and documentation on UMD:

Blogs:
https://jameshfisher.com/2020/10/04/what-are-umd-modules/
https://jakearchibald.com/2017/es-modules-in-browsers/
https://salomvary.com/es6-modules-in-browsers.html

Issues:
https://github.com/systemjs/systemjs/issues/2064
https://github.com/systemjs/systemjs/issues/1933

https://github.com/paroi-tech/direct-vuex/issues/14

Repos:
https://github.com/umdjs/umd/

Other:
https://stackoverflow.com/a/63751410/15147681
https://github.com/paulmillr/noble-secp256k1/releases/tag/1.6.3
https://github.com/evanw/esbuild/issues/507#issuecomment-1221091273

