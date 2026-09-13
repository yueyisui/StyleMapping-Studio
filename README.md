# StyleMapping Studio

StyleMapping Studio 是一款本地运行的 AI 图像风格迁移工具，支持艺术风格迁移与真实风格迁移。照片与模型推理都保留在用户设备上，不需要上传到云端。

[产品官网](https://yueyisui.github.io/StyleMapping-Studio/) · [下载最新版本](https://github.com/yueyisui/StyleMapping-Studio/releases/latest) · [作者主页](https://yueyisui.github.io/)

## 可用版本

| 平台 | 版本 | 说明 |
| --- | --- | --- |
| Windows GPU | Beta | 支持 NVIDIA CUDA 加速，并可切换 CPU 模式 |
| Windows CPU | Beta | 无需独立显卡，体积更小 |
| Android | Beta | Android 10 及以上 |
| iPhone | 开发中 | 尚未提供可安装版本 |

## 主要功能

- 艺术风格迁移与真实风格迁移
- 内容图与生成结果滑块对比
- 可调节风格强度
- Windows 自动检测 CUDA，也可使用 CPU
- Android 本地推理
- 中英文界面
- 无需安装 Python、PyTorch 或 Node.js

## 安装

### Windows

1. 从 [Releases](https://github.com/yueyisui/StyleMapping-Studio/releases) 下载 GPU 或 CPU ZIP。
2. 解压完整 ZIP，不要只复制其中的 `.exe`。
3. 双击文件夹中的启动程序（GPU 版为 `StyleMapping Studio.exe`，CPU 版为 `StyleMapping Studio CPU.exe`）。
4. 应用会使用默认浏览器打开本地界面。

### Android

从 Releases 下载 APK 后安装。当前为测试版本，Android 可能会要求确认安装未知来源应用。

## 隐私

应用不需要账号，图片不会上传到 StyleMapping Studio 服务器。详细说明见 [PRIVACY.md](PRIVACY.md)。

## 关于本仓库

本仓库用于产品官网、用户文档和安装包发布。当前不包含应用源码、训练代码、模型实现或模型权重；安装程序通过 GitHub Releases 单独提供。

## 作者

Designed and developed by [@yueyisui](https://github.com/yueyisui).

---

StyleMapping Studio is a local-first AI style transfer application for Windows and Android. It supports artistic and photorealistic transfer without uploading user photos. This repository currently distributes the product website, documentation, and release binaries; application and model source code are not included.
