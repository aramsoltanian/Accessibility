sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("poc.Acc.controller.Main", {

		onInit: function () {
			var localdata = {
				"oldClass" : ""
			}
			
			var appModel = new JSONModel();
			appModel.setData(localdata);
			
			this.getView().setModel(appModel, "appModel")
			var oComboBoxModel = new JSONModel();
			var mData = {
				"items": [{
					"key": "1",
					"text": "Fiori 3"
				}, {
					"key": "2",
					"text": "Belize"
				}, {
					"key": "3",
					"text": "Belize Plus"
				}, {
					"key": "4",
					"text": "High Contrast White"
				}, {
					"key": "5",
					"text": "High Contrast Black"
				}, {
					"key": "6",
					"text": "Blue Crystal"
				}]
			};
			oComboBoxModel.setData(mData);
			this.getView().byId("comboBox").setModel(oComboBoxModel);

			var oComboBoxModel1 = new JSONModel();
			var mData1 = {
				"items": [{
					"key": "1",
					"text": "Font 14"
				}, {
					"key": "2",
					"text": "Font 18"
				}, {
					"key": "3",
					"text": "Font 22"
				}]
			};
			oComboBoxModel1.setData(mData1);
			this.getView().byId("comboBoxFont").setModel(oComboBoxModel1);
		},

		onPress: function (e) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteDetail");
		},

		//Sets the app to busy, when selecting a new theme
		onAction: function (oEvt) {
			var view = this.getView();
			view.setBusy(true);
			// simulate delayed end of operation
			setTimeout(function () {
				view.setBusy(false);
			}, 500);
		},

		onThemeChange: function (oEvent) {
			var value = oEvent.getParameters("selectedItem").selectedItem.getText();
			this.onAction();
			switch (value) {
			case "Belize":
				sap.ui.getCore().applyTheme("sap_belize");
				break;
			case "Blue Crystal":
				sap.ui.getCore().applyTheme("sap_bluecrystal");
				break;
			case "High Contrast White":
				sap.ui.getCore().applyTheme("sap_belize_hcw");
				break;
			case "Belize Plus":
				sap.ui.getCore().applyTheme("sap_belize_plus");
				break;
			case "High Contrast Black":
				sap.ui.getCore().applyTheme("sap_belize_hcb");
				break;
			case "Fiori 3":
				sap.ui.getCore().applyTheme("sap_fiori_3");
				break;
			}
		},

		setClass: function (cont, c) {
			var oldClass = 	this.getView().getModel("appModel").getProperty("/oldClass");
			for (var i = 0; i < cont.length; i++) {
				cont[i].getCells().forEach(element => oldClass ? element.removeStyleClass(oldClass).addStyleClass(c):  element.addStyleClass(c));
			}
			this.getView().getModel("appModel").setProperty("/oldClass",c);
		},

		onFontChange: function (oEvent) {
			var value = oEvent.getParameters("selectedItem").selectedItem.getText();
			this.onAction();
			var contentarr = 	this.getView().byId("TreeTableBasic").getRows();
			switch (value) {
			case "Font 14":
			this.setClass(contentarr,"font14");
				break;
			case "Font 18":
					this.setClass(contentarr,"font18");
				break;
			case "Font 22":
					this.setClass(contentarr,"font22");
				break;
			}
		},
		
		onbtnClicked: function(evt){
				sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
		}
		
		
	});
});