// Puente mínimo entre la página y Electron. La app detecta el escritorio con window.skoxas.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('skoxas', {
  desktop: true,
  platform: process.platform,
  version: () => ipcRenderer.invoke('app:version')
});
