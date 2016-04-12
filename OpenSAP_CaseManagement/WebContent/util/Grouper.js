jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
		
		bundle : null, // somebody has to set this
		
		LifecycleStatus : function (oContext) {
			var status = oContext.getProperty("LifecycleStatus");
			var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText("StatusText" + status, "?");
			return {
				key: status,
				text: text
			};
		},
		
		CompanyName : function (oContext) {
			var name = oContext.getProperty("CompanyName");
			var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText(CompanyName);
			
			//var price = oContext.getProperty("GrossAmount");
			//var currency = oContext.getProperty("CurrencyCode");
			//var key = null,
			//	text = null;
			//if (price <= 5000) {
			//	key = "LE10";
			//	text = "< 5000 " + currency;
			//} else if (price > 5000 && price <=10000) {
			//key = "LE100";
			//	text = "< 10,000 " + currency;
			//} else if (price > 10000) {
			//	key = "GT100";
			//	text = "> 10,000 " + currency;
			//}
			return {
				key: name,
				text: text
			};
		}
};