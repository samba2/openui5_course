Links
=====
- course: https://open.sap.com/courses/ui51/progress
- web ide: https://webide-p1942041657trial.dispatcher.hanatrial.ondemand.com/
- Backend: https://sapes4.sapdevcenter.com/
- other: https://encipher.it?DPeg

Debugging
=========

General
-------
- Techical Information Dialog: *CTRL + ALT + SHIFT + P*
  - enable debug sources here
- Diagnostics Window: *CTRL + ALT + SHIFT + S*
  - also enable/ disable debug sources here
  - control tree -> like element tab of dev tools but only for UI5 widgets
- filter debugging messages with the built-in filter levels of the dev tools.
- Quick console in Dev. Tools: press *ESC*

Inside The Console
------------------
- Retrieving a control in the console: `yourControl = sap.ui.getCore().byId(“yourID”);`
- information about a control:
  - `yourControl.getMetadata()` - check for the class details
  - `yourControl.getParent()` - returns the parent control in the control tree
  - `yourControl.` - shows you all available methods in the console

Snippets
--------
- ComponentContainer
  - can be Fiori Launhpad or
  - index.html
  - searches for a file "Container.js" in the root of app
- manifest.json
  - "App Descriptor"
  - sap.app namespace: infos for Fiori Lauchpad (FLP)
  - sap.ui namespace: supported device types by the app
  - sap.ui5 namespace: 
    - added UI5 specific config parameters
    - automatically processed by UI5
    - rootView: starting view of the component
    - dependencies of libs
    - models which are instantiated when app starts
- for details on app startup: Developer Guide > Developing Apps > App Initialization

Binding Path
------------
Example model:
```
{  
   "company":{  
      "name":"Treefish Inc",
      "info":{  
         "employees":"3"
      },
      "contacts":[  
         {  
            "name":"Barbara",
            "phone":"873"
         },
         {  
            "name":"Gerry",
            "phone":"734"
         }
      ]
   }
}
```

corresponding binding path to be used when replacing raw strings:
- /company/name
- /company/info/employees
- /company/contacts


```
{helloPanel>/recipient/name}
  ^              ^
model name    binding path
```
same for i18n:
```
{i18n>showHelloButtonText}
  ^              ^
model name    binding path (i18n file is flat, leading slash can be ommited)
```
- enable mix of Text and binding syntax in the view: data-sap-ui-compatVersion="edge"
- i18n just another model
- `.getText("helloMsg", [sRecipient]);`  array containing placeholders for i18n file value

Download and Run Example from Explored App
------------------------------------------
- select Control
- "Samples" > Pick the interessting one
- click upper right icon "Show source code..."
- when source code is displayed there is a download button at the upper right corner
- a zip file is downloaded
- in Web IDE > import from local file system
- the example contains all data incl. index.html to run independently

- Page Control/ Tag: offers functionality to navigate between pages with animations
- css margins: ...begin and "..end" instead of left/ right for right to left languages support

More On Data Binding
====================
- Models are bound to the component and propagated to the childen of the component
- models can also be set on a lower level of the hierarchy and will then be propagated further down to the children
- propertiy binding
  - one json value to a specific field in view
- aggregation binding
  - pack content of a list e.g. a JSON array to rows in the view

- model inheritance
   - from parent to child
   - setting model on the core is not recommended
   - if set in the manifest.json (app descriptor) then the model is set to the component

### Extended Binding Syntax With Multiple Parts
  - example: `text="{ parts: [ {path: 'WeightUnit'}, {path: 'WeightMeasure'} ], formatter : '.formatter.delivery' }"`
  - to display this text
    - call the function "formatter.delivery" of the current controller
    - as arguments of the formatter pass in the values of *WeightUnit* and *WeightMeasure* of the model 

### Expression Binding
  - starts with "{=" or "{:"
  - `data-sap-ui-xx-bindingSyntax="complex"` has to be turned on
  - ternary operator
  - logic inside view, not in the controller
  - to be used for trivial formatting

### Normal Binding vs. Expression Binding Example
View:
```
<mvc:View controllerName="sample.App" xmlns="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
...
  <Icon src="sap-icon://message-warning" visible="{path:'status', formatter:'.myFormatter'}">
...
</mvc:View>
```

Controller:
```
...
myFormatter: function(sStatus) {
  return sStatus === "critical";
}
...
```

With Expression Binding:
```
<mvc:View controllerName="sample.app" xmlns="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
...
  <Icon src="sap-icon://message-warning" visible="{= ${status} === 'critical' }">
...
</mvc:View>
```

### Formatter
 - basic datatypes like Integer, Date with formatting options
 - also own data type possible when inheriting from SimpleType
 - debug data validation
   - `sap.ui.getCore().attachValidationError(function(event){debugger;})`
   - get the control which fired an event: `oEvent.getSource()`
   - get the binding path right away: `oEvent.getSource().getBindingContextPath()`

### ListBinding
 - used to manipulated data displayed in a table
 - manipulation takes place in the controller
 - https://sapui5.hana.ondemand.com/docs/api/symbols/sap.ui.model.ListBinding.html
Example, Register one of the filters stored in _mFilters, depending on users input:
```
		_mFilters: {
			cheap: [new sap.ui.model.Filter("Price", "LT", 100)],
			moderate: [new sap.ui.model.Filter("Price", "BT", 100, 1000)],
			expensive: [new sap.ui.model.Filter("Price", "GT", 1000)]
		},
		...
				onQuickFilter: function(oEvent) {
			var sKey = oEvent.getParameter("key"),
				oFilter = this._mFilters[sKey],
				oTable = this.byId("table"),
				oBinding = oTable.getBinding("items");
			if (oFilter) {
				oBinding.filter(oFilter);
			} else {
				oBinding.filter([]);
			}
		},
```
### Responsive
 - simple hiding of content via CSS: `sapUiHideOnPhone`
 - data structure with device information: `sap.ui.Device`
#### auto responsive panels:
 - panel supports "expandable" property (boolean)
 - trick: bind the boolean "sap.ui.Device.system.phone" into propery
1. create new device model in "models" dir:
```
			createDeviceModel : function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode("OneWay");
				return oModel;
			}
```
2. this model is registered for the app in Component.js/ init:
```
  init: function() {
        ...
				// set the device model
				this.setModel(models.createDeviceModel(), "device");
```
3. use this model to dynamically flip switches of controls:
```
 			<Panel
        ...
				expandable="{device>/system/phone}"
				expanded="true">
```
