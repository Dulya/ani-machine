am.translate = (function(styles, undefined) {
	"use strict";

	return function(options) {
		var type = 'translate',
			tmp = type + options.axis + '(' + options.move + ')',
			scale = options.scale,
			key = '',
			css;

		if (scale !== undefined) {
			tmp += ' scale(' + scale.value + ')';
		}

		css = '-webkit-transform: ' + tmp + ';transform: ' + tmp + ';';

		if (options.opacity !== undefined) {
			css += ' opacity: ' + (options.opacity ? '1' : '0') + ';';
		}
	
		key += type + options.axis + '_' + options.move + '_' + options.opacity;

		if (scale !== undefined) {
			key += ('_scale' + scale.value).replace('.', '_');
		}

		key = key.replace(/-/g, 'm');

		return styles.build(key, css);
	};

})(am.styles);