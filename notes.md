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

corresponding binding path to be used when replacing raw strings:
- /company/name
- /company/info/employees
- /company/contacts


{helloPanel>/recipient/name}
  ^              ^
model name    binding path

same for i18n:
{i18n>showHelloButtonText}
  ^              ^
model name    binding path (i18n file is flat, leading slash can be ommited)

- enable mix of Text and binding syntax in the view: data-sap-ui-compatVersion="edge"
- i18n just another model
- .getText("helloMsg", [sRecipient]);  array containing placeholders for i18n file value
