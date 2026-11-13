// Skoxa's — proceso principal de Electron.
const { app, BrowserWindow, shell, ipcMain, Menu, protocol, net } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

// la app se sirve desde app://skoxas/ (no desde file://) para que funcionen fetch, los módulos y WebAssembly
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);
const APP_DIR = path.join(__dirname, 'app');

if (!app.requestSingleInstanceLock()) { app.quit(); }

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 1440, height: 920, minWidth: 980, minHeight: 640,
    title: "Skoxa's", backgroundColor: '#f1f1f1', show: false,
    autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, sandbox: true, spellcheck: false }
  });
  // la app dibuja su propia barra de menús (Archivo, Editar, Ver, Ayuda)
  Menu.setApplicationMenu(Menu.buildFromTemplate([{ label: 'Desarrollo', visible: false, submenu: [
    { role: 'toggleDevTools', accelerator: 'F12' }, { role: 'reload', accelerator: 'CmdOrCtrl+Shift+R' } ] }]));
  win.loadURL('app://skoxas/index.html');
  win.once('ready-to-show', () => win.show());
  // enlaces externos: al navegador del sistema
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('app:')) { e.preventDefault(); shell.openExternal(url); } });
  // las descargas de la app (exportar, estilos…) abren el diálogo nativo de Guardar como
  // fuentes del sistema: la app las lista con window.queryLocalFonts() (permiso 'local-fonts')
  const ses = win.webContents.session, okPerm = p => p === 'local-fonts' || p === 'clipboard-sanitized-write';
  ses.setPermissionCheckHandler((wc, perm) => okPerm(perm));
  ses.setPermissionRequestHandler((wc, perm, cb) => cb(okPerm(perm)));
  win.webContents.session.on('will-download', (e, item) => { item.setSaveDialogOptions({ title: 'Guardar', defaultPath: path.join(app.getPath('documents'), item.getFilename()) }); });
}
ipcMain.handle('app:version', () => app.getVersion());
app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => {
  protocol.handle('app', req => {
    const rel = decodeURIComponent(new URL(req.url).pathname).replace(/^\/+/, '');
    const file = path.normalize(path.join(APP_DIR, rel || 'index.html'));
    if (!file.startsWith(APP_DIR)) return new Response('No permitido', { status: 403 });
    return net.fetch(pathToFileURL(file).toString());
  });
  createWindow();
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
