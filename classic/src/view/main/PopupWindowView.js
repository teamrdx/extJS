
// - In that window you have a container with data-binding to the value of the field and a button
// - The button in the window closes the window and resets the value of the field.



Ext.define('Codereview.view.main.PopupWindowView', {
	extend: 'Ext.window.Window',
	alias:'widget.popupWindowView',
	viewModel: 'homeContainerViewModel',
    height: 200,
    width: 400,
    layout: 'fit',
    closeAction:'destroy',
     bind: {
        title: 'Hi {mentor}'
    },

    buttons: [
  	{
  		bind:{
  			text:`{defaultButtonText}`
  		},
  		handler: function(){

  			const vm = this.up('window').getViewModel();
  			vm.set('defaultButtonText', 'Like');
  			vm.set('defaultMessage', 'Thanks Torsten');
  			this.setIconCls('fa fa-thumbs-up');
  			this.up('window').close();
  		} 
  }],
    items:
   {  
		xtype:'component',
		padding: 9,
		bind: {
			html:`<h1>{defaultMessage}</h1>`
		}
    },
})


