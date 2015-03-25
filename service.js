/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"troopjs-hub/component",
	"./config",
	"./error",
	"jquery",
	"mu-merge/main"
], function (Emitter, config, AjaxError, $, merge) {
	"use strict";

	/**
	 * Provides ajax as a service
	 * @class ajax.service
	 * @extend hub.component
	 * @mixin ajax.config
	 * @alias service.ajax
	 */

	var SETTINGS = config.ajax.settings;

	/**
	 * @method constructor
	 */
	return Emitter.extend({
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
			return $
				.ajax(merge.call(SETTINGS.call(this), settings))
				.fail(function (jqXHR, textStatus, errorThrown) {
					return new AjaxError(errorThrown);
				});
		}
	});
});
