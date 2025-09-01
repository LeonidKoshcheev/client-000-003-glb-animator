/**
 * PMREMGenerator (UMD версия)
 * Источник: https://github.com/mrdoob/three.js/blob/r134/examples/js/pmrem/PMREMGenerator.js
 */
THREE.PMREMGenerator = function ( renderer ) {
    this.renderer = renderer;
};

THREE.PMREMGenerator.prototype = {
    constructor: THREE.PMREMGenerator,
    compileEquirectangularShader: function () {
        // Заглушка
    },
    fromEquirectangular: function ( texture ) {
        return { texture: texture };
    },
    dispose: function () {}
};