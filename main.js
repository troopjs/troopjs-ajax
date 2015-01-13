define('troopjs-ajax/version',[], { 'toString': function () { return ; } });

/**
 * @license MIT http://troopjs.mit-license.org/
 */
define('troopjs-ajax/config',[
	"module",
	"troopjs-core/config",
	"mu-merge/main"
], function (module, config, merge) {
	

	/**
	 * @class ajax.config.ajax
	 * @private
	 */
	var AJAX = {
		/**
		 * Method that generates default settings which will be added to any ajax request
		 * @return {Object}
		 */
		"settings" : function () {
			return {
				"headers": {
					"x-troopjs-request-id": new Date().getTime()
				}
			}
		}
	};

	/**
	 * Provides configuration for the ajax service
	 * @class ajax.config
	 * @extends core.config
	 * @private
	 * @alias feature.config
	 */

	return merge.call({}, config, {
		/**
		 * Ajax configuration
		 * @cfg {ajax.config.ajax}
		 * @protected
		 */
		"ajax": AJAX
	}, module.config());
});

/**
 * @license MIT http://troopjs.mit-license.org/
 */
define('troopjs-ajax/service',[
	"./config",
	"troopjs-core/component/gadget",
	"jquery",
	"mu-merge/main"
], function (config, Gadget, $, merge) {
	

	/**
	 * Provides ajax as a service
	 * @class ajax.service
	 * @extend core.component.gadget
	 * @mixin ajax.config
	 * @alias service.ajax
	 */

	var SETTINGS = config.ajax.settings;

	/**
	 * @method constructor
	 */
	return Gadget.extend({
		"displayName" : "ajax/service",

		/**
		 * The ajax event
		 * @event hub/ajax
		 * @param {Object} settings Ajax settings
		 */

		/**
		 * Make ajax request
		 * @handler
		 * @inheritdoc #event-hub/ajax
		 */
		"hub/ajax" : function ajax(settings) {
			return $.ajax(merge.call(SETTINGS.call(this), settings));
		}
	});
});

define(['troopjs-ajax/version'], function (version) {
	return version;
});