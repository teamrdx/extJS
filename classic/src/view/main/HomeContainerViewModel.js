// @hint always stay with 4 spaces indent. Do not switch between files
Ext.define('Codereview.view.main.HomeContainerViewModel', {
    extend: 'Ext.app.ViewModel',
    // @hint no need to add ViewModel to the name => alias: 'viewmodel.homeContainer'
    alias: 'viewmodel.homeContainerViewModel',

    data: {
        defaultMessage:'Foo',
        defaultButtonText: "Click Me",
        name:"Codereview",
        mentor: "Torsten"
    }, // Trailing comma
    /*
    // @hint structure your data
    data: {
        form: {
            defaultMessage:'Foo'
        },
        language: {
            defaultButtonText: "Click Me"
        },

        name:"Codereview",
        mentor: "Torsten"
    },
     */
})