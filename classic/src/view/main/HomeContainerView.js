/**
 * Assignment:
 *  - Create a view with a field (with default value'foo'), and a button.
 *  - Pressing the button opens a window.
 */
Ext.define('Codereview.view.main.HomeContainerView', {
    // @hint using a field, you should go with a formpanel here
    extend: 'Ext.container.Container',
    // @hint no need to add view/viewModel/viewController for alias
    // @hint Please use xtype for views instead of alias
    alias: 'widget.homeContainerView',
    // @hint keep an empty line after alias.
    // @hint always use: viewModel: {type: 'homeContainer'}
    viewModel: 'homeContainerViewModel',
    // @hint after viewModel and controller keep an empty line
    title: 'Playground',
    // @hint before layout and items keep an empty line
    items: [{
        // @hint this is supposed to be a field, but you used a component
        // @link https://docs.sencha.com/extjs/7.5.1/guides/components/forms.html
        xtype: 'component',
        bind: {
            html: `<h1>{defaultMessage}</h1>`
        }
    }, {
        xtype: 'button',
        bind: {
            text: `{defaultButtonText}`
        },
        // @hint Use a viewController instead of inline code => handler: 'onOpenWindowBtnClick
        handler: function () {
            // @hint missing semicolon at end
            Ext.create('Codereview.view.main.PopupWindowView').show()
        }
    }]
});


