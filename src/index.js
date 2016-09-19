import $ from 'jquery';

export default function plugit( pluginName, pluginClass ) {
	let dataName = `plugin_${pluginName}`;

	$.fn[pluginName] = function( opts ) {
		return this.each( function() {

			let element = this,
				$element = $( element );

			let data = $element.data( dataName );

			let options = $.extend(
				{},
				pluginClass._defaults,
				opts
			);

			if ( ! data ) {
				$element.data( dataName, ( data = new pluginClass( { element, $element }, { options } ) ) );
			}
		} );
	};

}
