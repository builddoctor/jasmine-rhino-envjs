load('lib/env.rhino.1.2.js');

Envjs.scriptTypes['text/javascript'] = true;
//window.location = 'SpecRunner.html';
var specFile;

for (i = 0; i < arguments.length; i++) {
    specFile = arguments[i];
    
    console.log("Loading: " + specFile);
    
    window.location = specFile
}
