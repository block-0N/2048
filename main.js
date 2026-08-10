const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // 加载本地静态 index.html
  mainWindow.loadFile('index.html')

  // 调试用：打开开发者工具，正式打包注释掉
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})