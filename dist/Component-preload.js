//@ui5-bundle poc/Acc/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"poc/Acc/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","poc/Acc/model/models"],function(e,t,i){"use strict";return e.extend("poc.Acc.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"poc/Acc/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/model/json/JSONModel","sap/ui/core/UIComponent"],function(e,o,n,t){"use strict";return e.extend("poc.Acc.controller.App",{onInit:function(){var e=new n;e.loadData("./model/Clothing.json");this.getView().setModel(e)},onPress:function(){var e=o.getInstance();var n=e.getPreviousHash();if(n!==undefined){window.history.go(-1)}else{var i=t.getRouterFor(this);i.navTo("RouteMain",{},true)}}})});
},
	"poc/Acc/controller/Detail.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent"],function(e,o,n){"use strict";return e.extend("poc.Acc.controller.Detail",{onInit:function(){},onPress:function(){var e=o.getInstance();var t=e.getPreviousHash();if(t!==undefined){window.history.go(-1)}else{var r=n.getRouterFor(this);r.navTo("RouteMain",{},true)}}})});
},
	"poc/Acc/controller/Main.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("poc.Acc.controller.Main",{onInit:function(){var e={oldClass:""};var s=new t;s.setData(e);this.getView().setModel(s,"appModel");var a=new t;var o={items:[{key:"1",text:"Fiori 3"},{key:"2",text:"Belize"},{key:"3",text:"Belize Plus"},{key:"4",text:"High Contrast White"},{key:"5",text:"High Contrast Black"},{key:"6",text:"Blue Crystal"}]};a.setData(o);this.getView().byId("comboBox").setModel(a);var i=new t;var l={items:[{key:"1",text:"Font 14"},{key:"2",text:"Font 18"},{key:"3",text:"Font 22"}]};i.setData(l);this.getView().byId("comboBoxFont").setModel(i)},onPress:function(e){var t=sap.ui.core.UIComponent.getRouterFor(this);t.navTo("RouteDetail")},onAction:function(e){var t=this.getView();t.setBusy(true);setTimeout(function(){t.setBusy(false)},500)},onThemeChange:function(e){var t=e.getParameters("selectedItem").selectedItem.getText();this.onAction();switch(t){case"Belize":sap.ui.getCore().applyTheme("sap_belize");break;case"Blue Crystal":sap.ui.getCore().applyTheme("sap_bluecrystal");break;case"High Contrast White":sap.ui.getCore().applyTheme("sap_belize_hcw");break;case"Belize Plus":sap.ui.getCore().applyTheme("sap_belize_plus");break;case"High Contrast Black":sap.ui.getCore().applyTheme("sap_belize_hcb");break;case"Fiori 3":sap.ui.getCore().applyTheme("sap_fiori_3");break}},setClass:function(e,t){var s=this.getView().getModel("appModel").getProperty("/oldClass");for(var a=0;a<e.length;a++){e[a].getCells().forEach(e=>s?e.removeStyleClass(s).addStyleClass(t):e.addStyleClass(t))}this.getView().getModel("appModel").setProperty("/oldClass",t)},onFontChange:function(e){var t=e.getParameters("selectedItem").selectedItem.getText();this.onAction();var s=this.getView().byId("TreeTableBasic").getRows();this.getView().byId("fontChange").addStyleClass("font22");this.getView().byId("TreeTableBasic").addStyleClass("font22");switch(t){case"Font 14":this.setClass(s,"font14");break;case"Font 18":this.setClass(s,"font18");break;case"Font 22":this.setClass(s,"font22");break}},onbtnClicked:function(e){sap.m.MessageToast.show(e.getSource().getId()+" Pressed")}})});
},
	"poc/Acc/i18n/i18n.properties":'title=Haupsi\nappTitle=Acc\nappDescription=App Description',
	"poc/Acc/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"poc.Acc","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"poc.Acc.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"poc.Acc.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"poc.Acc.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":"","target":["TargetMain"]},{"name":"RouteDetail","pattern":"Detail","target":["TargetDetail"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"Main"},"TargetDetail":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"Detail"}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"}}',
	"poc/Acc/model/Clothing.json":'{"catalog":{"clothing":{"categories":[{"name":"Frau","categories":[{"name":"Kleidung","categories":[{"name":"Dresses","categories":[{"name":"Casual Red Dress","amount":16.99,"currency":"EUR","size":"S"},{"name":"Short Black Dress","amount":47.99,"currency":"EUR","size":"M"},{"name":"Long Blue Dinner Dress","amount":103.99,"currency":"USD","size":"L"}]},{"name":"Tops","categories":[{"name":"Printed Shirt","amount":24.99,"currency":"USD","size":"M"},{"name":"Tank Top","amount":14.99,"currency":"USD","size":"S"}]},{"name":"Hose","categories":[{"name":"Red Hose","amount":32.99,"currency":"USD","size":"M"},{"name":"Skinny Jeans","amount":44.99,"currency":"USD","size":"S"},{"name":"Black Jeans","amount":99.99,"currency":"USD","size":"XS"},{"name":"Relaxed Fit Jeans","amount":56.99,"currency":"USD","size":"L"}]},{"name":"Röcke","categories":[{"name":"Striped Röcke","amount":24.99,"currency":"USD","size":"M"},{"name":"Black Röcke","amount":44.99,"currency":"USD","size":"S"}]}]},{"name":"Schmuck","categories":[{"name":"Necklace","amount":16.99,"currency":"USD"},{"name":"Bracelet","amount":47.99,"currency":"USD"},{"name":"Gold Ring","amount":399.99,"currency":"USD"}]},{"name":"Handtaschen","categories":[{"name":"Little Black Bag","amount":16.99,"currency":"USD","size":"S"},{"name":"Grey Shopper","amount":47.99,"currency":"USD","size":"M"}]},{"name":"Shoes","categories":[{"name":"Pumps","amount":89.99,"currency":"USD"},{"name":"Sport Shoes","amount":47.99,"currency":"USD"},{"name":"Boots","amount":103.99,"currency":"USD"}]}]},{"name":"Herren","categories":[{"name":"Kleidung","categories":[{"name":"Shirts","categories":[{"name":"Black T-shirt","amount":9.99,"currency":"USD","size":"XL"},{"name":"Polo T-shirt","amount":47.99,"currency":"USD","size":"M"},{"name":"White Shirt","amount":103.99,"currency":"USD","size":"L"}]},{"name":"Hose","categories":[{"name":"Blue Jeans","amount":78.99,"currency":"USD","size":"M"},{"name":"Stretch Hose","amount":54.99,"currency":"USD","size":"S"}]},{"name":"Shorts","categories":[{"name":"Trouser Short","amount":62.99,"currency":"USD","size":"M"},{"name":"Slim Short","amount":44.99,"currency":"USD","size":"S"}]}]},{"name":" Zubehör","categories":[{"name":"Tie","amount":36.99,"currency":"USD"},{"name":"Wallet","amount":47.99,"currency":"USD"},{"name":"Sunglasses","amount":199.99,"currency":"USD"}]},{"name":"Shoes","categories":[{"name":"Fashion Sneaker","amount":89.99,"currency":"USD"},{"name":"Sport Shoe","amount":47.99,"currency":"USD"},{"name":"Boots","amount":103.99,"currency":"USD"}]}]},{"name":"Mädchen","categories":[{"name":"Kleidung","categories":[{"name":"Shirts","categories":[{"name":"Red T-shirt","amount":16.99,"currency":"USD","size":"S"},{"name":"Tunic Top","amount":47.99,"currency":"USD","size":"M"},{"name":"Fuzzy Sweater","amount":103.99,"currency":"USD","size":"L"}]},{"name":"Hose","categories":[{"name":"Blue Jeans","amount":24.99,"currency":"USD","size":"M"},{"name":"Red Hose","amount":54.99,"currency":"USD","size":"S"}]},{"name":"Shorts","categories":[{"name":"Jeans Short","amount":32.99,"currency":"USD","size":"M"},{"name":"Sport Short","amount":14.99,"currency":"USD","size":"S"}]}]},{"name":" Zubehör","categories":[{"name":"Necklace","amount":26.99,"currency":"USD"},{"name":"Gloves","amount":7.99,"currency":"USD"},{"name":"Beanie","amount":12.99,"currency":"USD"}]},{"name":"Shoes","categories":[{"name":"Sport Shoes","amount":39.99,"currency":"USD"},{"name":"Boots","amount":87.99,"currency":"USD"},{"name":"Sandals","amount":63.99,"currency":"USD"}]}]},{"name":"jungen","categories":[{"name":"Kleidung","categories":[{"name":"Shirts","categories":[{"name":"Black T-shirt with Print","amount":16.99,"currency":"USD","size":"S"},{"name":"Blue Shirt","amount":47.99,"currency":"USD","size":"M"},{"name":"Yellow Sweater","amount":63.99,"currency":"USD","size":"L"}]},{"name":"Hose","categories":[{"name":"Blue Jeans","amount":44.99,"currency":"USD","size":"M"},{"name":"Brown Hose","amount":89.99,"currency":"USD","size":"S"}]},{"name":"Shorts","categories":[{"name":"Sport Short","amount":32.99,"currency":"USD","size":"M"},{"name":"Jeans Short","amount":99.99,"currency":"USD","size":"XS"},{"name":"Black Short","amount":56.99,"currency":"USD","size":"L"}]}]},{"name":" Zubehör","categories":[{"name":"Sunglasses","amount":36.99,"currency":"USD"},{"name":"Beanie","amount":17.99,"currency":"USD"},{"name":"Scarf","amount":15.99,"currency":"USD"}]},{"name":"Shoes","categories":[{"name":"Sneaker","amount":89.99,"currency":"USD"},{"name":"Sport Shoe","amount":47.99,"currency":"USD"},{"name":"Boots","amount":103.99,"currency":"USD"}]}]}]}},"sizes":[{"key":"XS","value":"Extra Small"},{"key":"S","value":"Small"},{"key":"M","value":"Medium"},{"key":"L","value":"Large"}]}',
	"poc/Acc/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"poc/Acc/view/App.view.xml":'<mvc:View controllerName="poc.Acc.controller.App" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc" displayBlock="true"><Shell><App id="app"><pages></pages></App></Shell></mvc:View>',
	"poc/Acc/view/Detail.view.xml":'<mvc:View controllerName="poc.Acc.controller.Detail" xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" displayBlock="true" xmlns="sap.m"><Page title="Detailseite"><content><Button text="Zurück" press="onPress" ariaLabelledBy="goBackToHome"/><core:InvisibleText id="goBackToHome" text="Zurück zur Hauptseite"/></content></Page></mvc:View>',
	"poc/Acc/view/Main.view.xml":'<mvc:View controllerName="poc.Acc.controller.Main" xmlns="sap.ui.table" xmlns:mvc="sap.ui.core.mvc" xmlns:m="sap.m" xmlns:u="sap.ui.unified"\n\txmlns:core="sap.ui.core" height="100%"><m:Page title="{i18n>title}"><m:customHeader><m:Toolbar><m:ToolbarSpacer/><m:Title text="Hauptseite"/><m:ToolbarSpacer/></m:Toolbar></m:customHeader><m:content><m:Toolbar><m:Title id="fontChange" text="Themes"></m:Title><m:Select width="auto" id="comboBox" items="{/items}" change=".onThemeChange" ariaLabelledBy="textComboBox"><core:Item key="{key}" text="{text}"/></m:Select><m:Title text="Font"></m:Title><m:Select width="auto" id="comboBoxFont" items="{/items}" change=".onFontChange" ariaLabelledBy="textComboBox"><core:Item key="{key}" text="{text}"/></m:Select><core:InvisibleText id="textComboBox" text="Auswahlliste zu änderung die App Theme"/></m:Toolbar><TreeTable id="TreeTableBasic" rows="{path:\'/catalog/clothing\', parameters: {arrayNames:[\'categories\']}}" selectionMode="None"\n\t\t\t\tenableSelectAll="false" ariaLabelledBy="title"><extension><m:OverflowToolbar><m:Title id="title" text="Kleidung Tabelle"/><m:ToolbarSpacer/><m:Button id="Button1" class="zoomTarget" text="Alle komprimieren" press="onbtnClicked" ariaDescribedBy="collapseAll"/><core:InvisibleText id="collapseAll" text="Alle tabellenzeile komprimieren"/><m:Button id="Button2" text="Selektierte komprimieren" press="onbtnClicked" ariaDescribedBy="collapseSelection"/><core:InvisibleText id="collapseSelection" text="selektierte tabellenzeile komprimieren"/><m:Button id="Button3" text="Erste ebne erweitern" press="onbtnClicked" ariaLabelledBy="expandFirstLevel"/><core:InvisibleText id="expandFirstLevel" text="erste tabelle ebene erweitern"/><m:Button id="Button4" text="Selektierte erweitern" press="onbtnClicked" ariaLabelledBy="expandSelection"/><core:InvisibleText id="expandSelection" text="selektierte tabellenzeile erweitern"/></m:OverflowToolbar></extension><columns><Column width="13rem"><m:Label text="Kategorien"/><template ariaDescribedBy="columnName"><m:Text text="{name}" wrapping="false"/></template></Column><Column width="9rem"><m:Label text="Preis"/><template><u:Currency value="{amount}" currency="{currency}"/></template></Column><Column width="11rem"><m:Label text="Größe"/><template><m:Select items="{path: \'/sizes\', templateShareable: true}" selectedKey="{size}" visible="{= !!${size}}" forceSelection="false"><core:Item key="{key}" text="{value}"/></m:Select></template></Column></columns></TreeTable><core:InvisibleText id="headerToolbarLabel" text="Haup Toolbar, Hier befindet sich alle werkzuegen zu Navigation zweck"/><core:InvisibleText id="rejectButtonDescription" text="Description of reject button goes here."/><core:InvisibleText id="comingSoonButtonDescription" text="This feature is not active just now."/><core:InvisibleText id="editButtonLabel" text="Edit Button Label"/><core:InvisibleText id="goToDetails" text="Springen zu Details Site"/><m:Button text="Zu Detailsite" press="onPress" ariaLabelledBy="goToDetails"/></m:content></m:Page></mvc:View>'
}});