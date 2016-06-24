sap.ui.define([], function() {
	"use strict";

	return {
		delivery: function(sMeasure, iWeight) {
			// ask question: is this the only way to access a certain model?
			// so Model?? > View > i18n-Model
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
				sResult = "";

			if(sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		},
		
		formatMapUrl: function(sStreetNumber, sStreetName, sCity, sCountry) {
			return 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x640&markers=' + sStreetNumber + ' ' + 
			sStreetName + ',' + sCity + ',' + sCountry + '&key=AIzaSyBmpmp6nRChQs00IUs5oGpYeyEfBLCzt3A';
		}
	};
});