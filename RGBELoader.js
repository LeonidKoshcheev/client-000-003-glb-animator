/**
 * RGBELoader (UMD версия)
 * Источник: https://github.com/mrdoob/three.js/blob/r134/examples/js/loaders/RGBELoader.js
 * Зависит от THREE.js
 */
THREE.RGBELoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.RGBELoader.prototype = {

    constructor: THREE.RGBELoader,

    load: function ( url, onLoad, onProgress, onError ) {
        var scope = this;

        var loader = new THREE.FileLoader( scope.manager );
        loader.setResponseType( 'arraybuffer' );
        loader.setPath( this.path );
        loader.setWithCredentials( this.withCredentials );
        loader.load( url, function ( buffer ) {
            onLoad( scope.parse( buffer ) );
        }, onProgress, onError );
    },

    parse: function ( buffer ) {
        return new THREE.DataTexture(); // Заглушка для примера
    }

};