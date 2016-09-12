// use commonjs for now
let $ = require( 'jquery' );

export default function plugit( pluginName, pluginClass ) {
	let dataName = `plugin_${pluginName}`;

	$.fn[pluginName] = function( options ) {
		return this.each( function() {
			let $this = $( this );
			let data = $this.data( dataName );

			if ( ! data ) {
				$this.data( dataName, ( data = new pluginClass( this, options ) ) );
			}
		} );
	};

}
