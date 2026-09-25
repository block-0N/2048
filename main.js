const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 560,
    height: 780,
    minWidth: 520,
    minHeight: 740,
    maximizable: false,
    fullscreenable: false,
    // 开发时给窗口加图标；打包后 exe 图标会自动生效
    icon: app.isPackaged ? undefined : path.join(__dirname, 'build', 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  mainWindow.loadFile('index.html')

  // 调试用：打开开发者工具，正式打包注释掉
  // mainWindow.webContents.openDevTools()
}

// 单实例锁：第二次启动时聚焦已有窗口
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.show()
      mainWindow.focus()
    }
  })

  app.whenReady().then(() => {
    // 移除默认菜单（File / Edit / View / Window / Help）
    Menu.setApplicationMenu(null)

    createWindow()

    // macOS：点 Dock 图标且无窗口时重建
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})