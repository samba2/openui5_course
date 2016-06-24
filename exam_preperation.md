What SAPUI5 control metadata is used to configure the UI elements at runtime?
Note: There are 3 correct answers to this question.
- properties
- associations
- aggregations

controller life cycle:
- onInit
  - bind event handlers

- onExit
  - when view is destroyed
  - free ressources
  - clean up events, callbacks...

What can be stored in manifest.json:
- root view
- supported themes
- supported device types

Which name spaces can be used in manifest.json:
- sap.ui
- sap.ui5
- sap.app

Icon path example:
- <Button text="Save Draft" icon="sap-icon://save" />

Predfined sizes:
- tiny, large, medium, small

Relative binding paths:
-  resolved relative to the context of the control that is bound

Aggregation binding:
- bind list of objects in an array to e.g. a List

Element binding:
- child controls to resolve their paths relative to the binding of the parent

Expression binding example:
- `"{= ${Price} < 300 ? 'Error' : 'Success'}"`

How can you access validation errors in SAPUI5?
- Register to the validationError event on sap.ui.getCore()
- Set handleValidation to true in the manifest.json file.

Implement these methods for custom data type:
- parseValue
- formatValue
- validateValue

Rebinding to a different context e.g. for showing object details:
- in the controller
```
updateElement: function(index) {
  oPanel.bindElement(�/company/contacts/� + index);
}
```

Showing/ hiding controls at runtime:
- set visible property to "false"

debug odata service:
- add "sap-ds-debug=true
" to true

Paging with odata:
- $top + $skip in combination
- interal to be displayed is defined

Valid Odata urls:
- /sap/opu/odata/XY/Objects?$expand=ToRelatedEntities
- /sap/opu/odata/XY/Object('ObjectID1')
- /sap/opu/odata/XY/Object('2000')/SomeProperty

Exand in odata:
- Some entities related to the specified entity are included in the response.


Object to which filters are applied:
- sap.ui.model.ListBinding

Using built-in datatypes:
- Use format options and constraints as defined in the API.

Where do you find documentation for SAPUI5 application templates?
- In the SAPUI5 demo kit

What do you have to do after you have generated a template?
- Check whether the texts in the i18n file are spelled correctly and fix them if necessary.

Semantic states in UI5:
- critical
- negative
- positive

Composing filters:
- creating a single sap.ui.model.Filter object and specifying a path, an operator, and up to two values
- creating multiple filters and concatenating them either with AND or OR

Where do filters apply?
- on aggregation binding

Two different content densities (Desktop vs. Tablet):
- cozy (tablet) vs. compact (desktop)

Which of the following controls adapts its appearance on touch devices?
- The PullToRefresh control: It is represented as a simple button on non-touch devices, but the user needs to pull the page content down on touch devices to refresh it.

Sturcturing the view
- fragments
  - `<core:Fragment fragmentName="sap.ui5.training.view.myXMLFragment" type="XML" />`
  - does not appear as separate div in the DOM
- nested view
  - <mvc:XMLView viewName="opensap.manageproducts.myView"/>

  - is a separate div in the DOM

Simple dialog based on XML fragement:
- Define
```
<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" >
  <Dialog title="My Dialog">
  </Dialog>
</core:FragmentDefinition>
```

- Usage:
```

var oDialog = sap.ui.xmlfragment( "opensap.manageproducts.view.myDialogFragment", oController);
this.getView().addDependent(oDialog);
oDialog.open();
```


Dialogs:
- are rendered into a specific area (the static area) in the DOM.
- need to be added to the "dependent" aggregation of the view to get access to the models.
- adding as dependent in controller or sub module:
```
`oController.getView().addDependent(this._getPopover);
`
...
_getPopover: function() {
  // create dialog lazily
  if (!this._oPopover) {
    // create popover via fragment factory
    this._oPopover = sap.ui.xmlfragment(
      "opensap.manageproducts.view.ResponsivePopover", this);
  }
  return this._oPopover;
}
```

Sequence of called functions / handled callbacks of the OData model in the Add controller:
- on metadataLoaded - createEntry - submit - on success

Smart Controls and OData
- show additional input fields for currencies
- set the label for input fields

Adding Data To OData model:
- The OData metadata has to be loaded.

