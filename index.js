const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 750,
    minWidth: 400,
    minHeight: 500,
  });

  win.loadFile('app.html');
}
app.whenReady().then(() => {
  createWindow();
});
