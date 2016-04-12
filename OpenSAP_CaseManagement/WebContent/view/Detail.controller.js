jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	formatMapUrl: function(sStreet, sPostalCode, sCity, sCountry) {
		return "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=500x300&markers="
		       + jQuery.sap.encodeURL(sStreet + ", " + sPostalCode +  " " + sCity + ", " + sCountry);
	},
	
	onBeforeRendering:function(){
		this.byId("SupplierForm").bindElement("BusinessPartner");
	},
	
	handleApprove : function (evt) {
		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
				bundle.getText("ApproveDialogMsg"),
				function (oAction) {
					if (sap.m.MessageBox.Action.OK === oAction) {
						//notify user
						var successMsg = bundle.getText("ApproveDialogSuccessMsg");
						sap.m.MessageToast.show(successMsg);
						// TODO call proper service method and update model (not part of this section
						
					} 
				},
				
				bundle.getText("ApprovedDialogTitle")
		);
	},
	
	handleOpenAttach : function (evt) {
		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
				//notify user
				var successMsg = bundle.getText("AttachDialogSuccessMsg");
				sap.m.MessageToast.show(successMsg);
				// TODO call proper service method and update model (not part of this section)
					
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	},
	
	onPost: function (evt) {
		//Cannot update mock model so will give a Toaster instead
		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
			var successMsg = bundle.getText("PostNoteMessage");
			sap.m.MessageToast.show(successMsg);
	},
});