import $ from 'jquery';

export default function plugit( pluginName, pluginClass ) {
	let dataName = `plugin_${pluginName}`;

	$.fn[pluginName] = function( opts ) {
		return this.each( function() {
			let $this = $( this );
			let data = $this.data( dataName );
			let options = {
				...this._defaults, 
				...opts
			};

			pluginClass.element = this;
			pluginClass.$element = $this;

			if ( ! data ) {
				$this.data( dataName, ( data = new pluginClass( this, options ) ) );
			}
		} );
	};

}
