/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Codereview.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
    defaultMessage:'Foo',
    defaultButtonText: "Click Me",
    name:"Codereview",
    mentor: "Torsten"
  },
});
