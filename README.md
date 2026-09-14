<div align="center">
  <a href="https://yueyisui.github.io/StyleMapping-Studio/">
    <img src=".github/assets/stylemapping-mark.svg" width="88" alt="StyleMapping Studio 标志">
  </a>
  <h1>StyleMapping Studio</h1>
  <p><strong>把灵感映射到每一张照片</strong></p>
  <p>艺术与真实风格迁移，在你的设备上完成。</p>
  <p>
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases/tag/v0.1.0-beta"><img alt="Release v0.1.0-beta" src="https://img.shields.io/badge/Release-v0.1.0--beta-C7FF4A?style=flat-square&logo=github&logoColor=0B110D&labelColor=182018"></a>
    <img alt="Windows 10 和 11" src="https://img.shields.io/badge/Windows-10%20%7C%2011-2B7CD3?style=flat-square&logo=windows11&logoColor=white">
    <img alt="Android 10 及以上" src="https://img.shields.io/badge/Android-10%2B-3DDC84?style=flat-square&logo=android&logoColor=white">
    <img alt="本地推理" src="https://img.shields.io/badge/Inference-100%25%20Local-C7FF4A?style=flat-square&logo=shield&logoColor=0B110D&labelColor=182018">
  </p>
  <p>
    <strong>🇨🇳 中文</strong>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="README_EN.md">🌐 English</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://yueyisui.github.io/StyleMapping-Studio/">✨ 产品官网</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases">⬇️ 下载</a>
  </p>
</div>

---

StyleMapping Studio 是一款本地运行的 AI 图像风格迁移工具，支持艺术风格迁移与真实风格迁移。照片和模型推理都保留在用户设备上，不需要上传到云端。

## 下载

| 版本 | GitHub | 百度网盘 |
| --- | --- | --- |
| Windows GPU | 文件超过 GitHub 单文件限制 | [下载](https://pan.baidu.com/s/1rxog7HNFYwFWfMNj0-955w?pwd=21hs) · 提取码 `21hs` |
| Windows CPU | [下载 ZIP](https://github.com/yueyisui/StyleMapping-Studio/releases/download/v0.1.0-beta/StyleMapping-Studio-Windows-CPU.zip) | [备用下载](https://pan.baidu.com/s/1nV-9wP16F7swJOjM8bfxDw?pwd=3j4f) · 提取码 `3j4f` |
| Android | [下载 APK](https://github.com/yueyisui/StyleMapping-Studio/releases/download/v0.1.0-beta/StyleMapping-Studio-Android.apk) | [备用下载](https://pan.baidu.com/s/1ihqIyN6TyGy0Rsv0iCy4tg?pwd=4tv9) · 提取码 `4tv9` |

## 可用版本

| 平台 | 状态 | 说明 |
| --- | --- | --- |
| Windows GPU | Beta，可下载 | 推荐版本，支持 NVIDIA CUDA 加速，也可切换为 CPU |
| Windows CPU | Beta，可下载 | 无需独立显卡，适用于 Windows 10/11 |
| Android | Beta，可下载 | 适用于 Android 10 及以上设备 |
| iPhone | 开发中 | 尚未提供可安装版本 |

## 主要功能

- 艺术风格迁移与真实风格迁移
- 内容图与生成结果滑块对比
- 可调节风格强度
- Windows 自动检测 CUDA，也可使用 CPU
- Android 端本地推理
- 中英文界面
- Windows 便携版无需安装 Python、PyTorch 或 Node.js

## 安装方法

### Windows

1. 从上方表格下载对应的 ZIP。
2. 完整解压 ZIP，不要直接在压缩包内运行，也不要只复制 `.exe`。
3. GPU 版双击 `StyleMapping Studio.exe`；CPU 版双击 `StyleMapping Studio CPU.exe`。
4. 应用会使用默认浏览器打开本地界面。

### Android

下载并安装 APK。当前为 Beta 版本，Android 可能会要求确认安装未知来源应用。

## 隐私

应用不需要账号，图片不会上传到 StyleMapping Studio 服务器。详细说明见 [PRIVACY.md](PRIVACY.md)。

## 关于本仓库

本仓库用于产品官网、用户文档和安装包发布，当前不包含应用源码、训练代码、模型实现或模型权重。

---

由 [@yueyisui](https://github.com/yueyisui) 设计与开发 · [作者主页](https://yueyisui.github.io/)
