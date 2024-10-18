import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreenable: false, // Ensures fullscreen doesn't cover taskbar
    frame: true, // Keeps the frame (with close, minimize, maximize buttons)
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false, 
      nodeIntegration: false 
    }
  });

  // Maximize the window on open
  win.maximize();

  win.loadURL('http://localhost:3000'); 

  // Remove menu if you don't want it
  const customMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(customMenu);
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
