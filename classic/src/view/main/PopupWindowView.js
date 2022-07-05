/**
 * Assignment
 *  - In that window you have a container with data-binding to the value of the field and a button
 *  - The button in the window closes the window and resets the value of the field.
 */
Ext.define('Codereview.view.main.PopupWindowView', {
	extend: 'Ext.window.Window',
	alias:'widget.popupWindowView',
	// @hint empty line after alias
	// @hint use viewmodel with type, but viewcontroller without type
	viewModel: 'homeContainerViewModel',
	// @hint empty line after viewModel and viewController
	height: 200,
	width: 400,
	// @hint layout always comes before items, because it layouts the items
	layout: 'fit',
	closeAction:'destroy',
	// @hint 1 space too much
	bind: {
		title: 'Hi {mentor}'
	},

	// @hint visually the buttonbar goes underneath the items. Move `buttons` below `items`
	// @personal flavor: I keep `[{` in one line. But if your project keeps them apart leave as is.
	buttons: [
		{
			bind:{
				text:`{defaultButtonText}`
			},
			// @hint 1 line is an empty line?
			// @hint => space between closing bracket and curly bracket `function() {`
			// @hint almost never use inline functionality ==> handler: 'onResetBtnClick' in Controller
			handler: function(){

				const vm = this.up('window').getViewModel();
				// @hint empty line after declaration
				vm.set('defaultButtonText', 'Like');
				vm.set('defaultMessage', 'Thanks Torsten');
				// @hint Add comments and to exppoplain what you are doing and why
				// @hint empty lines between different type of actions
				this.setIconCls('fa fa-thumbs-up');
				// @hint empty lines between different type of actions
				this.up('window').close();
			}
// @hhint if you use an IDE like Webstorm autoformat your code before uploading. Here missing space
		}],
	items:
		{
			xtype:'component',
			padding: 9,
			bind: {
				html:`<h1>{defaultMessage}</h1>`
			}
			// @hint no trailing comma
		},
})