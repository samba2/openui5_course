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
- ComponentContainer in index.html > searches for a file "Container.js" in the root
- manifest.json
  - "App Descriptor"
  - sap.app namespace: infos for Fior Lauchpad (FLP)
  - sap.ui namespace: supported device types by the app
  - sap.ui5 namespace: 
    - added UI5 specific config parameters
    - automatically processed by UI5
    - rootView: starting view of the component
    - dependencies of libs
    - models which are instantiated when app starts
