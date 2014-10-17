/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"module",
	"troopjs-util/merge"
], function (module, merge) {
	"use strict";

	/**
	 * Provides configuration for the ajax package
	 * @class ajax.config
	 * @protected
	 * @alias feature.config
	 */

	return merge.call({
		/**
		 * @cfg {Function} settings Method that generates default settings which will be added to any ajax request.
		 */
		"settings" : function () {
			return {
				"headers": {
					"x-troopjs-request-id": new Date().getTime()
				}
			}
		}
	}, module.config());
});