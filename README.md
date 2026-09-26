# 2048

一个用 Electron 打包的桌面版 2048 游戏。

![screenshot](docs/screenshot.png)

## 简介

经典 2048 游戏的桌面版实现。游戏逻辑使用原生 JavaScript 编写，通过 Electron 打包为 Windows 桌面应用。

## 功能

- 4×4 棋盘，方向键 / WASD 控制
- 相同数字合并，目标合成 2048
- 分数统计与最高分本地持久化
- 胜利 / 失败判定与提示
- 方块出现与合并动画
- 响应式布局，适配不同窗口尺寸
- 单实例运行
- 触摸滑动支持

## 技术栈

| 项 | 版本 |
|---|---|
| Electron | ^42.4.1 |
| electron-builder | ^25.1.8 |
| 语言 | JavaScript (CommonJS) |
| 前端 | 原生 HTML / CSS / JS |

## 运行

```bash
# 安装依赖
npm install

# 启动
npm start
```

## 打包

```bash
# 打包 Windows 安装包（NSIS）
npm run build-win
```

产物输出到 `dist/`，文件名形如 `2048-Setup-1.0.0.exe`。

> 本地打包若遇到 Windows 符号链接权限错误，请开启「设置 → 系统 → 开发者选项 → 开发人员模式」，或以管理员身份运行终端。

## 项目结构

```
2048/
├── main.js              # Electron 主进程
├── index.html           # 游戏页面
├── 2048.js              # 游戏逻辑
├── 2048.css             # 样式
├── build/
│   ├── icon.svg         # 图标源文件
│   └── icon.ico         # 打包用图标
├── .github/workflows/
│   └── build.yml        # CI 构建配置
├── package.json
└── README.md
```

## 持续集成

推送到 `main` 分支时，GitHub Actions 自动：

1. 在 `windows-latest` 上安装依赖
2. 执行 `npm run build-win`
3. 上传安装包为 `windows-build` artifact

可在 [Actions](https://github.com/block-0N/2048/actions) 页面下载最新构建产物。

## 快捷键

| 按键 | 功能 |
|---|---|
| ↑ / W | 上移 |
| ↓ / S | 下移 |
| ← / A | 左移 |
| → / D | 右移 |

## License

[MIT](LICENSE) © 2026 block-0N
```