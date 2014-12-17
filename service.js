/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"./config",
	"troopjs-core/component/gadget",
	"jquery",
	"mu-merge/main"
], function (config, Gadget, $, merge) {
	"use strict";

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
