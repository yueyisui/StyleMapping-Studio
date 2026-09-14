<div align="center">
  <a href="https://yueyisui.github.io/StyleMapping-Studio/">
    <img src=".github/assets/stylemapping-mark.svg" width="88" alt="StyleMapping Studio logo">
  </a>
  <h1>StyleMapping Studio</h1>
  <p><strong>把灵感映射到每一张照片 · Map inspiration onto every photo</strong></p>
  <p>艺术与真实风格迁移，在你的设备上完成。</p>
  <p>
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases/tag/v0.1.0-beta"><img alt="Release v0.1.0-beta" src="https://img.shields.io/badge/Release-v0.1.0--beta-C7FF4A?style=flat-square&logo=github&logoColor=0B110D&labelColor=182018"></a>
    <img alt="Windows 10 and 11" src="https://img.shields.io/badge/Windows-10%20%7C%2011-2B7CD3?style=flat-square&logo=windows11&logoColor=white">
    <img alt="Android 10 or later" src="https://img.shields.io/badge/Android-10%2B-3DDC84?style=flat-square&logo=android&logoColor=white">
    <img alt="Local inference" src="https://img.shields.io/badge/Inference-100%25%20Local-C7FF4A?style=flat-square&logo=shield&logoColor=0B110D&labelColor=182018">
  </p>
  <p>
    <a href="#中文">🇨🇳 中文</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="#english">🌐 English</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://yueyisui.github.io/StyleMapping-Studio/">✨ 产品官网 / Website</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases">⬇️ 下载 / Releases</a>
  </p>
</div>

---

## 中文

StyleMapping Studio 是一款本地运行的 AI 图像风格迁移工具，支持艺术风格迁移与真实风格迁移。照片和模型推理都保留在用户设备上，不需要上传到云端。

### 可用版本

| 平台 | 状态 | 说明 |
| --- | --- | --- |
| Windows GPU | Beta，分发优化中 | 推荐版本，支持 NVIDIA CUDA 加速，也可切换为 CPU |
| Windows CPU | Beta，可下载 | 无需独立显卡，适用于 Windows 10/11 |
| Android | Beta，可下载 | 适用于 Android 10 及以上设备 |
| iPhone | 开发中 | 尚未提供可安装版本 |

### 主要功能

- 艺术风格迁移与真实风格迁移
- 内容图与生成结果滑块对比
- 可调节风格强度
- Windows 自动检测 CUDA，也可使用 CPU
- Android 端本地推理
- 中英文界面
- Windows 便携版无需安装 Python、PyTorch 或 Node.js

### 安装方法

#### Windows

1. 从 [Releases](https://github.com/yueyisui/StyleMapping-Studio/releases) 下载对应的 ZIP。
2. 完整解压 ZIP，不要直接在压缩包内运行，也不要只复制 `.exe`。
3. CPU 版双击 `StyleMapping Studio CPU.exe`；GPU 版发布后双击 `StyleMapping Studio.exe`。
4. 应用会使用默认浏览器打开本地界面。

#### Android

从 Releases 下载 APK 后安装。当前为 Beta 版本，Android 可能会要求确认安装未知来源应用。

### 隐私

应用不需要账号，图片不会上传到 StyleMapping Studio 服务器。详细说明见 [PRIVACY.md](PRIVACY.md)。

### 关于本仓库

本仓库用于产品官网、用户文档和安装包发布，当前不包含应用源码、训练代码、模型实现或模型权重。安装包通过 GitHub Releases 提供。

---

## English

StyleMapping Studio is a local-first AI image style transfer application supporting both artistic and photorealistic transfer. Your photos and model inference stay on your device—nothing needs to be uploaded to the cloud.

### Available editions

| Platform | Status | Description |
| --- | --- | --- |
| Windows GPU | Beta, distribution in progress | Recommended edition with NVIDIA CUDA acceleration and optional CPU mode |
| Windows CPU | Beta, available | No dedicated GPU required; supports Windows 10/11 |
| Android | Beta, available | For devices running Android 10 or later |
| iPhone | In development | No installable build is available yet |

### Highlights

- Artistic and photorealistic style transfer
- Interactive before-and-after comparison slider
- Adjustable style intensity
- Automatic CUDA detection on Windows with CPU fallback
- On-device inference on Android
- Chinese and English interface
- No separate Python, PyTorch, or Node.js installation for Windows portable builds

### Installation

#### Windows

1. Download the appropriate ZIP from [Releases](https://github.com/yueyisui/StyleMapping-Studio/releases).
2. Extract the entire ZIP. Do not run the app inside the archive or copy only the `.exe` file.
3. Launch `StyleMapping Studio CPU.exe` for the CPU edition. The GPU edition will use `StyleMapping Studio.exe` when published.
4. The application opens its local interface in your default browser.

#### Android

Download and install the APK from Releases. This is a Beta build, so Android may ask you to allow installation from an unknown source.

### Privacy

No account is required, and your images are not uploaded to a StyleMapping Studio server. See [PRIVACY.md](PRIVACY.md) for details.

### About this repository

This repository distributes the product website, user documentation, and release binaries. Application source code, training code, model implementations, and model weights are not included at this stage.

---

Designed and developed by [@yueyisui](https://github.com/yueyisui) · [Author website](https://yueyisui.github.io/)
