/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"poc/Acc/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});