<div align="center">
  <a href="https://yueyisui.github.io/StyleMapping-Studio/">
    <img src=".github/assets/stylemapping-mark.svg" width="88" alt="StyleMapping Studio logo">
  </a>
  <h1>StyleMapping Studio</h1>
  <p><strong>Map inspiration onto every photo</strong></p>
  <p>Artistic and photorealistic style transfer, processed on your device.</p>
  <p>
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases/tag/v0.1.0-beta"><img alt="Release v0.1.0-beta" src="https://img.shields.io/badge/Release-v0.1.0--beta-C7FF4A?style=flat-square&logo=github&logoColor=0B110D&labelColor=182018"></a>
    <img alt="Windows 10 and 11" src="https://img.shields.io/badge/Windows-10%20%7C%2011-2B7CD3?style=flat-square&logo=windows11&logoColor=white">
    <img alt="Android 10 or later" src="https://img.shields.io/badge/Android-10%2B-3DDC84?style=flat-square&logo=android&logoColor=white">
    <img alt="Local inference" src="https://img.shields.io/badge/Inference-100%25%20Local-C7FF4A?style=flat-square&logo=shield&logoColor=0B110D&labelColor=182018">
  </p>
  <p>
    <a href="README.md">🇨🇳 中文</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <strong>🌐 English</strong>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://yueyisui.github.io/StyleMapping-Studio/">✨ Website</a>&nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://github.com/yueyisui/StyleMapping-Studio/releases">⬇️ Downloads</a>
  </p>
</div>

---

StyleMapping Studio is a local-first AI image style transfer application supporting both artistic and photorealistic transfer. Your photos and model inference stay on your device—nothing needs to be uploaded to the cloud.

## Downloads

| Edition | GitHub | Baidu Netdisk |
| --- | --- | --- |
| Windows GPU | File exceeds GitHub's per-file limit | [Download](https://pan.baidu.com/s/1rxog7HNFYwFWfMNj0-955w?pwd=21hs) · code `21hs` |
| Windows CPU | [Download ZIP](https://github.com/yueyisui/StyleMapping-Studio/releases/download/v0.1.0-beta/StyleMapping-Studio-Windows-CPU.zip) | [Mirror](https://pan.baidu.com/s/1nV-9wP16F7swJOjM8bfxDw?pwd=3j4f) · code `3j4f` |
| Android | [Download APK](https://github.com/yueyisui/StyleMapping-Studio/releases/download/v0.1.0-beta/StyleMapping-Studio-Android.apk) | [Mirror](https://pan.baidu.com/s/1ihqIyN6TyGy0Rsv0iCy4tg?pwd=4tv9) · code `4tv9` |

## Available editions

| Platform | Status | Description |
| --- | --- | --- |
| Windows GPU | Beta, available | Recommended edition with NVIDIA CUDA acceleration and optional CPU mode |
| Windows CPU | Beta, available | No dedicated GPU required; supports Windows 10/11 |
| Android | Beta, available | For devices running Android 10 or later |
| iPhone | In development | No installable build is available yet |

## Highlights

- Artistic and photorealistic style transfer
- Interactive before-and-after comparison slider
- Adjustable style intensity
- Automatic CUDA detection on Windows with CPU fallback
- On-device inference on Android
- Chinese and English interface
- No separate Python, PyTorch, or Node.js installation for Windows portable builds

## Installation

### Windows

1. Download the appropriate ZIP from the table above.
2. Extract the entire ZIP. Do not run the app inside the archive or copy only the `.exe` file.
3. Launch `StyleMapping Studio.exe` for the GPU edition or `StyleMapping Studio CPU.exe` for the CPU edition.
4. The application opens its local interface in your default browser.

### Android

Download and install the APK. This is a Beta build, so Android may ask you to allow installation from an unknown source.

## Privacy

No account is required, and your images are not uploaded to a StyleMapping Studio server. See [PRIVACY.md](PRIVACY.md) for details.

## About this repository

This repository distributes the product website, user documentation, and release binaries. Application source code, training code, model implementations, and model weights are not included.

---

Designed and developed by [@yueyisui](https://github.com/yueyisui) · [Author website](https://yueyisui.github.io/)
