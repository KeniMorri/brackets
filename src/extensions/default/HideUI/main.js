/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets: true*/

define(function (require, exports, module) {
"use strict";

var CommandManager 	= brackets.getModule("command/CommandManager"),
Menus          		= brackets.getModule("command/Menus"),
AppInit        		= brackets.getModule("utils/AppInit"),
//SidebarView    		= brackets.getModule("project/SidebarView"),
Resizer        		= brackets.getModule("utils/Resizer");

function main(){
	//SidebarView.hide();
	console.log("Check");
	//console.log(Resizer.makeResizable("#sidebar"));
	Resizer.hide("#sidebar");
	Resizer.makeResizable("#main-toolbar");
	Resizer.hide("#main-toolbar");
	//console.log(Resizer.makeResizable("#titlebar"));
	//console.log(Resizer.hide("#titlebar"));
	
	//remove the file menu
	//Menus.removeMenu(Menus.AppMenuBar.FILE_MENU);

	//remove the edit menu
	Menus.removeMenu(Menus.AppMenuBar.EDIT_MENU);

	//remove the find menu
	Menus.removeMenu(Menus.AppMenuBar.FIND_MENU);

	//remove the view menu
	Menus.removeMenu(Menus.AppMenuBar.VIEW_MENU);

	//remove the navigate menu
	Menus.removeMenu(Menus.AppMenuBar.NAVIGATE_MENU);

	//remove the help menu
	Menus.removeMenu(Menus.AppMenuBar.HELP_MENU);
	    
}

// First, register a command - a UI-less object associating an id to a handler
var MY_COMMAND_ID = "RemoveUI"; // package-style naming to avoid collisions
CommandManager.register("Remove UI", MY_COMMAND_ID, main);

// Then create a menu item bound to the command
// The label of the menu item is the name we gave the command (see above)
var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-H");

AppInit.appReady(function(){
	main();
});
});