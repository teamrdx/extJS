
// - Create a view with a field (with default value'foo'), and a button.
// - Pressing the button opens a window.

Ext.define('Codereview.view.main.HomeContainerView', {
    extend: 'Ext.container.Container',
    alias: 'widget.homeContainerView',
    viewModel: 'homeContainerViewModel',
    title: 'Playground',
    items :[
    {
        xtype:'component',
        bind:{
            html:`<h1>{defaultMessage}</h1>`
        }
    },
  
    {
        xtype:'button',
        bind:{
            text: `{defaultButtonText}`
        },
        handler: function(){
            Ext.create('Codereview.view.main.PopupWindowView').show()
              
        }

    }]

});


