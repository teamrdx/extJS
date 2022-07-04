/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Codereview.Application',

    name: 'Codereview',

    requires: [
        // This will automatically load all classes in the Codereview namespace
        // so that application classes do not need to require each other.
        'Codereview.*'
    ],

    // The name of the initial view to create.
    mainView: 'Codereview.view.main.Main'
});
