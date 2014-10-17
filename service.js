/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"./config",
	"troopjs-core/component/service",
	"jquery",
	"troopjs-util/merge"
], function (config, Service, $, merge) {
	"use strict";

	/**
	 * Provides ajax as a service
	 * @class net.ajax.service
	 * @extend core.component.service
	 */

	var SETTINGS = config.settings;

	/**
	 * @method constructor
	 */
	return Service.extend({
		"displayName" : "ajax/service",

		/**
		 * The ajax event
		 * @event hub/ajax
		 * @param {Object} settings Ajax settings
		 */

		/**
		 * Make ajax request.
		 * @handler
		 * @inheritdoc #event-hub/ajax
		 */
		"hub/ajax" : function ajax(settings) {
			return $.ajax(merge.call(SETTINGS.call(this), settings));
		}
	});
});
