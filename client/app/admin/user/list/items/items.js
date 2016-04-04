	/**
	 * @ngdoc overview
	 * @name mvpHrApp.admin.user.list.items
	 * @requires ui.router
	 * @requires components/listImage
	 *
	 * @description
	 * The `mvpHrApp.admin.user.list.items` module which provides:
	 *
	 * - {@link mvpHrApp.admin.user.list.items.controller:UserItemsController UserItemsController}
	 */

(function () {
	'use strict';

	angular
		.module('mvpHrApp.admin.user.list.items', [
			'ui.router',
			'mvpHrApp.listImage'
		]);

})();
