(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports', 'jquery'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports, require('jquery'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports, global.jquery);
		global.index = mod.exports;
	}
})(this, function (module, exports, _jquery) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = plugit;

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function plugit(pluginName, pluginClass) {
		var dataName = 'plugin_' + pluginName;

		_jquery2.default.fn[pluginName] = function (opts) {
			return this.each(function () {

				var element = this,
				    $element = (0, _jquery2.default)(element);

				var data = $element.data(dataName);

				var options = _jquery2.default.extend({}, pluginClass._defaults, opts);

				if (!data) {
					$element.data(dataName, data = new pluginClass({ element: element, $element: $element }, { options: options }));
				}
			});
		};
	}
	module.exports = exports['default'];
});
