sap.ui.define([], function() {
	"use strict";

	return {
		onShowDetailPopover: function(oEvent, oController) {
			var oPopover = this._getPopover();
			var oSource = oEvent.getSource();
			// connect dialog to view (models, lifecycle)
			oController.getView().addDependent(oPopover);
			oPopover.bindElement(oSource.getBindingContext().getPath());

			// open dialog
			oPopover.openBy(oEvent.getParameter("domRef"));
		},
		
		_getPopover: function() {
			// create dialog lazily
			if (!this._oPopover) {
				// create popover via fragment factory
				this._oPopover = sap.ui.xmlfragment(
					"opensap.manageproducts.view.ResponsivePopover", this);
			}
			return this._oPopover;
		}
	};

});