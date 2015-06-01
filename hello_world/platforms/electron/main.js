var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.
var Menu = require('menu');
var MenuItem = require('menu-item');
// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

var template = [{
    label: 'HelloWorld',
    submenu: [{
        label: 'About HelloWorld',
        selector: 'orderFrontStandardAboutPanel:'
    }, {
        type: 'separator'
    }, {
        label: 'Services',
        submenu: []
    }, {
        type: 'separator'
    }, {
        label: 'Hide HelloWorld',
        accelerator: 'Command+H',
        selector: 'hide:'
    }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
    }, {
        label: 'Show All',
        selector: 'unhideAllApplications:'
    }, {
        type: 'separator'
    }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() {
            app.quit();
        }
    }, ]
}, {
    label: 'Edit',
    submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
    }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
    }, {
        type: 'separator'
    }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
    }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
    }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
    }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
    }, ]
}, {
    label: 'View',
    submenu: [{
        label: 'Reload',
        accelerator: 'Command+R',
        click: function() {
            BrowserWindow.getFocusedWindow().reloadIgnoringCache();
        }
    }, {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function() {
            BrowserWindow.getFocusedWindow().toggleDevTools();
        }
    }, ]
}, {
    label: 'Window',
    submenu: [{
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
    }, {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
    }, {
        type: 'separator'
    }, {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
    }, ]
}, {
    label: 'Help',
    submenu: []
}, ];

var menu = Menu.buildFromTemplate(template);

// This method will be called when HelloWorld has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.setTitle('hello world');
    Menu.setApplicationMenu(menu);
    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
