sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function (Controller, History,JSONModel, UIComponent) {
	"use strict";

	return Controller.extend("poc.Acc.controller.App", {

		onInit: function () {
			var oModel = new JSONModel();
			oModel.loadData("./model/Clothing.json");
			this.getView().setModel(oModel);
		},

		onPress: function () {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("RouteMain", {}, true);
			}
		}
	});
});