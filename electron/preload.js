// electron/preload.js
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // Expose APIs to the renderer process
  someFunction: () => ipcRenderer.invoke('some-channel'),
});
